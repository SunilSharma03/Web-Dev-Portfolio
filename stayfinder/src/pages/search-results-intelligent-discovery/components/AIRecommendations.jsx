import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

function AIRecommendations({ properties }) {
  if (!properties || properties.length === 0) return null;

  return (
    <div className="mb-8 p-6 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl border border-primary-100">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
          <Icon name="Sparkles" size={16} color="white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-text-primary">AI Recommendations</h3>
          <p className="text-sm text-text-secondary">Curated picks based on your preferences and browsing behavior</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {properties.map((property, index) => (
          <div key={property.id} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start space-x-3">
              <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={property.images[0]}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <div className="w-5 h-5 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {index + 1}
                  </div>
                  <span className="text-xs font-medium text-primary">AI Pick</span>
                </div>
                <h4 className="font-semibold text-text-primary text-sm line-clamp-1 mb-1">
                  {property.title}
                </h4>
                <p className="text-xs text-text-secondary flex items-center mb-2">
                  <Icon name="MapPin" size={10} className="mr-1" />
                  {property.location}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Icon name="Star" size={12} className="text-secondary" fill="currentColor" />
                    <span className="text-xs font-medium">{property.rating}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-text-primary">${property.price}</div>
                    <div className="text-xs text-text-secondary">per night</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-3 pt-3 border-t border-border">
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {property.categories.slice(0, 1).map((category) => (
                    <span
                      key={category}
                      className="px-2 py-1 bg-primary-50 text-primary text-xs font-medium rounded-md"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <Link
                  to="/booking-confirmation-pre-arrival-experience"
                  className="text-xs text-primary hover:text-primary-600 font-medium flex items-center space-x-1"
                >
                  <span>View</span>
                  <Icon name="ArrowRight" size={12} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <p className="text-xs text-text-secondary">
          These recommendations are powered by machine learning and updated in real-time based on your search behavior.
        </p>
      </div>
    </div>
  );
}

export default AIRecommendations;