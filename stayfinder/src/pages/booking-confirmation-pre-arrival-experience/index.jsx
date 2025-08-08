import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import BookingDetails from './components/BookingDetails';
import LocalConcierge from './components/LocalConcierge';
import PreArrivalTimeline from './components/PreArrivalTimeline';
import TripActions from './components/TripActions';
import SocialSharing from './components/SocialSharing';

function BookingConfirmation() {
  const [activeTab, setActiveTab] = useState('details');
  const [showNotificationSetup, setShowNotificationSetup] = useState(false);

  // Mock booking data
  const bookingData = {
    confirmationNumber: "SF-2024-789456",
    bookingId: "BK789456123",
    status: "confirmed",
    property: {
      id: "prop_001",
      name: "Sunset Villa Retreat",
      type: "Villa",
      location: "Santorini, Greece",
      address: "Oia Village, Santorini 84702, Greece",
      coordinates: { lat: 36.4618, lng: 25.3753 },
      images: [
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop"
      ],
      amenities: ["Ocean View", "Private Pool", "WiFi", "Kitchen", "Parking"],
      rating: 4.9,
      reviewCount: 127
    },
    dates: {
      checkIn: "2024-07-15",
      checkOut: "2024-07-22",
      nights: 7
    },
    guests: {
      adults: 2,
      children: 0,
      total: 2
    },
    pricing: {
      basePrice: 2100,
      cleaningFee: 150,
      serviceFee: 315,
      taxes: 189,
      total: 2754
    },
    host: {
      name: "Maria Konstantinou",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
      responseRate: "100%",
      responseTime: "within an hour",
      phone: "+30 22860 71234",
      email: "maria@sunsetvillaoia.com"
    },
    checkInInstructions: `Welcome to Sunset Villa! Your arrival details:

🏠 Self check-in with lockbox
🔑 Lockbox code: 2847 (available from 3:00 PM)
📍 Lockbox location: Right side of main entrance, behind the blue planter

🚗 Parking: Private parking space #3 (marked with villa name)
📱 WiFi: SunsetVilla_Guest | Password: Santorini2024!

For any questions, I'm available 24/7 via WhatsApp: +30 694 567 8901`,
    cancellationPolicy: "Free cancellation until July 8th. After that, 50% refund until July 13th."
  };

  const tabs = [
    { id: 'details', label: 'Trip Details', icon: 'FileText' },
    { id: 'concierge', label: 'Local Guide', icon: 'MapPin' },
    { id: 'timeline', label: 'Pre-Arrival', icon: 'Clock' },
    { id: 'actions', label: 'Manage Trip', icon: 'Settings' }
  ];

  useEffect(() => {
    // Simulate notification permission check
    if ('Notification' in window && Notification.permission === 'default') {
      setShowNotificationSetup(true);
    }
  }, []);

  const handleNotificationSetup = async () => {
    if ('Notification' in window) {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        setShowNotificationSetup(false);
        // Show success message
      }
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Success Header */}
      <div className="bg-gradient-to-r from-success-50 to-primary-50 border-b border-success-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center">
              <Icon name="CheckCircle" size={32} color="white" strokeWidth={2} />
            </div>
          </div>
          
          <div className="text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-text-primary mb-2">
              Booking Confirmed! 🎉
            </h1>
            <p className="text-lg text-text-secondary mb-4">
              Your amazing stay at {bookingData.property.name} is all set
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <Icon name="Calendar" size={16} color="var(--color-text-secondary)" />
                <span>July 15-22, 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={16} color="var(--color-text-secondary)" />
                <span>{bookingData.guests.total} guests</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Hash" size={16} color="var(--color-text-secondary)" />
                <span>{bookingData.confirmationNumber}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notification Setup Banner */}
      {showNotificationSetup && (
        <div className="bg-warning-50 border-b border-warning-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Icon name="Bell" size={20} color="var(--color-warning-600)" />
                <div>
                  <p className="text-sm font-medium text-warning-800">
                    Stay updated with trip reminders
                  </p>
                  <p className="text-xs text-warning-700">
                    Get notifications for check-in reminders and local recommendations
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={handleNotificationSetup}
                  className="text-sm font-medium text-warning-800 hover:text-warning-900 transition-colors duration-200"
                >
                  Enable Notifications
                </button>
                <button
                  onClick={() => setShowNotificationSetup(false)}
                  className="text-warning-600 hover:text-warning-700 transition-colors duration-200"
                >
                  <Icon name="X" size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tab Navigation */}
            <div className="bg-white rounded-lg shadow-brand mb-6">
              <div className="border-b border-border">
                <nav className="flex space-x-8 px-6" aria-label="Tabs">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                        activeTab === tab.id
                          ? 'border-primary text-primary' :'border-transparent text-text-secondary hover:text-text-primary hover:border-gray-300'
                      }`}
                    >
                      <Icon name={tab.icon} size={16} />
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-6">
                {activeTab === 'details' && <BookingDetails bookingData={bookingData} />}
                {activeTab === 'concierge' && <LocalConcierge location={bookingData.property.location} />}
                {activeTab === 'timeline' && <PreArrivalTimeline checkInDate={bookingData.dates.checkIn} />}
                {activeTab === 'actions' && <TripActions bookingData={bookingData} />}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Property Summary Card */}
            <div className="bg-white rounded-lg shadow-brand overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={bookingData.property.images[0]}
                  alt={bookingData.property.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Icon name="Star" size={14} color="var(--color-warning-500)" />
                    <span className="text-sm font-medium">{bookingData.property.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {bookingData.property.name}
                </h3>
                <p className="text-text-secondary mb-4 flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  {bookingData.property.location}
                </p>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Check-in</span>
                    <span className="font-medium">July 15, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Check-out</span>
                    <span className="font-medium">July 22, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Guests</span>
                    <span className="font-medium">{bookingData.guests.total} guests</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-border">
                    <span className="text-text-secondary">Total paid</span>
                    <span className="font-semibold text-lg">${bookingData.pricing.total}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-brand p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-primary-50 hover:border-primary-200 transition-all duration-200">
                  <Icon name="MessageCircle" size={20} color="var(--color-primary)" />
                  <span className="font-medium">Contact Host</span>
                </button>
                
                <button className="w-full flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-primary-50 hover:border-primary-200 transition-all duration-200">
                  <Icon name="Navigation" size={20} color="var(--color-primary)" />
                  <span className="font-medium">Get Directions</span>
                </button>
                
                <button className="w-full flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-primary-50 hover:border-primary-200 transition-all duration-200">
                  <Icon name="Calendar" size={20} color="var(--color-primary)" />
                  <span className="font-medium">Add to Calendar</span>
                </button>
                
                <button className="w-full flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-primary-50 hover:border-primary-200 transition-all duration-200">
                  <Icon name="Download" size={20} color="var(--color-primary)" />
                  <span className="font-medium">Download Itinerary</span>
                </button>
              </div>
            </div>

            {/* Social Sharing */}
            <SocialSharing bookingData={bookingData} />

            {/* Support */}
            <div className="bg-white rounded-lg shadow-brand p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-4">Need Help?</h3>
              <p className="text-text-secondary text-sm mb-4">
                Our 24/7 support team is here to help with any questions about your trip.
              </p>
              <Link
                to="/contact-support-hub"
                className="btn-outline w-full text-center"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingConfirmation;