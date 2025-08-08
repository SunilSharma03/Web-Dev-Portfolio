import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

function TravelPreferences() {
  const [preferences, setPreferences] = useState({
    accommodationStyle: ['modern', 'unique'],
    amenities: ['wifi', 'kitchen', 'pool', 'parking'],
    locationPreferences: ['city-center', 'quiet-area'],
    travelMotivations: ['relaxation', 'adventure', 'culture'],
    budgetRange: 'mid-range',
    groupSize: 'couple',
    accessibility: [],
    notifications: {
      priceDrops: true,
      newRecommendations: true,
      bookingReminders: true,
      hostMessages: true
    }
  });

  const [hasChanges, setHasChanges] = useState(false);

  const accommodationStyles = [
    { id: 'modern', label: 'Modern & Minimalist', icon: 'Building' },
    { id: 'traditional', label: 'Traditional & Historic', icon: 'Castle' },
    { id: 'unique', label: 'Unique & Quirky', icon: 'Star' },
    { id: 'luxury', label: 'Luxury & Premium', icon: 'Crown' },
    { id: 'rustic', label: 'Rustic & Natural', icon: 'TreePine' },
    { id: 'boutique', label: 'Boutique & Intimate', icon: 'Heart' }
  ];

  const amenitiesList = [
    { id: 'wifi', label: 'High-Speed WiFi', icon: 'Wifi' },
    { id: 'kitchen', label: 'Full Kitchen', icon: 'ChefHat' },
    { id: 'pool', label: 'Swimming Pool', icon: 'Waves' },
    { id: 'parking', label: 'Free Parking', icon: 'Car' },
    { id: 'gym', label: 'Fitness Center', icon: 'Dumbbell' },
    { id: 'spa', label: 'Spa Services', icon: 'Flower' },
    { id: 'pet-friendly', label: 'Pet Friendly', icon: 'Heart' },
    { id: 'workspace', label: 'Dedicated Workspace', icon: 'Laptop' },
    { id: 'laundry', label: 'Laundry Facilities', icon: 'Shirt' },
    { id: 'air-conditioning', label: 'Air Conditioning', icon: 'Wind' }
  ];

  const locationTypes = [
    { id: 'city-center', label: 'City Center', icon: 'Building2' },
    { id: 'beachfront', label: 'Beachfront', icon: 'Waves' },
    { id: 'mountain', label: 'Mountain Views', icon: 'Mountain' },
    { id: 'countryside', label: 'Countryside', icon: 'TreePine' },
    { id: 'quiet-area', label: 'Quiet Neighborhood', icon: 'Moon' },
    { id: 'nightlife', label: 'Near Nightlife', icon: 'Music' }
  ];

  const travelMotivations = [
    { id: 'relaxation', label: 'Relaxation & Wellness', icon: 'Flower2' },
    { id: 'adventure', label: 'Adventure & Outdoor', icon: 'Mountain' },
    { id: 'culture', label: 'Culture & History', icon: 'BookOpen' },
    { id: 'food', label: 'Food & Culinary', icon: 'UtensilsCrossed' },
    { id: 'business', label: 'Business Travel', icon: 'Briefcase' },
    { id: 'romance', label: 'Romantic Getaway', icon: 'Heart' }
  ];

  const budgetRanges = [
    { id: 'budget', label: 'Budget ($50-100/night)', icon: 'DollarSign' },
    { id: 'mid-range', label: 'Mid-Range ($100-250/night)', icon: 'DollarSign' },
    { id: 'luxury', label: 'Luxury ($250+/night)', icon: 'Crown' }
  ];

  const groupSizes = [
    { id: 'solo', label: 'Solo Traveler', icon: 'User' },
    { id: 'couple', label: 'Couple', icon: 'Users' },
    { id: 'family', label: 'Family (3-5)', icon: 'Users' },
    { id: 'group', label: 'Large Group (6+)', icon: 'Users' }
  ];

  const accessibilityOptions = [
    { id: 'wheelchair', label: 'Wheelchair Accessible', icon: 'Accessibility' },
    { id: 'elevator', label: 'Elevator Access', icon: 'ArrowUp' },
    { id: 'ground-floor', label: 'Ground Floor Only', icon: 'Home' },
    { id: 'wide-doors', label: 'Wide Doorways', icon: 'DoorOpen' },
    { id: 'accessible-bathroom', label: 'Accessible Bathroom', icon: 'Bath' }
  ];

  const handleMultiSelect = (category, value) => {
    setPreferences(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value]
    }));
    setHasChanges(true);
  };

  const handleSingleSelect = (category, value) => {
    setPreferences(prev => ({
      ...prev,
      [category]: value
    }));
    setHasChanges(true);
  };

  const handleNotificationChange = (key, value) => {
    setPreferences(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [key]: value
      }
    }));
    setHasChanges(true);
  };

  const handleSave = () => {
    // In a real app, this would save to the backend
    setHasChanges(false);
  };

  const renderMultiSelectSection = (title, description, options, category) => (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
        <p className="text-text-secondary text-sm">{description}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleMultiSelect(category, option.id)}
            className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all duration-200 ${
              preferences[category].includes(option.id)
                ? 'border-primary bg-primary-50 text-primary' :'border-border bg-white text-text-secondary hover:border-primary-200 hover:bg-primary-50/50'
            }`}
          >
            <Icon name={option.icon} size={20} strokeWidth={2} />
            <span className="font-medium">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );

  const renderSingleSelectSection = (title, description, options, category) => (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
        <p className="text-text-secondary text-sm">{description}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleSingleSelect(category, option.id)}
            className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all duration-200 ${
              preferences[category] === option.id
                ? 'border-primary bg-primary-50 text-primary' :'border-border bg-white text-text-secondary hover:border-primary-200 hover:bg-primary-50/50'
            }`}
          >
            <Icon name={option.icon} size={20} strokeWidth={2} />
            <span className="font-medium">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-text-primary">Travel Preferences</h2>
          <p className="text-text-secondary mt-1">Customize your experience for better recommendations</p>
        </div>
        {hasChanges && (
          <button
            onClick={handleSave}
            className="btn-primary flex items-center space-x-2"
          >
            <Icon name="Save" size={20} strokeWidth={2} />
            <span>Save Changes</span>
          </button>
        )}
      </div>

      <div className="space-y-8">
        {/* Accommodation Style */}
        {renderMultiSelectSection(
          "Accommodation Style",
          "What types of properties appeal to you?",
          accommodationStyles,
          "accommodationStyle"
        )}

        {/* Essential Amenities */}
        {renderMultiSelectSection(
          "Essential Amenities",
          "Which amenities are important for your stays?",
          amenitiesList,
          "amenities"
        )}

        {/* Location Preferences */}
        {renderMultiSelectSection(
          "Location Preferences",
          "What kind of locations do you prefer?",
          locationTypes,
          "locationPreferences"
        )}

        {/* Travel Motivations */}
        {renderMultiSelectSection(
          "Travel Motivations",
          "What drives your travel decisions?",
          travelMotivations,
          "travelMotivations"
        )}

        {/* Budget Range */}
        {renderSingleSelectSection(
          "Budget Range",
          "What's your typical nightly budget?",
          budgetRanges,
          "budgetRange"
        )}

        {/* Group Size */}
        {renderSingleSelectSection(
          "Typical Group Size",
          "How many people usually travel with you?",
          groupSizes,
          "groupSize"
        )}

        {/* Accessibility Needs */}
        {renderMultiSelectSection(
          "Accessibility Requirements",
          "Do you have any specific accessibility needs?",
          accessibilityOptions,
          "accessibility"
        )}

        {/* Notification Preferences */}
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-text-primary">Notification Preferences</h3>
            <p className="text-text-secondary text-sm">Choose what updates you'd like to receive</p>
          </div>
          <div className="card space-y-4">
            {Object.entries({
              priceDrops: "Price drop alerts for wishlist items",
              newRecommendations: "New property recommendations",
              bookingReminders: "Booking and travel reminders",
              hostMessages: "Messages from hosts"
            }).map(([key, label]) => (
              <div key={key} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Icon 
                    name={key === 'priceDrops' ? 'TrendingDown' : 
                         key === 'newRecommendations' ? 'Star' :
                         key === 'bookingReminders' ? 'Calendar' : 'MessageCircle'} 
                    size={20} 
                    strokeWidth={2} 
                    color="var(--color-text-secondary)" 
                  />
                  <span className="text-text-primary">{label}</span>
                </div>
                <button
                  onClick={() => handleNotificationChange(key, !preferences.notifications[key])}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                    preferences.notifications[key] ? 'bg-primary' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                      preferences.notifications[key] ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendation Engine Status */}
        <div className="card bg-gradient-to-r from-primary-50 to-secondary-50">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Icon name="Brain" size={24} color="white" strokeWidth={2} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                AI Recommendation Engine
              </h3>
              <p className="text-text-secondary mb-4">
                Based on your preferences, our AI will provide personalized property recommendations 
                that match your travel style and needs. The more you use StayFinder, the better 
                our recommendations become.
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                  <span className="text-text-secondary">Preferences: Complete</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-text-secondary">Learning: Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelPreferences;