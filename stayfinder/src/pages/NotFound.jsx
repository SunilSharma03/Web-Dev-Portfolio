import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/AppIcon';

function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="MapPin" size={40} color="white" strokeWidth={2} />
          </div>
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">Page Not Found</h2>
          <p className="text-text-secondary mb-8">
            Looks like this destination doesn't exist. Let's get you back on track to finding your perfect stay.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            to="/homepage-premium-discovery-platform"
            className="btn-primary w-full inline-flex items-center justify-center space-x-2"
          >
            <Icon name="Home" size={20} />
            <span>Return Home</span>
          </Link>
          
          <Link
            to="/search-results-intelligent-discovery"
            className="btn-outline w-full inline-flex items-center justify-center space-x-2"
          >
            <Icon name="Search" size={20} />
            <span>Start Searching</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;