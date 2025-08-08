import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

function TripHistory() {
  const [filterYear, setFilterYear] = useState('all');
  const [sortBy, setSortBy] = useState('recent');

  const tripHistory = [
    {
      id: 1,
      destination: "Bali, Indonesia",
      property: "Jungle Treehouse Retreat",
      propertyType: "Treehouse",
      checkIn: "2024-01-15",
      checkOut: "2024-01-22",
      nights: 7,
      guests: 2,
      totalCost: 1250,
      currency: "USD",
      rating: 5,
      reviewWritten: true,
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=300&h=200&fit=crop",
      host: "Made Sutrisna",
      highlights: ["Infinity Pool", "Jungle Views", "Yoga Deck"]
    },
    {
      id: 2,
      destination: "Tuscany, Italy",
      property: "Vineyard Villa with Wine Tasting",
      propertyType: "Villa",
      checkIn: "2023-09-10",
      checkOut: "2023-09-17",
      nights: 7,
      guests: 4,
      totalCost: 2100,
      currency: "USD",
      rating: 5,
      reviewWritten: true,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=200&fit=crop",
      host: "Giuseppe Romano",
      highlights: ["Wine Cellar", "Cooking Classes", "Vineyard Tours"]
    },
    {
      id: 3,
      destination: "Reykjavik, Iceland",
      property: "Northern Lights Glass Igloo",
      propertyType: "Unique Stay",
      checkIn: "2023-11-20",
      checkOut: "2023-11-25",
      nights: 5,
      guests: 2,
      totalCost: 1800,
      currency: "USD",
      rating: 4,
      reviewWritten: false,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
      host: "Björn Eriksson",
      highlights: ["Aurora Views", "Glass Ceiling", "Hot Tub"]
    },
    {
      id: 4,
      destination: "Marrakech, Morocco",
      property: "Traditional Riad with Rooftop Terrace",
      propertyType: "Riad",
      checkIn: "2023-05-08",
      checkOut: "2023-05-14",
      nights: 6,
      guests: 2,
      totalCost: 950,
      currency: "USD",
      rating: 5,
      reviewWritten: true,
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=300&h=200&fit=crop",
      host: "Fatima Al-Zahra",
      highlights: ["Rooftop Pool", "Traditional Hammam", "Medina Views"]
    },
    {
      id: 5,
      destination: "Banff, Canada",
      property: "Mountain Lodge with Lake Views",
      propertyType: "Lodge",
      checkIn: "2023-07-12",
      checkOut: "2023-07-19",
      nights: 7,
      guests: 3,
      totalCost: 1650,
      currency: "USD",
      rating: 4,
      reviewWritten: true,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop",
      host: "Sarah Mitchell",
      highlights: ["Lake Louise", "Hiking Trails", "Mountain Views"]
    },
    {
      id: 6,
      destination: "Tokyo, Japan",
      property: "Modern Apartment in Shibuya",
      propertyType: "Apartment",
      checkIn: "2023-03-20",
      checkOut: "2023-03-27",
      nights: 7,
      guests: 2,
      totalCost: 1400,
      currency: "USD",
      rating: 4,
      reviewWritten: true,
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=300&h=200&fit=crop",
      host: "Yuki Tanaka",
      highlights: ["City Center", "Modern Amenities", "Subway Access"]
    }
  ];

  const years = ['all', '2024', '2023', '2022'];
  const sortOptions = [
    { value: 'recent', label: 'Most Recent' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'cost', label: 'Highest Cost' }
  ];

  const filteredAndSortedTrips = tripHistory
    .filter(trip => {
      if (filterYear === 'all') return true;
      return new Date(trip.checkIn).getFullYear().toString() === filterYear;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'recent':
          return new Date(b.checkIn) - new Date(a.checkIn);
        case 'oldest':
          return new Date(a.checkIn) - new Date(b.checkIn);
        case 'rating':
          return b.rating - a.rating;
        case 'cost':
          return b.totalCost - a.totalCost;
        default:
          return 0;
      }
    });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        color={index < rating ? "var(--color-secondary)" : "var(--color-border)"}
        strokeWidth={index < rating ? 0 : 2}
        className={index < rating ? "fill-current" : ""}
      />
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-text-primary">Trip History</h2>
          <p className="text-text-secondary mt-1">Your past adventures and experiences</p>
        </div>

        {/* Filters */}
        <div className="flex items-center space-x-4">
          <select
            value={filterYear}
            onChange={(e) => setFilterYear(e.target.value)}
            className="input-field text-sm py-2 px-3 w-auto"
          >
            {years.map(year => (
              <option key={year} value={year}>
                {year === 'all' ? 'All Years' : year}
              </option>
            ))}
          </select>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="input-field text-sm py-2 px-3 w-auto"
          >
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Trip Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-primary-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-primary">{tripHistory.length}</div>
          <div className="text-sm text-text-secondary">Total Trips</div>
        </div>
        <div className="bg-secondary-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-secondary">
            {tripHistory.reduce((sum, trip) => sum + trip.nights, 0)}
          </div>
          <div className="text-sm text-text-secondary">Nights Stayed</div>
        </div>
        <div className="bg-success-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-success">
            {tripHistory.filter(trip => trip.reviewWritten).length}
          </div>
          <div className="text-sm text-text-secondary">Reviews Written</div>
        </div>
        <div className="bg-accent-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-accent">
            {(tripHistory.reduce((sum, trip) => sum + trip.rating, 0) / tripHistory.length).toFixed(1)}
          </div>
          <div className="text-sm text-text-secondary">Avg Rating</div>
        </div>
      </div>

      {/* Trip List */}
      <div className="space-y-4">
        {filteredAndSortedTrips.map((trip) => (
          <div key={trip.id} className="card hover:shadow-brand-lg transition-all duration-300">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Trip Image */}
              <div className="lg:w-60 flex-shrink-0">
                <div className="relative h-40 lg:h-32 rounded-lg overflow-hidden">
                  <Image
                    src={trip.image}
                    alt={trip.property}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                    <span className="text-xs font-medium text-text-primary">
                      {trip.propertyType}
                    </span>
                  </div>
                </div>
              </div>

              {/* Trip Details */}
              <div className="flex-1 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-text-primary">{trip.property}</h3>
                    <p className="text-text-secondary flex items-center space-x-1">
                      <Icon name="MapPin" size={14} strokeWidth={2} />
                      <span>{trip.destination}</span>
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-text-primary">
                      ${trip.totalCost.toLocaleString()}
                    </div>
                    <div className="text-sm text-text-secondary">{trip.nights} nights</div>
                  </div>
                </div>

                <div className="flex items-center space-x-6 text-sm text-text-secondary">
                  <span className="flex items-center space-x-1">
                    <Icon name="Calendar" size={14} strokeWidth={2} />
                    <span>{formatDate(trip.checkIn)} - {formatDate(trip.checkOut)}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Icon name="Users" size={14} strokeWidth={2} />
                    <span>{trip.guests} guests</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Icon name="User" size={14} strokeWidth={2} />
                    <span>Host: {trip.host}</span>
                  </span>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    {renderStars(trip.rating)}
                  </div>
                  <span className="text-sm font-medium text-text-primary">{trip.rating}.0</span>
                  {trip.reviewWritten && (
                    <span className="text-xs text-success bg-success-50 px-2 py-1 rounded-full">
                      Review Written
                    </span>
                  )}
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {trip.highlights.map((highlight, index) => (
                    <span
                      key={index}
                      className="text-xs bg-surface text-text-secondary px-2 py-1 rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    to="/search-results-intelligent-discovery"
                    className="btn-primary text-sm px-4 py-2 flex items-center space-x-2"
                  >
                    <Icon name="RotateCcw" size={14} strokeWidth={2} />
                    <span>Book Similar</span>
                  </Link>
                  {!trip.reviewWritten && (
                    <button className="btn-outline text-sm px-4 py-2 flex items-center space-x-2">
                      <Icon name="Star" size={14} strokeWidth={2} />
                      <span>Write Review</span>
                    </button>
                  )}
                  <button className="btn-outline text-sm px-4 py-2 flex items-center space-x-2">
                    <Icon name="Share" size={14} strokeWidth={2} />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredAndSortedTrips.length === 0 && (
        <div className="card text-center py-12">
          <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Clock" size={32} color="var(--color-primary)" strokeWidth={1.5} />
          </div>
          <h3 className="text-lg font-semibold text-text-primary mb-2">No trips found</h3>
          <p className="text-text-secondary mb-6">Try adjusting your filters or start planning your first adventure!</p>
          <Link to="/search-results-intelligent-discovery" className="btn-primary">
            Explore Destinations
          </Link>
        </div>
      )}
    </div>
  );
}

export default TripHistory;