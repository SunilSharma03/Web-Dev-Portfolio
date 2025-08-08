import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

function TrendingDestinations() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const trendingDestinations = [
    {
      id: 1,
      name: "Asheville, NC",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bookingActivity: "142 bookings this week",
      averageRate: "$189",
      season: "Fall Foliage Season",
      properties: 234,
      trending: true
    },
    {
      id: 2,
      name: "Tulum, Mexico",
      image: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      bookingActivity: "89 bookings this week",
      averageRate: "$156",
      season: "Perfect Weather",
      properties: 187,
      trending: true
    },
    {
      id: 3,
      name: "Big Sur, CA",
      image: "https://images.pixabay.com/photo/2016/08/01/20/34/forest-1562083_1280.jpg?auto=compress&cs=tinysrgb&w=800&q=80",
      bookingActivity: "67 bookings this week",
      averageRate: "$298",
      season: "Coastal Escape",
      properties: 156,
      trending: false
    },
    {
      id: 4,
      name: "Charleston, SC",
      image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bookingActivity: "103 bookings this week",
      averageRate: "$167",
      season: "Historic Charm",
      properties: 298,
      trending: true
    },
    {
      id: 5,
      name: "Sedona, AZ",
      image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      bookingActivity: "78 bookings this week",
      averageRate: "$234",
      season: "Desert Wellness",
      properties: 167,
      trending: false
    },
    {
      id: 6,
      name: "Napa Valley, CA",
      image: "https://images.pixabay.com/photo/2016/10/13/09/06/travel-1737168_1280.jpg?auto=compress&cs=tinysrgb&w=800&q=80",
      bookingActivity: "91 bookings this week",
      averageRate: "$312",
      season: "Harvest Season",
      properties: 203,
      trending: true
    }
  ];

  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(trendingDestinations.length / itemsPerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentSlideItems = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return trendingDestinations.slice(startIndex, startIndex + itemsPerSlide);
  };

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Icon name="TrendingUp" size={24} className="text-secondary mr-3" />
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Trending Now
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Seasonal Hotspots
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Discover where fellow travelers are heading this season, with real-time booking activity and insider rates
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-brand flex items-center justify-center hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-1"
            aria-label="Previous destinations"
          >
            <Icon name="ChevronLeft" size={20} className="text-text-primary" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-brand flex items-center justify-center hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-1"
            aria-label="Next destinations"
          >
            <Icon name="ChevronRight" size={20} className="text-text-primary" />
          </button>

          {/* Destinations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {getCurrentSlideItems().map((destination) => (
              <Link
                key={destination.id}
                to="/search-results-intelligent-discovery"
                className="group card hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-lg mb-4 h-48">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Trending Badge */}
                  {destination.trending && (
                    <div className="absolute top-3 left-3 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                      <Icon name="Flame" size={12} className="mr-1" />
                      Trending
                    </div>
                  )}

                  {/* Booking Activity Indicator */}
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    <Icon name="Activity" size={12} className="inline mr-1" />
                    Live
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-text-primary group-hover:text-primary transition-colors duration-200">
                      {destination.name}
                    </h3>
                    <div className="text-right">
                      <div className="text-lg font-bold text-text-primary">
                        {destination.averageRate}
                      </div>
                      <div className="text-xs text-text-secondary">avg/night</div>
                    </div>
                  </div>

                  <div className="text-sm text-secondary font-medium mb-3">
                    {destination.season}
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-text-secondary">
                      <Icon name="TrendingUp" size={14} className="mr-2 text-success" />
                      {destination.bookingActivity}
                    </div>
                    <div className="flex items-center text-sm text-text-secondary">
                      <Icon name="Home" size={14} className="mr-2" />
                      {destination.properties} properties available
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-primary scale-125' :'bg-border hover:bg-primary-200'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/search-results-intelligent-discovery"
            className="btn-outline inline-flex items-center space-x-2"
          >
            <span>Explore All Destinations</span>
            <Icon name="ArrowRight" size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default TrendingDestinations;