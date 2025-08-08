import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

function FeaturedProperties() {
  const [wishlist, setWishlist] = useState(new Set());

  const featuredProperties = [
    {
      id: 1,
      title: "Treehouse Retreat in Redwood Forest",
      location: "Mendocino, California",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: 289,
      rating: 4.9,
      reviews: 127,
      type: "Unique Stay",
      amenities: ["Forest Views", "Hot Tub", "Fireplace", "WiFi"],
      host: "Sarah M.",
      hostImage: "https://randomuser.me/api/portraits/women/32.jpg",
      superhost: true,
      quickDetails: {
        guests: 4,
        bedrooms: 2,
        bathrooms: 1,
        uniqueFeature: "50ft above ground"
      }
    },
    {
      id: 2,
      title: "Historic Brownstone with Garden",
      location: "Brooklyn, New York",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      price: 195,
      rating: 4.8,
      reviews: 89,
      type: "Entire Home",
      amenities: ["Private Garden", "Kitchen", "Workspace", "Pet Friendly"],
      host: "Michael R.",
      hostImage: "https://randomuser.me/api/portraits/men/45.jpg",
      superhost: true,
      quickDetails: {
        guests: 6,
        bedrooms: 3,
        bathrooms: 2,
        uniqueFeature: "1890s architecture"
      }
    },
    {
      id: 3,
      title: "Cliffside Cabin with Ocean Views",
      location: "Big Sur, California",
      image: "https://images.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_1280.jpg?auto=compress&cs=tinysrgb&w=800&q=80",
      price: 425,
      rating: 5.0,
      reviews: 156,
      type: "Luxury Cabin",
      amenities: ["Ocean Views", "Private Deck", "Gourmet Kitchen", "Spa Bath"],
      host: "Elena K.",
      hostImage: "https://randomuser.me/api/portraits/women/28.jpg",
      superhost: true,
      quickDetails: {
        guests: 2,
        bedrooms: 1,
        bathrooms: 1,
        uniqueFeature: "180° ocean views"
      }
    },
    {
      id: 4,
      title: "Desert Dome Under the Stars",
      location: "Joshua Tree, California",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: 178,
      rating: 4.7,
      reviews: 203,
      type: "Unique Stay",
      amenities: ["Stargazing Deck", "Solar Power", "Outdoor Shower", "Fire Pit"],
      host: "David L.",
      hostImage: "https://randomuser.me/api/portraits/men/38.jpg",
      superhost: false,
      quickDetails: {
        guests: 2,
        bedrooms: 1,
        bathrooms: 1,
        uniqueFeature: "Geodesic dome"
      }
    },
    {
      id: 5,
      title: "Lakefront Lodge with Kayaks",
      location: "Lake Tahoe, Nevada",
      image: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      price: 312,
      rating: 4.9,
      reviews: 94,
      type: "Entire Lodge",
      amenities: ["Lake Access", "Kayaks Included", "Dock", "Mountain Views"],
      host: "Jennifer S.",
      hostImage: "https://randomuser.me/api/portraits/women/41.jpg",
      superhost: true,
      quickDetails: {
        guests: 8,
        bedrooms: 4,
        bathrooms: 3,
        uniqueFeature: "Private beach"
      }
    },
    {
      id: 6,
      title: "Converted Lighthouse Studio",
      location: "Cape Cod, Massachusetts",
      image: "https://images.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg?auto=compress&cs=tinysrgb&w=800&q=80",
      price: 234,
      rating: 4.8,
      reviews: 167,
      type: "Historic Stay",
      amenities: ["Ocean Views", "Historic Character", "Spiral Staircase", "Widow's Walk"],
      host: "Robert T.",
      hostImage: "https://randomuser.me/api/portraits/men/52.jpg",
      superhost: true,
      quickDetails: {
        guests: 2,
        bedrooms: 1,
        bathrooms: 1,
        uniqueFeature: "1800s lighthouse"
      }
    }
  ];

  const toggleWishlist = (propertyId) => {
    setWishlist(prev => {
      const newWishlist = new Set(prev);
      if (newWishlist.has(propertyId)) {
        newWishlist.delete(propertyId);
      } else {
        newWishlist.add(propertyId);
      }
      return newWishlist;
    });
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Icon name="Star" size={24} className="text-secondary mr-3" />
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Featured Properties
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Unique Stays Worth Discovering
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Hand-picked properties that offer something extraordinary – from architectural marvels to once-in-a-lifetime locations
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredProperties.map((property) => (
            <div
              key={property.id}
              className="group card hover:shadow-brand-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-lg mb-4 h-48">
                <Image
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(property.id)}
                  className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-200 hover:scale-110"
                  aria-label="Add to wishlist"
                >
                  <Icon 
                    name="Heart" 
                    size={18} 
                    className={`transition-colors duration-200 ${
                      wishlist.has(property.id) ? 'text-accent fill-current' : 'text-text-secondary'
                    }`}
                  />
                </button>

                {/* Property Type Badge */}
                <div className="absolute top-3 left-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {property.type}
                </div>

                {/* Quick Details Overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <Icon name="Users" size={16} className="mx-auto mb-1" />
                        <div>{property.quickDetails.guests} guests</div>
                      </div>
                      <div>
                        <Icon name="Bed" size={16} className="mx-auto mb-1" />
                        <div>{property.quickDetails.bedrooms} bed</div>
                      </div>
                    </div>
                    <div className="mt-3 text-xs opacity-90">
                      {property.quickDetails.uniqueFeature}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                {/* Title & Location */}
                <div className="mb-3">
                  <h3 className="text-lg font-semibold text-text-primary mb-1 group-hover:text-primary transition-colors duration-200">
                    {property.title}
                  </h3>
                  <div className="flex items-center text-sm text-text-secondary">
                    <Icon name="MapPin" size={14} className="mr-1" />
                    {property.location}
                  </div>
                </div>

                {/* Host Info */}
                <div className="flex items-center mb-3">
                  <Image
                    src={property.hostImage}
                    alt={property.host}
                    className="w-6 h-6 rounded-full mr-2"
                  />
                  <span className="text-sm text-text-secondary mr-2">
                    Hosted by {property.host}
                  </span>
                  {property.superhost && (
                    <div className="bg-secondary-50 text-secondary px-2 py-0.5 rounded text-xs font-medium">
                      Superhost
                    </div>
                  )}
                </div>

                {/* Amenities */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {property.amenities.slice(0, 3).map((amenity, index) => (
                      <span
                        key={index}
                        className="text-xs bg-surface text-text-secondary px-2 py-1 rounded"
                      >
                        {amenity}
                      </span>
                    ))}
                    {property.amenities.length > 3 && (
                      <span className="text-xs text-text-secondary px-2 py-1">
                        +{property.amenities.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Rating & Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Icon name="Star" size={16} className="text-secondary mr-1 fill-current" />
                    <span className="text-sm font-medium text-text-primary mr-1">
                      {property.rating}
                    </span>
                    <span className="text-sm text-text-secondary">
                      ({property.reviews})
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-text-primary">
                      ${property.price}
                    </div>
                    <div className="text-xs text-text-secondary">per night</div>
                  </div>
                </div>

                {/* Book Now Button */}
                <Link
                  to="/booking-confirmation-pre-arrival-experience"
                  className="btn-primary w-full mt-4 text-center py-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Properties */}
        <div className="text-center mt-12">
          <Link
            to="/search-results-intelligent-discovery"
            className="btn-outline inline-flex items-center space-x-2 px-8 py-3"
          >
            <span>View All Properties</span>
            <Icon name="ArrowRight" size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProperties;