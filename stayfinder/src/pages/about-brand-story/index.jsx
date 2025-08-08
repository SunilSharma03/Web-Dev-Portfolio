import React from 'react';
import { Link } from 'react-router-dom';


import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import ValuesSection from './components/ValuesSection';
import TeamSection from './components/TeamSection';
import DifferentiatorSection from './components/DifferentiatorSection';
import StatsSection from './components/StatsSection';
import TrustSafetySection from './components/TrustSafetySection';
import MilestonesSection from './components/MilestonesSection';
import CareersSection from './components/CareersSection';

function AboutBrandStory() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Mission Section */}
      <MissionSection />
      
      {/* Values Section */}
      <ValuesSection />
      
      {/* Team Section */}
      <TeamSection />
      
      {/* How We're Different */}
      <DifferentiatorSection />
      
      {/* Statistics */}
      <StatsSection />
      
      {/* Trust & Safety */}
      <TrustSafetySection />
      
      {/* Company Milestones */}
      <MilestonesSection />
      
      {/* Careers Section */}
      <CareersSection />
      
      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Find Your Perfect Stay?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of travelers who've discovered their ideal accommodations through our curated platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/search-results-intelligent-discovery"
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              Start Exploring
            </Link>
            <Link
              to="/user-dashboard-travel-command-center"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 hover:-translate-y-1"
            >
              Join StayFinder
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutBrandStory;