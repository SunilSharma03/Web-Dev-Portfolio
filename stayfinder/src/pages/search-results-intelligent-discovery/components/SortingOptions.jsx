import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

function SortingOptions({ sortBy, setSortBy }) {
  const [isOpen, setIsOpen] = useState(false);

  const sortOptions = [
    { value: 'bestMatch', label: 'Best Match', icon: 'Target' },
    { value: 'priceLow', label: 'Price: Low to High', icon: 'TrendingUp' },
    { value: 'priceHigh', label: 'Price: High to Low', icon: 'TrendingDown' },
    { value: 'rating', label: 'Highest Rated', icon: 'Star' },
    { value: 'reviews', label: 'Most Reviews', icon: 'MessageSquare' },
    { value: 'newest', label: 'Newest First', icon: 'Clock' }
  ];

  const currentSort = sortOptions.find(option => option.value === sortBy);

  const handleSortChange = (value) => {
    setSortBy(value);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 bg-white border border-border rounded-lg hover:border-primary transition-colors text-sm"
      >
        <Icon name={currentSort?.icon || 'Target'} size={16} />
        <span className="font-medium">Sort: {currentSort?.label}</span>
        <Icon name={isOpen ? "ChevronUp" : "ChevronDown"} size={16} />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute top-full right-0 mt-2 w-56 bg-white border border-border rounded-lg shadow-brand-lg z-20 py-2">
            {sortOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSortChange(option.value)}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-surface transition-colors ${
                  sortBy === option.value ? 'bg-primary-50 text-primary' : 'text-text-primary'
                }`}
              >
                <Icon 
                  name={option.icon} 
                  size={16} 
                  className={sortBy === option.value ? 'text-primary' : 'text-text-secondary'} 
                />
                <span className="text-sm font-medium">{option.label}</span>
                {sortBy === option.value && (
                  <Icon name="Check" size={16} className="ml-auto text-primary" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default SortingOptions;