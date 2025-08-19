# Weather Now ⛅

Fast, minimal weather app that fetches real-time conditions by city/ZIP using WeatherAPI. Type a location, get the current temperature instantly with caching and request cancellation for speed.

## Demo

Open `index.html` in your browser.

## Features

- ⚡ **Fast UX**: cached results (5 min TTL) with stale‑while‑revalidate
- 🛑 **Abortable requests**: cancels previous queries while typing
- 📍 **Location search**: city or ZIP
- 🌡️ **Today’s temperature**: shows °C and condition icon
- 💾 **Last search remembered**

## Tech

- HTML, CSS, JavaScript
- API: `WeatherAPI /current.json`

## Setup

1. Open `index.html` directly, or serve the folder with any static server.
2. Search a city (e.g., "London").

## File structure

```
Weather App/
├─ index.html
├─ style.css
└─ script.js
```

## Author

Created with ❤️ by **Sunil Kumar**  
- GitHub: [`sunbyte16`](https://github.com/sunbyte16)  
- LinkedIn: [`Sunil Kumar`](https://www.linkedin.com/in/sunil-kumar-bb88bb31a/)

## Notes

- To display °F, switch `current.temp_c` to `current.temp_f` in `script.js`.
- API limits and key security apply when deploying publicly.

---

Made with ☀️🌧️🌡️
