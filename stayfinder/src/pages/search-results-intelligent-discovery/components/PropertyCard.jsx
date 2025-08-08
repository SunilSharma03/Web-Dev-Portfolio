import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

function PropertyCard({ property, isSelected, onSelect }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showAllAmenities, setShowAllAmenities] = useState(false);

  const nextImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const toggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  const handleShare = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: `Check out this amazing stay: ${property.title}`,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const handleCompare = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onSelect();
  };

  return (
    <div className="group bg-white rounded-xl border border-border hover:shadow-brand-lg transition-all duration-300 overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Image Gallery */}
        <div className="relative lg:w-80 h-64 lg:h-auto overflow-hidden">
          <div className="relative h-full">
            <Image
              src={property.images[currentImageIndex]}
              alt={property.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            
            {/* Image Navigation */}
            {property.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Icon name="ChevronLeft" size={16} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Icon name="ChevronRight" size={16} />
                </button>
              </>
            )}

            {/* Image Indicators */}
            {property.images.length > 1 && (
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
                {property.images.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Quick Actions */}
            <div className="absolute top-3 right-3 flex space-x-2">
              <button
                onClick={toggleWishlist}
                className={`w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-all ${
                  isWishlisted 
                    ? 'bg-accent text-white' :'bg-white/90 hover:bg-white text-text-secondary hover:text-accent'
                }`}
              >
                <Icon name="Heart" size={16} fill={isWishlisted ? 'currentColor' : 'none'} />
              </button>
              <button
                onClick={handleShare}
                className="w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md text-text-secondary hover:text-primary transition-all opacity-0 group-hover:opacity-100"
              >
                <Icon name="Share" size={16} />
              </button>
            </div>

            {/* Instant Book Badge */}
            {property.instantBook && (
              <div className="absolute top-3 left-3 bg-secondary text-white px-2 py-1 rounded-md text-xs font-medium flex items-center space-x-1">
                <Icon name="Zap" size={12} />
                <span>Instant Book</span>
              </div>
            )}
          </div>
        </div>

        {/* Property Details */}
        <div className="flex-1 p-6">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <Link 
                to="/booking-confirmation-pre-arrival-experience"
                className="block group-hover:text-primary transition-colors"
              >
                <h3 className="text-lg font-semibold text-text-primary mb-1 line-clamp-2">
                  {property.title}
                </h3>
              </Link>
              <p className="text-text-secondary text-sm flex items-center">
                <Icon name="MapPin" size={14} className="mr-1" />
                {property.location}
              </p>
            </div>
            
            {/* Rating */}
            <div className="flex items-center space-x-1 ml-4">
              <Icon name="Star" size={16} className="text-secondary" fill="currentColor" />
              <span className="font-semibold text-text-primary">{property.rating}</span>
              <span className="text-text-secondary text-sm">({property.reviewCount})</span>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-4">
            {property.categories.slice(0, 2).map((category) => (
              <span
                key={category}
                className="px-2 py-1 bg-primary-50 text-primary text-xs font-medium rounded-md"
              >
                {category}
              </span>
            ))}
            {property.categories.length > 2 && (
              <span className="px-2 py-1 bg-surface text-text-secondary text-xs font-medium rounded-md">
                +{property.categories.length - 2} more
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-text-secondary text-sm mb-4 line-clamp-2">
            {property.description}
          </p>

          {/* Amenities */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {property.amenities.slice(0, showAllAmenities ? property.amenities.length : 4).map((amenity) => (
                <span
                  key={amenity}
                  className="flex items-center space-x-1 text-xs text-text-secondary bg-surface px-2 py-1 rounded-md"
                >
                  <Icon name="Check" size={12} className="text-success" />
                  <span>{amenity}</span>
                </span>
              ))}
              {property.amenities.length > 4 && !showAllAmenities && (
                <button
                  onClick={() => setShowAllAmenities(true)}
                  className="text-xs text-primary hover:text-primary-600 font-medium"
                >
                  +{property.amenities.length - 4} more
                </button>
              )}
            </div>
          </div>

          {/* Host Info */}
          <div className="flex items-center space-x-3 mb-4 pb-4 border-b border-border">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
              <Icon name="User" size={16} color="white" />
            </div>
            <div>
              <p className="text-sm font-medium text-text-primary">{property.hostName}</p>
              <div className="flex items-center space-x-1">
                <Icon name="Star" size={12} className="text-secondary" fill="currentColor" />
                <span className="text-xs text-text-secondary">{property.hostRating} host rating</span>
              </div>
            </div>
          </div>

          {/* Price and Actions */}
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-baseline space-x-1">
                <span className="text-2xl font-bold text-text-primary">${property.price}</span>
                <span className="text-text-secondary text-sm">/ night</span>
              </div>
              <p className="text-xs text-text-secondary">Taxes included</p>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={handleCompare}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isSelected
                    ? 'bg-primary text-white' :'border border-border text-text-secondary hover:border-primary hover:text-primary'
                }`}
              >
                <Icon name="Plus" size={16} className="mr-1" />
                {isSelected ? 'Added' : 'Compare'}
              </button>
              
              <Link
                to="/booking-confirmation-pre-arrival-experience"
                className="btn-primary px-6 py-2 text-sm"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;