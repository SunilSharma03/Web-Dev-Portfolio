import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

function LocalConcierge({ location }) {
  const [activeCategory, setActiveCategory] = useState('restaurants');

  const conciergeData = {
    restaurants: [
      {
        id: 1,
        name: "Ammoudi Fish Tavern",
        category: "Seafood",
        rating: 4.8,
        priceRange: "$$$",
        distance: "0.3 km",
        description: "Fresh seafood with stunning sunset views right by the water. Famous for their grilled octopus and local wine selection.",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
        bookingAvailable: true,
        specialOffer: "10% off for StayFinder guests"
      },
      {
        id: 2,
        name: "Kastro Oia Restaurant",
        category: "Mediterranean",
        rating: 4.9,
        priceRange: "$$$$",
        distance: "0.5 km",
        description: "Fine dining with panoramic caldera views. Perfect for romantic dinners with innovative Greek cuisine.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
        bookingAvailable: true,
        specialOffer: null
      },
      {
        id: 3,
        name: "Melitini",
        category: "Traditional Greek",
        rating: 4.7,
        priceRange: "$$",
        distance: "0.8 km",
        description: "Authentic Greek taverna serving traditional dishes made from family recipes passed down through generations.",
        image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=400&h=300&fit=crop",
        bookingAvailable: false,
        specialOffer: null
      }
    ],
    activities: [
      {
        id: 1,
        name: "Sunset Sailing Tour",
        category: "Water Sports",
        rating: 4.9,
        duration: "5 hours",
        price: "$85",
        description: "Private sailing experience around Santorini with swimming stops, snorkeling equipment, and traditional Greek meal onboard.",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
        bookingAvailable: true,
        specialOffer: "Free wine tasting for StayFinder guests"
      },
      {
        id: 2,
        name: "Wine Tasting Tour",
        category: "Cultural",
        rating: 4.8,
        duration: "4 hours",
        price: "$65",
        description: "Visit 3 traditional wineries and learn about Santorini\'s unique volcanic wine-making process with expert sommelier.",
        image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=400&h=300&fit=crop",
        bookingAvailable: true,
        specialOffer: null
      },
      {
        id: 3,
        name: "Photography Workshop",
        category: "Creative",
        rating: 4.6,
        duration: "3 hours",
        price: "$120",
        description: "Capture Santorini\'s beauty with professional photographer guidance. Includes edited photos and printing service.",
        image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop",
        bookingAvailable: true,
        specialOffer: "Complimentary photo album"
      }
    ],
    transportation: [
      {
        id: 1,
        name: "Airport Transfer",
        category: "Private Transfer",
        rating: 4.9,
        duration: "45 minutes",
        price: "$35",
        description: "Comfortable private transfer from Santorini Airport to your accommodation with meet & greet service.",
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
        bookingAvailable: true,
        specialOffer: "Free waiting time up to 1 hour"
      },
      {
        id: 2,
        name: "ATV Rental",
        category: "Vehicle Rental",
        rating: 4.7,
        duration: "Full day",
        price: "$45/day",
        description: "Explore Santorini at your own pace with our well-maintained ATVs. Includes helmets, maps, and 24/7 support.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        bookingAvailable: true,
        specialOffer: "Free delivery to your location"
      },
      {
        id: 3,
        name: "Island Hopping Ferry",
        category: "Ferry Service",
        rating: 4.5,
        duration: "Various",
        price: "From $25",
        description: "High-speed ferry connections to Mykonos, Paros, and other Cycladic islands. Multiple departures daily.",
        image: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=400&h=300&fit=crop",
        bookingAvailable: true,
        specialOffer: null
      }
    ],
    shopping: [
      {
        id: 1,
        name: "Atlantis Books",
        category: "Bookstore",
        rating: 4.8,
        distance: "0.4 km",
        description: "Charming independent bookstore with stunning caldera views. Perfect for finding unique reads and postcards.",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
        bookingAvailable: false,
        specialOffer: "10% off all purchases"
      },
      {
        id: 2,
        name: "Oia Treasures",
        category: "Local Crafts",
        rating: 4.6,
        distance: "0.6 km",
        description: "Handmade jewelry, ceramics, and art pieces created by local artisans. Authentic Santorini souvenirs.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
        bookingAvailable: false,
        specialOffer: "Free gift wrapping"
      },
      {
        id: 3,
        name: "Santorini Brewing Company",
        category: "Local Products",
        rating: 4.7,
        distance: "1.2 km",
        description: "Local craft brewery offering tastings and bottles to take home. Unique flavors inspired by the island.",
        image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&h=300&fit=crop",
        bookingAvailable: true,
        specialOffer: "Free tasting with purchase"
      }
    ]
  };

  const categories = [
    { id: 'restaurants', label: 'Dining', icon: 'UtensilsCrossed' },
    { id: 'activities', label: 'Activities', icon: 'Camera' },
    { id: 'transportation', label: 'Transport', icon: 'Car' },
    { id: 'shopping', label: 'Shopping', icon: 'ShoppingBag' }
  ];

  const currentData = conciergeData[activeCategory] || [];

  const handleBooking = (item) => {
    // Mock booking functionality
    alert(`Booking request sent for ${item.name}. You'll receive confirmation shortly!`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-text-primary mb-2">Local Concierge</h2>
        <p className="text-text-secondary">
          Curated recommendations for {location} - handpicked by local experts and fellow travelers
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex space-x-1 bg-surface rounded-lg p-1">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex-1 justify-center ${
              activeCategory === category.id
                ? 'bg-white text-primary shadow-sm'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            <Icon name={category.icon} size={16} />
            <span>{category.label}</span>
          </button>
        ))}
      </div>

      {/* Recommendations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {currentData.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-brand overflow-hidden hover:shadow-brand-lg transition-all duration-300">
            <div className="relative h-48">
              <Image
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              {item.specialOffer && (
                <div className="absolute top-3 left-3">
                  <span className="bg-secondary text-white px-2 py-1 rounded-full text-xs font-medium">
                    Special Offer
                  </span>
                </div>
              )}
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                <Icon name="Star" size={12} color="var(--color-warning-500)" />
                <span className="text-xs font-medium">{item.rating}</span>
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-semibold text-text-primary">{item.name}</h3>
                  <p className="text-sm text-text-secondary">{item.category}</p>
                </div>
                <div className="text-right">
                  {item.price && (
                    <p className="font-semibold text-primary">{item.price}</p>
                  )}
                  {item.priceRange && (
                    <p className="text-sm text-text-secondary">{item.priceRange}</p>
                  )}
                  {item.distance && (
                    <p className="text-xs text-text-secondary">{item.distance}</p>
                  )}
                  {item.duration && (
                    <p className="text-xs text-text-secondary">{item.duration}</p>
                  )}
                </div>
              </div>
              
              <p className="text-sm text-text-secondary mb-4 line-clamp-2">
                {item.description}
              </p>
              
              {item.specialOffer && (
                <div className="bg-secondary-50 rounded-lg p-3 mb-4">
                  <div className="flex items-center space-x-2">
                    <Icon name="Gift" size={16} color="var(--color-secondary)" />
                    <p className="text-sm font-medium text-secondary-700">
                      {item.specialOffer}
                    </p>
                  </div>
                </div>
              )}
              
              <div className="flex space-x-3">
                {item.bookingAvailable ? (
                  <button
                    onClick={() => handleBooking(item)}
                    className="flex-1 btn-primary text-sm py-2"
                  >
                    Book Now
                  </button>
                ) : (
                  <button className="flex-1 btn-outline text-sm py-2">
                    View Details
                  </button>
                )}
                <button className="p-2 border border-border rounded-lg hover:bg-primary-50 hover:border-primary-200 transition-all duration-200">
                  <Icon name="Heart" size={16} color="var(--color-text-secondary)" />
                </button>
                <button className="p-2 border border-border rounded-lg hover:bg-primary-50 hover:border-primary-200 transition-all duration-200">
                  <Icon name="Share" size={16} color="var(--color-text-secondary)" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Local Insights */}
      <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Local Insider Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
              <Icon name="Clock" size={16} color="white" />
            </div>
            <div>
              <h4 className="font-medium text-text-primary mb-1">Best Time to Visit</h4>
              <p className="text-sm text-text-secondary">
                Visit Oia for sunset around 7:30 PM. Arrive 30 minutes early to secure a good spot.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
              <Icon name="MapPin" size={16} color="white" />
            </div>
            <div>
              <h4 className="font-medium text-text-primary mb-1">Hidden Gem</h4>
              <p className="text-sm text-text-secondary">
                Try the secret path to Ammoudi Bay for a less crowded sunset experience with great tavernas.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
              <Icon name="CreditCard" size={16} color="white" />
            </div>
            <div>
              <h4 className="font-medium text-text-primary mb-1">Payment Tips</h4>
              <p className="text-sm text-text-secondary">
                Most places accept cards, but carry some cash for small tavernas and tips.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center flex-shrink-0">
              <Icon name="Wifi" size={16} color="white" />
            </div>
            <div>
              <h4 className="font-medium text-text-primary mb-1">Stay Connected</h4>
              <p className="text-sm text-text-secondary">
                Free WiFi is available at most cafes and restaurants. Your accommodation has excellent coverage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocalConcierge;