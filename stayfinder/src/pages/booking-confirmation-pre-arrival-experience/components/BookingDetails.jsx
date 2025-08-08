import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

function BookingDetails({ bookingData }) {
  const [showFullInstructions, setShowFullInstructions] = useState(false);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-8">
      {/* Property Information */}
      <div>
        <h2 className="text-2xl font-semibold text-text-primary mb-6">Your Stay Details</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-text-primary mb-2">{bookingData.property.name}</h3>
              <p className="text-text-secondary flex items-center">
                <Icon name="MapPin" size={16} className="mr-2" />
                {bookingData.property.address}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {bookingData.property.amenities.map((amenity, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium"
                >
                  {amenity}
                </span>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            {bookingData.property.images.slice(0, 3).map((image, index) => (
              <div key={index} className="aspect-square rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={`${bookingData.property.name} ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Summary */}
      <div className="bg-surface rounded-lg p-6">
        <h3 className="text-lg font-medium text-text-primary mb-4">Booking Summary</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="text-center p-4 bg-white rounded-lg border border-border">
            <Icon name="Calendar" size={24} color="var(--color-primary)" className="mx-auto mb-2" />
            <p className="text-sm text-text-secondary mb-1">Check-in</p>
            <p className="font-semibold">{formatDate(bookingData.dates.checkIn)}</p>
            <p className="text-sm text-text-secondary">After 3:00 PM</p>
          </div>
          
          <div className="text-center p-4 bg-white rounded-lg border border-border">
            <Icon name="Calendar" size={24} color="var(--color-primary)" className="mx-auto mb-2" />
            <p className="text-sm text-text-secondary mb-1">Check-out</p>
            <p className="font-semibold">{formatDate(bookingData.dates.checkOut)}</p>
            <p className="text-sm text-text-secondary">Before 11:00 AM</p>
          </div>
          
          <div className="text-center p-4 bg-white rounded-lg border border-border">
            <Icon name="Users" size={24} color="var(--color-primary)" className="mx-auto mb-2" />
            <p className="text-sm text-text-secondary mb-1">Guests</p>
            <p className="font-semibold">{bookingData.guests.adults} Adults</p>
            {bookingData.guests.children > 0 && (
              <p className="text-sm text-text-secondary">{bookingData.guests.children} Children</p>
            )}
          </div>
        </div>

        {/* Pricing Breakdown */}
        <div className="border-t border-border pt-4">
          <h4 className="font-medium text-text-primary mb-3">Price Breakdown</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-text-secondary">${bookingData.pricing.basePrice / bookingData.dates.nights} × {bookingData.dates.nights} nights</span>
              <span>${bookingData.pricing.basePrice}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">Cleaning fee</span>
              <span>${bookingData.pricing.cleaningFee}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">Service fee</span>
              <span>${bookingData.pricing.serviceFee}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">Taxes</span>
              <span>${bookingData.pricing.taxes}</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-border font-semibold">
              <span>Total</span>
              <span>${bookingData.pricing.total}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Host Information */}
      <div className="bg-surface rounded-lg p-6">
        <h3 className="text-lg font-medium text-text-primary mb-4">Your Host</h3>
        
        <div className="flex items-start space-x-4">
          <Image
            src={bookingData.host.avatar}
            alt={bookingData.host.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          
          <div className="flex-1">
            <h4 className="font-semibold text-text-primary mb-2">{bookingData.host.name}</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-text-secondary">Response rate</p>
                <p className="font-medium">{bookingData.host.responseRate}</p>
              </div>
              <div>
                <p className="text-text-secondary">Response time</p>
                <p className="font-medium">{bookingData.host.responseTime}</p>
              </div>
            </div>
            
            <div className="flex space-x-4 mt-4">
              <a
                href={`tel:${bookingData.host.phone}`}
                className="flex items-center space-x-2 text-primary hover:text-primary-600 transition-colors duration-200"
              >
                <Icon name="Phone" size={16} />
                <span className="text-sm font-medium">Call</span>
              </a>
              <a
                href={`mailto:${bookingData.host.email}`}
                className="flex items-center space-x-2 text-primary hover:text-primary-600 transition-colors duration-200"
              >
                <Icon name="Mail" size={16} />
                <span className="text-sm font-medium">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Check-in Instructions */}
      <div className="bg-surface rounded-lg p-6">
        <h3 className="text-lg font-medium text-text-primary mb-4">Check-in Instructions</h3>
        
        <div className="bg-white rounded-lg p-4 border border-border">
          <div className={`${showFullInstructions ? '' : 'line-clamp-4'} whitespace-pre-line text-text-secondary mb-4`}>
            {bookingData.checkInInstructions}
          </div>
          
          <button
            onClick={() => setShowFullInstructions(!showFullInstructions)}
            className="text-primary hover:text-primary-600 font-medium text-sm transition-colors duration-200"
          >
            {showFullInstructions ? 'Show Less' : 'Show Full Instructions'}
          </button>
        </div>
      </div>

      {/* Cancellation Policy */}
      <div className="bg-surface rounded-lg p-6">
        <h3 className="text-lg font-medium text-text-primary mb-4">Cancellation Policy</h3>
        <div className="bg-white rounded-lg p-4 border border-border">
          <p className="text-text-secondary">{bookingData.cancellationPolicy}</p>
        </div>
      </div>

      {/* Map */}
      <div className="bg-surface rounded-lg p-6">
        <h3 className="text-lg font-medium text-text-primary mb-4">Location</h3>
        <div className="bg-white rounded-lg overflow-hidden border border-border">
          <div className="h-64">
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              title={bookingData.property.name}
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${bookingData.property.coordinates.lat},${bookingData.property.coordinates.lng}&z=14&output=embed`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingDetails;