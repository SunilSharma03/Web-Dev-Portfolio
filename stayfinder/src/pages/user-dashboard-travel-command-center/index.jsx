import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import UpcomingTrips from './components/UpcomingTrips';
import TripHistory from './components/TripHistory';
import Wishlists from './components/Wishlists';
import Reviews from './components/Reviews';
import Messages from './components/Messages';
import TravelPreferences from './components/TravelPreferences';
import TravelInsights from './components/TravelInsights';

function UserDashboard() {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const user = {
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    memberSince: "2022",
    totalTrips: 24,
    reviewsWritten: 18,
    wishlistItems: 47
  };

  const upcomingTrip = {
    id: 1,
    destination: "Santorini, Greece",
    property: "Sunset Villa with Infinity Pool",
    checkIn: "2024-03-15",
    checkOut: "2024-03-22",
    daysUntil: 12,
    weather: { temp: "24°C", condition: "Sunny", icon: "Sun" },
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&h=250&fit=crop"
  };

  const navigationTabs = [
    { id: 'upcoming', label: 'Upcoming Trips', icon: 'Calendar', count: 2 },
    { id: 'history', label: 'Trip History', icon: 'Clock', count: 24 },
    { id: 'wishlists', label: 'Wishlists', icon: 'Heart', count: 47 },
    { id: 'reviews', label: 'Reviews', icon: 'Star', count: 18 },
    { id: 'messages', label: 'Messages', icon: 'MessageCircle', count: 3 },
    { id: 'preferences', label: 'Preferences', icon: 'Settings', count: null },
    { id: 'insights', label: 'Travel Insights', icon: 'BarChart3', count: null }
  ];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'upcoming':
        return <UpcomingTrips />;
      case 'history':
        return <TripHistory />;
      case 'wishlists':
        return <Wishlists />;
      case 'reviews':
        return <Reviews />;
      case 'messages':
        return <Messages />;
      case 'preferences':
        return <TravelPreferences />;
      case 'insights':
        return <TravelInsights />;
      default:
        return <UpcomingTrips />;
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section with Personalized Greeting */}
      <div className="bg-gradient-to-br from-primary to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-6 lg:space-y-0">
            <div className="flex items-center space-x-6">
              <div className="relative">
                <Image
                  src={user.avatar}
                  alt={user.name}
                  className="w-20 h-20 rounded-full border-4 border-white/20 object-cover"
                />
                <div className="absolute -bottom-2 -right-2 bg-secondary w-8 h-8 rounded-full flex items-center justify-center">
                  <Icon name="MapPin" size={16} color="white" strokeWidth={2.5} />
                </div>
              </div>
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold mb-2">
                  Welcome back, {user.name.split(' ')[0]}! 👋
                </h1>
                <p className="text-primary-100 text-lg">
                  Ready for your next adventure? Your dream stay awaits.
                </p>
                <div className="flex items-center space-x-6 mt-3 text-sm text-primary-200">
                  <span>Member since {user.memberSince}</span>
                  <span>•</span>
                  <span>{user.totalTrips} trips completed</span>
                </div>
              </div>
            </div>

            {/* Upcoming Trip Countdown */}
            {upcomingTrip && (
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">{upcomingTrip.daysUntil}</div>
                  <div className="text-primary-100 text-sm mb-3">days until</div>
                  <div className="font-semibold mb-1">{upcomingTrip.destination}</div>
                  <div className="text-primary-200 text-sm">{formatDate(upcomingTrip.checkIn)}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="card text-center">
            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="MapPin" size={24} color="var(--color-primary)" strokeWidth={2} />
            </div>
            <div className="text-2xl font-bold text-text-primary mb-1">{user.totalTrips}</div>
            <div className="text-text-secondary text-sm">Total Trips</div>
          </div>
          <div className="card text-center">
            <div className="w-12 h-12 bg-secondary-50 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Star" size={24} color="var(--color-secondary)" strokeWidth={2} />
            </div>
            <div className="text-2xl font-bold text-text-primary mb-1">{user.reviewsWritten}</div>
            <div className="text-text-secondary text-sm">Reviews Written</div>
          </div>
          <div className="card text-center">
            <div className="w-12 h-12 bg-accent-50 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Heart" size={24} color="var(--color-accent)" strokeWidth={2} />
            </div>
            <div className="text-2xl font-bold text-text-primary mb-1">{user.wishlistItems}</div>
            <div className="text-text-secondary text-sm">Saved Properties</div>
          </div>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="card sticky top-24">
              <h3 className="text-lg font-semibold text-text-primary mb-4">Dashboard</h3>
              <nav className="space-y-2">
                {navigationTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-primary text-white shadow-md'
                        : 'text-text-secondary hover:text-primary hover:bg-primary-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon name={tab.icon} size={20} strokeWidth={2} />
                      <span className="font-medium">{tab.label}</span>
                    </div>
                    {tab.count && (
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        activeTab === tab.id
                          ? 'bg-white/20 text-white' :'bg-primary-100 text-primary'
                      }`}>
                        {tab.count}
                      </span>
                    )}
                  </button>
                ))}
              </nav>

              {/* Quick Actions */}
              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="text-sm font-semibold text-text-primary mb-3">Quick Actions</h4>
                <div className="space-y-2">
                  <Link
                    to="/search-results-intelligent-discovery"
                    className="flex items-center space-x-3 px-4 py-2 text-text-secondary hover:text-primary hover:bg-primary-50 rounded-lg transition-colors duration-200"
                  >
                    <Icon name="Search" size={16} strokeWidth={2} />
                    <span className="text-sm">Find New Stays</span>
                  </Link>
                  <Link
                    to="/contact-support-hub"
                    className="flex items-center space-x-3 px-4 py-2 text-text-secondary hover:text-primary hover:bg-primary-50 rounded-lg transition-colors duration-200"
                  >
                    <Icon name="HelpCircle" size={16} strokeWidth={2} />
                    <span className="text-sm">Get Help</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;