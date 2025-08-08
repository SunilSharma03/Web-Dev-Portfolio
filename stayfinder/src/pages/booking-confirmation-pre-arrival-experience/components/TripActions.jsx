import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

function TripActions({ bookingData }) {
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showModifyModal, setShowModifyModal] = useState(false);
  const [selectedAction, setSelectedAction] = useState(null);

  const actionCategories = [
    {
      title: 'Booking Management',
      actions: [
        {
          id: 'modify-dates',
          title: 'Modify Dates',
          description: 'Change your check-in or check-out dates',
          icon: 'Calendar',
          color: 'primary',
          available: true,
          onClick: () => setShowModifyModal(true)
        },
        {
          id: 'add-guests',
          title: 'Add Guests',
          description: 'Update guest count (subject to property limits)',
          icon: 'UserPlus',
          color: 'primary',
          available: true,
          onClick: () => alert('Guest modification feature coming soon!')
        },
        {
          id: 'cancel-booking',
          title: 'Cancel Booking',
          description: 'Cancel your reservation (cancellation policy applies)',
          icon: 'XCircle',
          color: 'error',
          available: true,
          onClick: () => setShowCancelModal(true)
        }
      ]
    },
    {
      title: 'Trip Planning',
      actions: [
        {
          id: 'add-calendar',
          title: 'Add to Calendar',
          description: 'Export trip details to your calendar app',
          icon: 'CalendarPlus',
          color: 'secondary',
          available: true,
          onClick: () => {
            // Mock calendar export
            const event = {
              title: `Stay at ${bookingData.property.name}`,
              start: bookingData.dates.checkIn,
              end: bookingData.dates.checkOut,
              location: bookingData.property.address
            };
            alert('Calendar event created! Check your default calendar app.');
          }
        },
        {
          id: 'share-itinerary',
          title: 'Share Itinerary',
          description: 'Share trip details with family and friends',
          icon: 'Share2',
          color: 'secondary',
          available: true,
          onClick: () => {
            if (navigator.share) {
              navigator.share({
                title: `My trip to ${bookingData.property.name}`,
                text: `I'm staying at ${bookingData.property.name} in ${bookingData.property.location}`,
                url: window.location.href
              });
            } else {
              navigator.clipboard.writeText(window.location.href);
              alert('Trip link copied to clipboard!');
            }
          }
        },
        {
          id: 'download-itinerary',title: 'Download Itinerary',description: 'Get a PDF copy of your complete trip details',icon: 'Download',color: 'secondary',
          available: true,
          onClick: () => alert('PDF download will start shortly!')
        }
      ]
    },
    {
      title: 'Communication',
      actions: [
        {
          id: 'message-host',title: 'Message Host',description: 'Send a message to your host',icon: 'MessageSquare',color: 'accent',
          available: true,
          onClick: () => alert('Messaging feature will open shortly!')
        },
        {
          id: 'call-host',title: 'Call Host',description: 'Speak directly with your host',icon: 'Phone',color: 'accent',
          available: true,
          onClick: () => window.open(`tel:${bookingData.host.phone}`)
        },
        {
          id: 'emergency-contact',title: 'Emergency Support',description: '24/7 StayFinder customer support',icon: 'Shield',color: 'error',
          available: true,
          onClick: () => alert('Connecting to emergency support...')
        }
      ]
    },
    {
      title: 'Services & Add-ons',
      actions: [
        {
          id: 'airport-transfer',title: 'Airport Transfer',description: 'Book transportation to/from airport',icon: 'Car',color: 'success',
          available: true,
          onClick: () => alert('Transfer booking will open shortly!')
        },
        {
          id: 'grocery-delivery',title: 'Grocery Delivery',description: 'Pre-stock your accommodation with essentials',icon: 'ShoppingCart',color: 'success',
          available: true,
          onClick: () => alert('Grocery service will open shortly!')
        },
        {
          id: 'concierge-service',title: 'Concierge Service',description: 'Personal assistance with bookings and recommendations',icon: 'Crown',color: 'warning',
          available: false,
          onClick: () => alert('Premium feature - upgrade your account!')
        }
      ]
    }
  ];

  const handleModifyBooking = (modificationType) => {
    setSelectedAction(modificationType);
    setShowModifyModal(false);
    alert(`${modificationType} modification request submitted. You'll receive confirmation shortly.`);
  };

  const handleCancelBooking = (reason) => {
    setShowCancelModal(false);
    alert(`Cancellation request submitted. Reason: ${reason}. You'll receive confirmation and refund details via email.`);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-text-primary mb-2">Manage Your Trip</h2>
        <p className="text-text-secondary">
          Everything you need to modify, enhance, or get support for your booking
        </p>
      </div>

      {/* Action Categories */}
      {actionCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="space-y-4">
          <h3 className="text-lg font-medium text-text-primary">{category.title}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.actions.map((action) => (
              <button
                key={action.id}
                onClick={action.onClick}
                disabled={!action.available}
                className={`p-4 rounded-lg border text-left transition-all duration-200 ${
                  action.available
                    ? `border-border hover:border-${action.color}-200 hover:bg-${action.color}-50 cursor-pointer`
                    : 'border-border bg-gray-50 cursor-not-allowed opacity-60'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    action.available
                      ? `bg-${action.color}-100`
                      : 'bg-gray-200'
                  }`}>
                    <Icon 
                      name={action.icon} 
                      size={20} 
                      color={action.available ? `var(--color-${action.color})` : 'var(--color-text-secondary)'} 
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-text-primary mb-1">
                      {action.title}
                      {!action.available && (
                        <span className="ml-2 text-xs bg-warning-100 text-warning-700 px-2 py-0.5 rounded-full">
                          Premium
                        </span>
                      )}
                    </h4>
                    <p className="text-sm text-text-secondary line-clamp-2">
                      {action.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      ))}

      {/* Important Information */}
      <div className="bg-warning-50 border border-warning-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Icon name="AlertTriangle" size={20} color="var(--color-warning-600)" className="flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-medium text-warning-800 mb-2">Important Booking Information</h3>
            <div className="space-y-2 text-sm text-warning-700">
              <p>• Cancellation Policy: {bookingData.cancellationPolicy}</p>
              <p>• Modification requests are subject to availability and may incur additional fees</p>
              <p>• For urgent matters, contact your host directly or use emergency support</p>
              <p>• All changes must be confirmed by both host and guest</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modify Booking Modal */}
      {showModifyModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-text-primary">Modify Booking</h3>
              <button
                onClick={() => setShowModifyModal(false)}
                className="text-text-secondary hover:text-text-primary"
              >
                <Icon name="X" size={20} />
              </button>
            </div>
            
            <p className="text-text-secondary mb-6">
              What would you like to modify about your booking?
            </p>
            
            <div className="space-y-3">
              <button
                onClick={() => handleModifyBooking('Date Change')}
                className="w-full p-3 text-left border border-border rounded-lg hover:bg-primary-50 hover:border-primary-200 transition-all duration-200"
              >
                <div className="font-medium text-text-primary">Change Dates</div>
                <div className="text-sm text-text-secondary">Modify check-in or check-out dates</div>
              </button>
              
              <button
                onClick={() => handleModifyBooking('Guest Count')}
                className="w-full p-3 text-left border border-border rounded-lg hover:bg-primary-50 hover:border-primary-200 transition-all duration-200"
              >
                <div className="font-medium text-text-primary">Change Guest Count</div>
                <div className="text-sm text-text-secondary">Add or remove guests</div>
              </button>
              
              <button
                onClick={() => handleModifyBooking('Special Requests')}
                className="w-full p-3 text-left border border-border rounded-lg hover:bg-primary-50 hover:border-primary-200 transition-all duration-200"
              >
                <div className="font-medium text-text-primary">Special Requests</div>
                <div className="text-sm text-text-secondary">Add special requirements or requests</div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cancel Booking Modal */}
      {showCancelModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-text-primary">Cancel Booking</h3>
              <button
                onClick={() => setShowCancelModal(false)}
                className="text-text-secondary hover:text-text-primary"
              >
                <Icon name="X" size={20} />
              </button>
            </div>
            
            <div className="mb-6">
              <p className="text-text-secondary mb-4">
                We're sorry to see you go. Could you tell us why you're canceling?
              </p>
              
              <div className="bg-error-50 border border-error-200 rounded-lg p-4 mb-4">
                <div className="flex items-start space-x-2">
                  <Icon name="AlertCircle" size={16} color="var(--color-error-600)" className="flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-error-700">
                    <p className="font-medium mb-1">Cancellation Policy</p>
                    <p>{bookingData.cancellationPolicy}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <button
                onClick={() => handleCancelBooking('Change of plans')}
                className="w-full p-3 text-left border border-border rounded-lg hover:bg-error-50 hover:border-error-200 transition-all duration-200"
              >
                Change of plans
              </button>
              
              <button
                onClick={() => handleCancelBooking('Found better option')}
                className="w-full p-3 text-left border border-border rounded-lg hover:bg-error-50 hover:border-error-200 transition-all duration-200"
              >
                Found a better option
              </button>
              
              <button
                onClick={() => handleCancelBooking('Emergency situation')}
                className="w-full p-3 text-left border border-border rounded-lg hover:bg-error-50 hover:border-error-200 transition-all duration-200"
              >
                Emergency situation
              </button>
              
              <button
                onClick={() => handleCancelBooking('Other reason')}
                className="w-full p-3 text-left border border-border rounded-lg hover:bg-error-50 hover:border-error-200 transition-all duration-200"
              >
                Other reason
              </button>
            </div>
            
            <div className="flex space-x-3 mt-6">
              <button
                onClick={() => setShowCancelModal(false)}
                className="flex-1 btn-outline"
              >
                Keep Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TripActions;