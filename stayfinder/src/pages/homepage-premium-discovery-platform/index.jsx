import React, { useState, useEffect } from 'react';



import HeroSection from './components/HeroSection';
import TrendingDestinations from './components/TrendingDestinations';
import HowItWorks from './components/HowItWorks';
import FeaturedProperties from './components/FeaturedProperties';
import TestimonialCarousel from './components/TestimonialCarousel';
import DiscoverLocal from './components/DiscoverLocal';
import Footer from './components/Footer';

function Homepage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-background transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Trending Destinations */}
      <TrendingDestinations />
      
      {/* How StayFinder Works */}
      <HowItWorks />
      
      {/* Featured Properties */}
      <FeaturedProperties />
      
      {/* Testimonials */}
      <TestimonialCarousel />
      
      {/* Discover Like a Local */}
      <DiscoverLocal />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Homepage;