import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

function Wishlists() {
  const [activeWishlist, setActiveWishlist] = useState('weekend-getaways');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newListName, setNewListName] = useState('');

  const wishlists = [
    {
      id: 'weekend-getaways',
      name: 'Weekend Getaways',
      description: 'Perfect for short escapes and quick adventures',
      itemCount: 12,
      isPublic: false,
      created: '2024-01-15',
      cover: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop'
    },
    {
      id: 'dream-destinations',
      name: 'Dream Destinations',
      description: 'Bucket list properties for future adventures',
      itemCount: 18,
      isPublic: true,
      created: '2023-12-10',
      cover: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=300&h=200&fit=crop'
    },
    {
      id: 'group-trip-ideas',
      name: 'Group Trip Ideas',
      description: 'Large properties perfect for friends and family',
      itemCount: 8,
      isPublic: true,
      created: '2024-02-01',
      cover: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=200&fit=crop'
    },
    {
      id: 'romantic-escapes',
      name: 'Romantic Escapes',
      description: 'Intimate properties for couples',
      itemCount: 15,
      isPublic: false,
      created: '2023-11-20',
      cover: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop'
    }
  ];

  const wishlistProperties = {
    'weekend-getaways': [
      {
        id: 1,
        name: "Cozy Cabin in the Mountains",
        location: "Aspen, Colorado",
        price: 180,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=200&fit=crop",
        priceDropAlert: true,
        availability: "Available this weekend"
      },
      {
        id: 2,
        name: "Beachfront Cottage",
        location: "Malibu, California",
        price: 250,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=300&h=200&fit=crop",
        priceDropAlert: false,
        availability: "Booked until March"
      },
      {
        id: 3,
        name: "Urban Loft Downtown",
        location: "Portland, Oregon",
        price: 120,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=300&h=200&fit=crop",
        priceDropAlert: false,
        availability: "Available next month"
      }
    ],
    'dream-destinations': [
      {
        id: 4,
        name: "Overwater Bungalow",
        location: "Bora Bora, French Polynesia",
        price: 800,
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=200&fit=crop",
        priceDropAlert: false,
        availability: "Available in 6 months"
      },
      {
        id: 5,
        name: "Safari Lodge",
        location: "Serengeti, Tanzania",
        price: 600,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=300&h=200&fit=crop",
        priceDropAlert: true,
        availability: "Peak season booking"
      }
    ],
    'group-trip-ideas': [
      {
        id: 6,
        name: "Large Villa with Pool",
        location: "Tuscany, Italy",
        price: 450,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=200&fit=crop",
        priceDropAlert: false,
        availability: "Available summer 2024"
      }
    ],
    'romantic-escapes': [
      {
        id: 7,
        name: "Private Island Resort",
        location: "Maldives",
        price: 1200,
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=300&h=200&fit=crop",
        priceDropAlert: false,
        availability: "Honeymoon packages available"
      }
    ]
  };

  const currentWishlist = wishlists.find(w => w.id === activeWishlist);
  const currentProperties = wishlistProperties[activeWishlist] || [];

  const handleCreateWishlist = () => {
    if (newListName.trim()) {
      // In a real app, this would create a new wishlist
      setNewListName('');
      setShowCreateModal(false);
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={12}
        color={index < Math.floor(rating) ? "var(--color-secondary)" : "var(--color-border)"}
        strokeWidth={index < Math.floor(rating) ? 0 : 2}
        className={index < Math.floor(rating) ? "fill-current" : ""}
      />
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-text-primary">My Wishlists</h2>
          <p className="text-text-secondary mt-1">Save and organize your favorite properties</p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="btn-primary flex items-center space-x-2"
        >
          <Icon name="Plus" size={20} strokeWidth={2} />
          <span>Create List</span>
        </button>
      </div>

      {/* Wishlist Tabs */}
      <div className="border-b border-border">
        <nav className="flex space-x-8 overflow-x-auto scrollbar-hide">
          {wishlists.map((wishlist) => (
            <button
              key={wishlist.id}
              onClick={() => setActiveWishlist(wishlist.id)}
              className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors duration-200 ${
                activeWishlist === wishlist.id
                  ? 'border-primary text-primary' :'border-transparent text-text-secondary hover:text-primary hover:border-primary-200'
              }`}
            >
              <span>{wishlist.name}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${
                activeWishlist === wishlist.id
                  ? 'bg-primary-100 text-primary' :'bg-surface text-text-secondary'
              }`}>
                {wishlist.itemCount}
              </span>
              {wishlist.isPublic && (
                <Icon name="Globe" size={14} strokeWidth={2} className="text-text-secondary" />
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Wishlist Header */}
      {currentWishlist && (
        <div className="flex items-center justify-between p-6 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg">
          <div>
            <h3 className="text-xl font-bold text-text-primary">{currentWishlist.name}</h3>
            <p className="text-text-secondary mt-1">{currentWishlist.description}</p>
            <div className="flex items-center space-x-4 mt-3 text-sm text-text-secondary">
              <span className="flex items-center space-x-1">
                <Icon name="Heart" size={14} strokeWidth={2} />
                <span>{currentWishlist.itemCount} properties</span>
              </span>
              <span className="flex items-center space-x-1">
                <Icon name="Calendar" size={14} strokeWidth={2} />
                <span>Created {new Date(currentWishlist.created).toLocaleDateString()}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Icon name={currentWishlist.isPublic ? "Globe" : "Lock"} size={14} strokeWidth={2} />
                <span>{currentWishlist.isPublic ? "Public" : "Private"}</span>
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button className="btn-outline text-sm px-4 py-2 flex items-center space-x-2">
              <Icon name="Share" size={16} strokeWidth={2} />
              <span>Share</span>
            </button>
            <button className="btn-outline text-sm px-4 py-2 flex items-center space-x-2">
              <Icon name="Settings" size={16} strokeWidth={2} />
              <span>Manage</span>
            </button>
          </div>
        </div>
      )}

      {/* Properties Grid */}
      {currentProperties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProperties.map((property) => (
            <div key={property.id} className="card group cursor-pointer">
              <div className="relative">
                <div className="h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={property.image}
                    alt={property.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200">
                  <Icon name="Heart" size={16} color="var(--color-accent)" strokeWidth={2} className="fill-current" />
                </button>
                {property.priceDropAlert && (
                  <div className="absolute top-3 left-3 bg-success text-white px-2 py-1 rounded-full text-xs font-medium">
                    Price Drop!
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-text-primary group-hover:text-primary transition-colors duration-200">
                    {property.name}
                  </h4>
                  <p className="text-text-secondary text-sm flex items-center space-x-1">
                    <Icon name="MapPin" size={12} strokeWidth={2} />
                    <span>{property.location}</span>
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {renderStars(property.rating)}
                    <span className="text-sm font-medium text-text-primary ml-1">
                      {property.rating}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-text-primary">${property.price}</div>
                    <div className="text-xs text-text-secondary">per night</div>
                  </div>
                </div>

                <div className="text-sm text-text-secondary">
                  <Icon name="Calendar" size={12} strokeWidth={2} className="inline mr-1" />
                  {property.availability}
                </div>

                <div className="flex items-center space-x-2 pt-2">
                  <Link
                    to="/search-results-intelligent-discovery"
                    className="btn-primary text-sm px-4 py-2 flex-1 text-center"
                  >
                    View Details
                  </Link>
                  <button className="btn-outline text-sm px-3 py-2">
                    <Icon name="X" size={14} strokeWidth={2} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="card text-center py-12">
          <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Heart" size={32} color="var(--color-primary)" strokeWidth={1.5} />
          </div>
          <h3 className="text-lg font-semibold text-text-primary mb-2">No saved properties</h3>
          <p className="text-text-secondary mb-6">Start building your wishlist by saving properties you love!</p>
          <Link to="/search-results-intelligent-discovery" className="btn-primary">
            Explore Properties
          </Link>
        </div>
      )}

      {/* Create Wishlist Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-text-primary">Create New Wishlist</h3>
              <button
                onClick={() => setShowCreateModal(false)}
                className="text-text-secondary hover:text-text-primary"
              >
                <Icon name="X" size={20} strokeWidth={2} />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Wishlist Name
                </label>
                <input
                  type="text"
                  value={newListName}
                  onChange={(e) => setNewListName(e.target.value)}
                  placeholder="e.g., Summer Vacation Ideas"
                  className="input-field"
                />
              </div>
              
              <div className="flex items-center space-x-3 pt-4">
                <button
                  onClick={handleCreateWishlist}
                  className="btn-primary flex-1"
                >
                  Create Wishlist
                </button>
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="btn-outline flex-1"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Wishlists;