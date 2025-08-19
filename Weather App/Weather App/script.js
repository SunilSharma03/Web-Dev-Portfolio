// Minimal, fast weather app
// - Caching with stale-while-revalidate (5 min TTL)
// - Request cancellation on rapid searches
// - Simple UI updates and error handling

(function() {
  const API_BASE = 'https://api.weatherapi.com/v1/current.json';
  const API_KEY = 'df30a5b1caf14e6190e152231251908';
  const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes
  const CACHE_NS = 'weather-cache-v1';

  const form = document.getElementById('search-form');
  const input = document.getElementById('location-input');
  const button = document.getElementById('search-button');
  const statusEl = document.getElementById('status');
  const card = document.getElementById('result');
  const placeEl = document.getElementById('place');
  const timeEl = document.getElementById('localtime');
  const iconEl = document.getElementById('icon');
  const tempCEl = document.getElementById('tempC');
  const condEl = document.getElementById('condition');

  let inflightController = null;

  function setStatus(message) {
    statusEl.textContent = message || '';
  }

  function showCard(show) {
    if (show) card.classList.remove('hidden');
    else card.classList.add('hidden');
  }

  function normalizedQuery(raw) {
    return (raw || '').trim().replace(/\s+/g, ' ');
  }

  function cacheKey(q) {
    return `${CACHE_NS}:${q.toLowerCase()}`;
  }

  function readCache(q) {
    try {
      const raw = localStorage.getItem(cacheKey(q));
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (!parsed || Date.now() - parsed.timestamp > CACHE_TTL_MS) return null;
      return parsed.data;
    } catch (_) {
      return null;
    }
  }

  function writeCache(q, data) {
    try {
      localStorage.setItem(cacheKey(q), JSON.stringify({ timestamp: Date.now(), data }));
    } catch (_) {
      // ignore quota errors
    }
  }

  function renderWeather(json) {
    const { location, current } = json;
    placeEl.textContent = `${location.name}, ${location.country}`;
    timeEl.textContent = location.localtime;
    const iconUrl = (current.condition.icon || '').startsWith('http')
      ? current.condition.icon
      : `https:${current.condition.icon}`;
    iconEl.src = iconUrl;
    iconEl.alt = current.condition.text || 'weather';
    tempCEl.textContent = `${Math.round(current.temp_c)}°C`;
    condEl.textContent = current.condition.text || '';
    showCard(true);
  }

  async function fetchWeather(q, { signal }) {
    const url = `${API_BASE}?key=${API_KEY}&q=${encodeURIComponent(q)}&aqi=yes`;
    const res = await fetch(url, { signal, headers: { 'Accept': 'application/json' } });
    if (!res.ok) {
      const text = await res.text().catch(() => '');
      throw new Error(`Request failed (${res.status}) ${text}`);
    }
    return res.json();
  }

  async function performSearch(raw) {
    const q = normalizedQuery(raw);
    if (!q) {
      setStatus('Please enter a location');
      showCard(false);
      return;
    }

    // Cancel previous request
    if (inflightController) inflightController.abort();
    inflightController = new AbortController();

    button.disabled = true;
    setStatus('Loading…');
    showCard(false);

    const cached = readCache(q);
    if (cached) {
      renderWeather(cached);
      setStatus('Showing cached data… updating');
    }

    try {
      const data = await fetchWeather(q, { signal: inflightController.signal });
      writeCache(q, data);
      renderWeather(data);
      setStatus(`Updated at ${data.current.last_updated}`);
    } catch (err) {
      if (err.name === 'AbortError') return; // superseded
      if (!cached) {
        setStatus('Could not fetch weather. Check the location and try again.');
        showCard(false);
      } else {
        setStatus('Showing cached data (offline)');
      }
    } finally {
      button.disabled = false;
    }
  }

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    performSearch(input.value);
  });

  // Allow Enter key on input to trigger search explicitly on some mobile browsers
  input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      form.requestSubmit();
    }
  });

  // Try to read last searched location
  try {
    const last = localStorage.getItem(`${CACHE_NS}:lastQuery`);
    if (last) {
      input.value = last;
      performSearch(last);
    }
  } catch (_) {}

  // Persist last query
  form.addEventListener('submit', function() {
    try { localStorage.setItem(`${CACHE_NS}:lastQuery`, normalizedQuery(input.value)); } catch (_) {}
  });
})();


