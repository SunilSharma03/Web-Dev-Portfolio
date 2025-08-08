import React, { useState, useEffect } from 'react';

import Icon from '../../../components/AppIcon';

function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [userLocation, setUserLocation] = useState('');

  const heroImages = [
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80",
    "https://images.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg?auto=compress&cs=tinysrgb&w=2000&q=80",
    "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
  ];

  const searchSuggestions = [
    "Find me a cozy cabin near Asheville for next weekend",
    "Luxury beachfront villa in Malibu for summer vacation",
    "Historic townhouse in Charleston with garden views",
    "Modern loft in downtown Austin with rooftop access"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  useEffect(() => {
    // Simulate getting user location
    setUserLocation('San Francisco, CA');
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // Navigate to search results with query
    window.location.href = '/search-results-intelligent-discovery';
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: 'scale(1.1)'
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Main Heading */}
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Find Stays That Fit
            <span className="block text-gradient bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Your Story
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto font-light">
            Discover curated accommodations that transform your travel from ordinary to extraordinary
          </p>
        </div>

        {/* Search Interface */}
        <div className="mb-12 animate-fade-in-up animation-delay-300">
          <form onSubmit={handleSearch} className="max-w-3xl mx-auto">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-brand-xl">
              {/* Location Indicator */}
              {userLocation && (
                <div className="flex items-center justify-center mb-4 text-sm text-text-secondary">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  <span>Searching near {userLocation}</span>
                </div>
              )}

              {/* Main Search Input */}
              <div className="relative mb-6">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Try: 'Cozy cabin near mountains for weekend getaway'"
                  className="w-full px-6 py-4 text-lg border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary transition-all duration-200"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <Icon name="Search" size={24} color="var(--color-text-secondary)" />
                </div>
              </div>

              {/* Quick Filters */}
              <div className="flex flex-wrap gap-3 mb-6 justify-center">
                {['Entire Place', 'Pet Friendly', 'Instant Book', 'Unique Stays'].map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    className="px-4 py-2 bg-primary-50 text-primary rounded-full text-sm font-medium hover:bg-primary-100 transition-colors duration-200"
                  >
                    {filter}
                  </button>
                ))}
              </div>

              {/* Search Button */}
              <button
                type="submit"
                className="btn-primary w-full sm:w-auto px-12 py-4 text-lg font-semibold"
              >
                Start Exploring
              </button>
            </div>
          </form>

          {/* Search Suggestions */}
          <div className="mt-6 text-center">
            <p className="text-white/70 text-sm mb-3">Popular searches:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {searchSuggestions.slice(0, 2).map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => setSearchQuery(suggestion)}
                  className="text-white/80 hover:text-white text-sm underline underline-offset-2 transition-colors duration-200"
                >
                  "{suggestion.split(' ').slice(0, 6).join(' ')}..."
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Key Value Props */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-in-up animation-delay-600">
          {[
            { icon: 'Shield', text: 'Verified Properties' },
            { icon: 'Heart', text: 'Curated Experiences' },
            { icon: 'Users', text: 'Trusted Community' }
          ].map((prop, index) => (
            <div key={index} className="flex items-center justify-center space-x-3 text-white/90">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Icon name={prop.icon} size={20} />
              </div>
              <span className="font-medium">{prop.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <Icon name="ChevronDown" size={32} color="white" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;