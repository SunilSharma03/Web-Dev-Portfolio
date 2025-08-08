import React, { useState, useEffect, useRef } from 'react';

import Icon from '../../components/AppIcon';

import FilterPanel from './components/FilterPanel';
import PropertyCard from './components/PropertyCard';
import MapView from './components/MapView';
import SortingOptions from './components/SortingOptions';
import AIRecommendations from './components/AIRecommendations';

function SearchResults() {
  const [viewMode, setViewMode] = useState('split'); // 'list', 'map', 'split'
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    priceRange: [50, 500],
    propertyType: [],
    amenities: [],
    categories: [],
    rating: 0,
    instantBook: false
  });
  const [sortBy, setSortBy] = useState('bestMatch');
  const [searchQuery, setSearchQuery] = useState('Bali, Indonesia');
  const [selectedProperties, setSelectedProperties] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: -8.3405, lng: 115.0920 });
  const [dividerPosition, setDividerPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  // Mock search results data
  const mockProperties = [
    {
      id: 1,
      title: "Luxury Villa with Infinity Pool",
      location: "Seminyak, Bali",
      price: 285,
      rating: 4.9,
      reviewCount: 127,
      images: [
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop"
      ],
      amenities: ["Pool", "WiFi", "Kitchen", "AC", "Parking"],
      categories: ["Instagram-Worthy Views", "Luxury Escape"],
      instantBook: true,
      hostName: "Sarah Chen",
      hostRating: 4.8,
      coordinates: { lat: -8.6905, lng: 115.2126 },
      description: `Stunning modern villa featuring panoramic ocean views and an infinity pool that seems to merge with the horizon. Perfect for couples seeking a romantic getaway or small groups wanting to experience Bali's luxury side.Located in the heart of Seminyak, you'll be walking distance from world-class beaches, trendy restaurants, and vibrant nightlife.`
    },
    {
      id: 2,
      title: "Traditional Balinese Compound",
      location: "Ubud, Bali",
      price: 165,
      rating: 4.7,
      reviewCount: 89,
      images: [
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
      ],
      amenities: ["WiFi", "Kitchen", "Garden", "Yoga Space", "Breakfast"],
      categories: ["Cultural Immersion", "Digital Nomad Ready"],
      instantBook: false,
      hostName: "Made Wijaya",
      hostRating: 4.9,
      coordinates: { lat: -8.5069, lng: 115.2625 },
      description: `Authentic Balinese architecture meets modern comfort in this traditional compound surrounded by lush rice terraces. Experience the real Bali with daily yoga sessions and organic breakfast included.

Perfect for digital nomads with dedicated workspace and high-speed internet, while maintaining the spiritual essence of Ubud.`
    },
    {
      id: 3,
      title: "Beachfront Family Resort",
      location: "Sanur, Bali",
      price: 220,
      rating: 4.6,
      reviewCount: 203,
      images: [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop"
      ],
      amenities: ["Beach Access", "Pool", "Kids Club", "Restaurant", "Spa"],
      categories: ["Family Adventure Base", "Beach Paradise"],
      instantBook: true,
      hostName: "Bali Resorts Group",
      hostRating: 4.7,
      coordinates: { lat: -8.6847, lng: 115.2623 },
      description: `Family-friendly beachfront resort with direct access to Sanur's calm waters. Features kids club, multiple pools, and organized activities for all ages.

The resort offers traditional Balinese hospitality with modern amenities, making it perfect for families seeking both adventure and relaxation.`
    },
    {
      id: 4,
      title: "Eco-Friendly Treehouse",
      location: "Munduk, Bali",
      price: 95,
      rating: 4.8,
      reviewCount: 156,
      images: [
        "https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop"
      ],
      amenities: ["Nature Views", "Hiking Trails", "Organic Garden", "WiFi"],
      categories: ["Eco-Conscious", "Adventure Base"],
      instantBook: false,
      hostName: "Green Bali Collective",
      hostRating: 4.9,
      coordinates: { lat: -8.2543, lng: 115.0832 },
      description: `Unique treehouse experience in Bali's mountainous region, built with sustainable materials and powered by renewable energy. Wake up to bird songs and mountain mist.

Perfect for nature lovers and eco-conscious travelers seeking an off-the-beaten-path adventure while staying connected with reliable WiFi.`
    },
    {
      id: 5,
      title: "Modern Canggu Surf House",
      location: "Canggu, Bali",
      price: 180,
      rating: 4.5,
      reviewCount: 94,
      images: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop"
      ],
      amenities: ["Surfboard Storage", "Pool", "Coworking Space", "Bike Rental"],
      categories: ["Surf Paradise", "Digital Nomad Ready"],
      instantBook: true,
      hostName: "Surf & Stay Bali",
      hostRating: 4.6,
      coordinates: { lat: -8.6482, lng: 115.1378 },
      description: `Modern surf house just 2 minutes walk from Canggu's famous surf breaks. Features dedicated surfboard storage, coworking space, and a community of like-minded travelers.

Ideal for digital nomads who want to balance work and surf, with high-speed internet and a productive environment during the day.`
    },
    {
      id: 6,
      title: "Romantic Cliffside Retreat",
      location: "Uluwatu, Bali",
      price: 350,
      rating: 4.9,
      reviewCount: 78,
      images: [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&h=600&fit=crop"
      ],
      amenities: ["Ocean Views", "Private Pool", "Butler Service", "Spa"],
      categories: ["Instagram-Worthy Views", "Romantic Escape"],
      instantBook: false,
      hostName: "Luxury Bali Villas",
      hostRating: 4.8,
      coordinates: { lat: -8.8295, lng: 115.0856 },
      description: `Breathtaking cliffside villa with 180-degree ocean views and world-class sunsets. Features private infinity pool, dedicated butler service, and in-villa spa treatments.

The ultimate romantic escape with complete privacy and luxury amenities, perfect for honeymoons, anniversaries, or special celebrations.`
    }
  ];

  const [filteredProperties, setFilteredProperties] = useState(mockProperties);

  // Handle divider dragging
  const handleMouseDown = (e) => {
    setIsDragging(true);
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const newPosition = ((e.clientX - rect.left) / rect.width) * 100;
    setDividerPosition(Math.max(20, Math.min(80, newPosition)));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging]);

  // Filter properties based on selected filters
  useEffect(() => {
    let filtered = mockProperties.filter(property => {
      // Price range filter
      if (property.price < selectedFilters.priceRange[0] || property.price > selectedFilters.priceRange[1]) {
        return false;
      }
      
      // Rating filter
      if (property.rating < selectedFilters.rating) {
        return false;
      }
      
      // Category filter
      if (selectedFilters.categories.length > 0) {
        const hasCategory = selectedFilters.categories.some(category => 
          property.categories.includes(category)
        );
        if (!hasCategory) return false;
      }
      
      // Instant book filter
      if (selectedFilters.instantBook && !property.instantBook) {
        return false;
      }
      
      return true;
    });

    // Apply sorting
    switch (sortBy) {
      case 'priceLow':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'priceHigh':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'reviews':
        filtered.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      default: // bestMatch
        // Keep original order for best match
        break;
    }

    setFilteredProperties(filtered);
  }, [selectedFilters, sortBy]);

  const handlePropertySelect = (propertyId) => {
    setSelectedProperties(prev => 
      prev.includes(propertyId) 
        ? prev.filter(id => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Search Header */}
      <div className="bg-white border-b border-border sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search Bar */}
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <Icon name="Search" size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Where do you want to stay?"
                  className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary"
                />
              </div>
            </div>

            {/* View Controls */}
            <div className="flex items-center gap-4">
              <div className="hidden lg:flex items-center bg-surface rounded-lg p-1">
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    viewMode === 'list' ? 'bg-white text-primary shadow-sm' : 'text-text-secondary hover:text-primary'
                  }`}
                >
                  <Icon name="List" size={16} className="mr-2" />
                  List
                </button>
                <button
                  onClick={() => setViewMode('split')}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    viewMode === 'split' ? 'bg-white text-primary shadow-sm' : 'text-text-secondary hover:text-primary'
                  }`}
                >
                  <Icon name="Layout" size={16} className="mr-2" />
                  Split
                </button>
                <button
                  onClick={() => setViewMode('map')}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    viewMode === 'map' ? 'bg-white text-primary shadow-sm' : 'text-text-secondary hover:text-primary'
                  }`}
                >
                  <Icon name="Map" size={16} className="mr-2" />
                  Map
                </button>
              </div>

              <button
                onClick={() => setIsFilterOpen(true)}
                className="lg:hidden btn-outline px-4 py-2 text-sm"
              >
                <Icon name="Filter" size={16} className="mr-2" />
                Filters
              </button>
            </div>
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
            <p className="text-text-secondary">
              <span className="font-semibold text-text-primary">{filteredProperties.length}</span> stays found in <span className="font-medium">{searchQuery}</span>
            </p>
            <SortingOptions sortBy={sortBy} setSortBy={setSortBy} />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div 
        ref={containerRef}
        className="flex h-[calc(100vh-140px)] relative"
        style={{ cursor: isDragging ? 'col-resize' : 'default' }}
      >
        {/* Filter Panel - Desktop */}
        <div className="hidden lg:block w-80 bg-white border-r border-border overflow-y-auto">
          <FilterPanel 
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
        </div>

        {/* Content Area */}
        <div className="flex-1 flex relative">
          {/* Property List */}
          <div 
            className={`bg-white overflow-y-auto ${
              viewMode === 'map' ? 'hidden' : 
              viewMode === 'list'? 'w-full' : 'w-full lg:block'
            }`}
            style={{ 
              width: viewMode === 'split' ? `${dividerPosition}%` : '100%'
            }}
          >
            <div className="p-6">
              {/* AI Recommendations */}
              <AIRecommendations properties={mockProperties.slice(0, 3)} />

              {/* Property Grid */}
              <div className="space-y-6">
                {filteredProperties.map((property) => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                    isSelected={selectedProperties.includes(property.id)}
                    onSelect={() => handlePropertySelect(property.id)}
                  />
                ))}
              </div>

              {filteredProperties.length === 0 && (
                <div className="text-center py-12">
                  <Icon name="Search" size={48} className="mx-auto text-text-secondary mb-4" />
                  <h3 className="text-lg font-semibold text-text-primary mb-2">No properties found</h3>
                  <p className="text-text-secondary">Try adjusting your filters or search criteria</p>
                </div>
              )}
            </div>
          </div>

          {/* Draggable Divider */}
          {viewMode === 'split' && (
            <div
              className="hidden lg:block w-1 bg-border hover:bg-primary cursor-col-resize relative group"
              onMouseDown={handleMouseDown}
              style={{ left: `${dividerPosition}%` }}
            >
              <div className="absolute inset-y-0 -left-1 -right-1 group-hover:bg-primary-100 transition-colors"></div>
            </div>
          )}

          {/* Map View */}
          <div 
            className={`${
              viewMode === 'list' ? 'hidden' : 
              viewMode === 'map'? 'w-full' : 'hidden lg:block'
            }`}
            style={{ 
              width: viewMode === 'split' ? `${100 - dividerPosition}%` : '100%'
            }}
          >
            <MapView 
              properties={filteredProperties}
              center={mapCenter}
              selectedProperties={selectedProperties}
              onPropertySelect={handlePropertySelect}
            />
          </div>
        </div>
      </div>

      {/* Mobile Filter Modal */}
      {isFilterOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="absolute inset-x-0 bottom-0 bg-white rounded-t-xl max-h-[80vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-border px-6 py-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Filters</h3>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-2 hover:bg-surface rounded-lg transition-colors"
              >
                <Icon name="X" size={20} />
              </button>
            </div>
            <FilterPanel 
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
              onClose={() => setIsFilterOpen(false)}
            />
          </div>
        </div>
      )}

      {/* Mobile Map Toggle */}
      <div className="lg:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40">
        <button
          onClick={() => setViewMode(viewMode === 'map' ? 'list' : 'map')}
          className="btn-primary px-6 py-3 shadow-brand-lg"
        >
          <Icon name={viewMode === 'map' ? 'List' : 'Map'} size={20} className="mr-2" />
          {viewMode === 'map' ? 'Show List' : 'Show Map'}
        </button>
      </div>
    </div>
  );
}

export default SearchResults;