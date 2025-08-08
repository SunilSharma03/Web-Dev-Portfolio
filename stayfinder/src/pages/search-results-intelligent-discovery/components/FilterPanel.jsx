import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

function FilterPanel({ selectedFilters, setSelectedFilters, onClose }) {
  const [expandedSections, setExpandedSections] = useState({
    price: true,
    categories: true,
    amenities: false,
    propertyType: false,
    more: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handlePriceChange = (value, index) => {
    const newRange = [...selectedFilters.priceRange];
    newRange[index] = parseInt(value);
    setSelectedFilters(prev => ({
      ...prev,
      priceRange: newRange
    }));
  };

  const handleCategoryToggle = (category) => {
    setSelectedFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category]
    }));
  };

  const handleAmenityToggle = (amenity) => {
    setSelectedFilters(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  const handlePropertyTypeToggle = (type) => {
    setSelectedFilters(prev => ({
      ...prev,
      propertyType: prev.propertyType.includes(type)
        ? prev.propertyType.filter(t => t !== type)
        : [...prev.propertyType, type]
    }));
  };

  const clearAllFilters = () => {
    setSelectedFilters({
      priceRange: [50, 500],
      propertyType: [],
      amenities: [],
      categories: [],
      rating: 0,
      instantBook: false
    });
  };

  const categories = [
    { name: 'Instagram-Worthy Views', icon: 'Camera', count: 24 },
    { name: 'Digital Nomad Ready', icon: 'Wifi', count: 18 },
    { name: 'Family Adventure Base', icon: 'Users', count: 15 },
    { name: 'Romantic Escape', icon: 'Heart', count: 12 },
    { name: 'Luxury Escape', icon: 'Crown', count: 8 },
    { name: 'Cultural Immersion', icon: 'Globe', count: 22 },
    { name: 'Eco-Conscious', icon: 'Leaf', count: 14 },
    { name: 'Beach Paradise', icon: 'Waves', count: 19 },
    { name: 'Adventure Base', icon: 'Mountain', count: 16 },
    { name: 'Surf Paradise', icon: 'Waves', count: 11 }
  ];

  const amenities = [
    { name: 'WiFi', icon: 'Wifi', count: 45 },
    { name: 'Pool', icon: 'Waves', count: 28 },
    { name: 'Kitchen', icon: 'ChefHat', count: 38 },
    { name: 'AC', icon: 'Wind', count: 42 },
    { name: 'Parking', icon: 'Car', count: 35 },
    { name: 'Beach Access', icon: 'Waves', count: 15 },
    { name: 'Gym', icon: 'Dumbbell', count: 12 },
    { name: 'Spa', icon: 'Sparkles', count: 8 },
    { name: 'Pet Friendly', icon: 'Heart', count: 20 },
    { name: 'Workspace', icon: 'Laptop', count: 25 }
  ];

  const propertyTypes = [
    { name: 'Villa', count: 18 },
    { name: 'Apartment', count: 22 },
    { name: 'Resort', count: 8 },
    { name: 'Guesthouse', count: 15 },
    { name: 'Boutique Hotel', count: 12 },
    { name: 'Treehouse', count: 3 },
    { name: 'Beachfront', count: 14 },
    { name: 'Traditional House', count: 9 }
  ];

  const FilterSection = ({ title, isExpanded, onToggle, children }) => (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 hover:bg-surface transition-colors"
      >
        <h3 className="font-semibold text-text-primary">{title}</h3>
        <Icon 
          name={isExpanded ? "ChevronUp" : "ChevronDown"} 
          size={20} 
          className="text-text-secondary" 
        />
      </button>
      {isExpanded && (
        <div className="px-4 pb-4">
          {children}
        </div>
      )}
    </div>
  );

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-border flex items-center justify-between">
        <h2 className="text-lg font-semibold text-text-primary">Filters</h2>
        <button
          onClick={clearAllFilters}
          className="text-sm text-primary hover:text-primary-600 font-medium"
        >
          Clear all
        </button>
      </div>

      {/* Filter Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Price Range */}
        <FilterSection
          title="Price Range"
          isExpanded={expandedSections.price}
          onToggle={() => toggleSection('price')}
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm text-text-secondary">
              <span>${selectedFilters.priceRange[0]}</span>
              <span>${selectedFilters.priceRange[1]}+</span>
            </div>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">Min Price</label>
                <input
                  type="range"
                  min="50"
                  max="1000"
                  value={selectedFilters.priceRange[0]}
                  onChange={(e) => handlePriceChange(e.target.value, 0)}
                  className="w-full h-2 bg-surface rounded-lg appearance-none cursor-pointer slider"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">Max Price</label>
                <input
                  type="range"
                  min="50"
                  max="1000"
                  value={selectedFilters.priceRange[1]}
                  onChange={(e) => handlePriceChange(e.target.value, 1)}
                  className="w-full h-2 bg-surface rounded-lg appearance-none cursor-pointer slider"
                />
              </div>
            </div>
          </div>
        </FilterSection>

        {/* StayFinder Categories */}
        <FilterSection
          title="StayFinder Categories"
          isExpanded={expandedSections.categories}
          onToggle={() => toggleSection('categories')}
        >
          <div className="space-y-3">
            {categories.map((category) => (
              <label key={category.name} className="flex items-center space-x-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedFilters.categories.includes(category.name)}
                  onChange={() => handleCategoryToggle(category.name)}
                  className="w-4 h-4 text-primary border-border rounded focus:ring-primary-300"
                />
                <div className="flex items-center space-x-2 flex-1">
                  <Icon name={category.icon} size={16} className="text-text-secondary group-hover:text-primary" />
                  <span className="text-sm text-text-primary group-hover:text-primary">{category.name}</span>
                </div>
                <span className="text-xs text-text-secondary">({category.count})</span>
              </label>
            ))}
          </div>
        </FilterSection>

        {/* Property Type */}
        <FilterSection
          title="Property Type"
          isExpanded={expandedSections.propertyType}
          onToggle={() => toggleSection('propertyType')}
        >
          <div className="space-y-3">
            {propertyTypes.map((type) => (
              <label key={type.name} className="flex items-center justify-between cursor-pointer group">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={selectedFilters.propertyType.includes(type.name)}
                    onChange={() => handlePropertyTypeToggle(type.name)}
                    className="w-4 h-4 text-primary border-border rounded focus:ring-primary-300"
                  />
                  <span className="text-sm text-text-primary group-hover:text-primary">{type.name}</span>
                </div>
                <span className="text-xs text-text-secondary">({type.count})</span>
              </label>
            ))}
          </div>
        </FilterSection>

        {/* Amenities */}
        <FilterSection
          title="Amenities"
          isExpanded={expandedSections.amenities}
          onToggle={() => toggleSection('amenities')}
        >
          <div className="space-y-3">
            {amenities.map((amenity) => (
              <label key={amenity.name} className="flex items-center space-x-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedFilters.amenities.includes(amenity.name)}
                  onChange={() => handleAmenityToggle(amenity.name)}
                  className="w-4 h-4 text-primary border-border rounded focus:ring-primary-300"
                />
                <div className="flex items-center space-x-2 flex-1">
                  <Icon name={amenity.icon} size={16} className="text-text-secondary group-hover:text-primary" />
                  <span className="text-sm text-text-primary group-hover:text-primary">{amenity.name}</span>
                </div>
                <span className="text-xs text-text-secondary">({amenity.count})</span>
              </label>
            ))}
          </div>
        </FilterSection>

        {/* More Filters */}
        <FilterSection
          title="More Filters"
          isExpanded={expandedSections.more}
          onToggle={() => toggleSection('more')}
        >
          <div className="space-y-4">
            {/* Rating */}
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Minimum Rating</label>
              <div className="flex items-center space-x-2">
                {[0, 3, 4, 4.5].map((rating) => (
                  <button
                    key={rating}
                    onClick={() => setSelectedFilters(prev => ({ ...prev, rating }))}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedFilters.rating === rating
                        ? 'bg-primary text-white' :'bg-surface text-text-secondary hover:bg-primary-50 hover:text-primary'
                    }`}
                  >
                    {rating === 0 ? 'Any' : `${rating}+`}
                  </button>
                ))}
              </div>
            </div>

            {/* Instant Book */}
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedFilters.instantBook}
                onChange={(e) => setSelectedFilters(prev => ({ ...prev, instantBook: e.target.checked }))}
                className="w-4 h-4 text-primary border-border rounded focus:ring-primary-300"
              />
              <div className="flex items-center space-x-2">
                <Icon name="Zap" size={16} className="text-secondary" />
                <span className="text-sm text-text-primary">Instant Book Only</span>
              </div>
            </label>
          </div>
        </FilterSection>
      </div>

      {/* Mobile Apply Button */}
      {onClose && (
        <div className="p-4 border-t border-border">
          <button
            onClick={onClose}
            className="btn-primary w-full"
          >
            Apply Filters
          </button>
        </div>
      )}
    </div>
  );
}

export default FilterPanel;