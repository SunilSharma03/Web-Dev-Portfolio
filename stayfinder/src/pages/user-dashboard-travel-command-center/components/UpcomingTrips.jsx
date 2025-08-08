import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

function UpcomingTrips() {
  const upcomingTrips = [
    {
      id: 1,
      destination: "Santorini, Greece",
      property: "Sunset Villa with Infinity Pool",
      propertyType: "Luxury Villa",
      checkIn: "2024-03-15",
      checkOut: "2024-03-22",
      nights: 7,
      guests: 2,
      bookingRef: "SF-2024-001",
      status: "Confirmed",
      weather: { temp: "24°C", condition: "Sunny", icon: "Sun" },
      host: {
        name: "Maria Konstantinos",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
        responseTime: "Within 1 hour"
      },
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&h=250&fit=crop",
      localRecommendations: [
        { type: "Restaurant", name: "Ambrosia Restaurant", rating: 4.8 },
        { type: "Activity", name: "Sunset Catamaran Tour", rating: 4.9 },
        { type: "Beach", name: "Red Beach", rating: 4.6 }
      ]
    },
    {
      id: 2,
      destination: "Kyoto, Japan",
      property: "Traditional Ryokan Experience",
      propertyType: "Ryokan",
      checkIn: "2024-04-10",
      checkOut: "2024-04-15",
      nights: 5,
      guests: 2,
      bookingRef: "SF-2024-002",
      status: "Confirmed",
      weather: { temp: "18°C", condition: "Partly Cloudy", icon: "CloudSun" },
      host: {
        name: "Hiroshi Tanaka",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
        responseTime: "Within 2 hours"
      },
      image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400&h=250&fit=crop",
      localRecommendations: [
        { type: "Temple", name: "Kinkaku-ji Temple", rating: 4.9 },
        { type: "Garden", name: "Arashiyama Bamboo Grove", rating: 4.8 },
        { type: "Experience", name: "Tea Ceremony Class", rating: 4.7 }
      ]
    }
  ];

  const getDaysUntil = (checkInDate) => {
    const today = new Date();
    const checkIn = new Date(checkInDate);
    const timeDiff = checkIn.getTime() - today.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysDiff;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-text-primary">Upcoming Trips</h2>
          <p className="text-text-secondary mt-1">Your confirmed bookings and travel plans</p>
        </div>
        <Link
          to="/search-results-intelligent-discovery"
          className="btn-primary flex items-center space-x-2"
        >
          <Icon name="Plus" size={20} strokeWidth={2} />
          <span>Book New Trip</span>
        </Link>
      </div>

      {upcomingTrips.length === 0 ? (
        <div className="card text-center py-12">
          <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Calendar" size={32} color="var(--color-primary)" strokeWidth={1.5} />
          </div>
          <h3 className="text-lg font-semibold text-text-primary mb-2">No upcoming trips</h3>
          <p className="text-text-secondary mb-6">Start planning your next adventure!</p>
          <Link to="/search-results-intelligent-discovery" className="btn-primary">
            Explore Destinations
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {upcomingTrips.map((trip) => (
            <div key={trip.id} className="card-elevated">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Trip Image */}
                <div className="lg:w-80 flex-shrink-0">
                  <div className="relative h-48 lg:h-full rounded-lg overflow-hidden">
                    <Image
                      src={trip.image}
                      alt={trip.property}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-semibold text-primary">
                        {getDaysUntil(trip.checkIn)} days to go
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 bg-success/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-semibold text-white">{trip.status}</span>
                    </div>
                  </div>
                </div>

                {/* Trip Details */}
                <div className="flex-1 space-y-4">
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-text-primary">{trip.property}</h3>
                        <p className="text-text-secondary flex items-center space-x-1">
                          <Icon name="MapPin" size={16} strokeWidth={2} />
                          <span>{trip.destination}</span>
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-2 text-text-secondary">
                          <Icon name={trip.weather.icon} size={20} strokeWidth={2} />
                          <span className="font-medium">{trip.weather.temp}</span>
                        </div>
                        <p className="text-sm text-text-secondary">{trip.weather.condition}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-6 text-sm text-text-secondary">
                      <span className="flex items-center space-x-1">
                        <Icon name="Calendar" size={16} strokeWidth={2} />
                        <span>{formatDate(trip.checkIn)} - {formatDate(trip.checkOut)}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Icon name="Moon" size={16} strokeWidth={2} />
                        <span>{trip.nights} nights</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Icon name="Users" size={16} strokeWidth={2} />
                        <span>{trip.guests} guests</span>
                      </span>
                    </div>
                  </div>

                  {/* Host Information */}
                  <div className="flex items-center space-x-3 p-3 bg-surface rounded-lg">
                    <Image
                      src={trip.host.avatar}
                      alt={trip.host.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-text-primary">{trip.host.name}</p>
                      <p className="text-sm text-text-secondary">Responds {trip.host.responseTime}</p>
                    </div>
                    <button className="btn-outline text-sm px-4 py-2">
                      <Icon name="MessageCircle" size={16} strokeWidth={2} className="mr-2" />
                      Message
                    </button>
                  </div>

                  {/* Local Recommendations */}
                  <div>
                    <h4 className="font-semibold text-text-primary mb-3 flex items-center space-x-2">
                      <Icon name="Star" size={16} strokeWidth={2} />
                      <span>Local Recommendations</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {trip.localRecommendations.map((rec, index) => (
                        <div key={index} className="bg-surface p-3 rounded-lg">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-text-secondary uppercase tracking-wide">
                              {rec.type}
                            </span>
                            <div className="flex items-center space-x-1">
                              <Icon name="Star" size={12} color="var(--color-secondary)" strokeWidth={2} />
                              <span className="text-xs font-medium">{rec.rating}</span>
                            </div>
                          </div>
                          <p className="text-sm font-medium text-text-primary">{rec.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    <Link
                      to="/booking-confirmation-pre-arrival-experience"
                      className="btn-primary flex items-center space-x-2"
                    >
                      <Icon name="FileText" size={16} strokeWidth={2} />
                      <span>View Booking</span>
                    </Link>
                    <button className="btn-outline flex items-center space-x-2">
                      <Icon name="Download" size={16} strokeWidth={2} />
                      <span>Download Voucher</span>
                    </button>
                    <button className="btn-outline flex items-center space-x-2">
                      <Icon name="Share" size={16} strokeWidth={2} />
                      <span>Share Trip</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UpcomingTrips;