import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

function Reviews() {
  const [activeTab, setActiveTab] = useState('written');
  const [showWriteReview, setShowWriteReview] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const writtenReviews = [
    {
      id: 1,
      property: "Jungle Treehouse Retreat",
      location: "Bali, Indonesia",
      rating: 5,
      date: "2024-01-25",
      review: `This treehouse was absolutely magical! Waking up to the sounds of the jungle and having breakfast on the deck surrounded by lush greenery was unforgettable. The infinity pool overlooking the valley was the perfect spot to unwind after exploring the local temples and rice terraces.

The host Made was incredibly welcoming and provided excellent recommendations for local restaurants and hidden waterfalls. The property was exactly as described - clean, comfortable, and truly unique. The yoga deck became my favorite morning ritual spot.

I would definitely return and highly recommend this to anyone looking for a peaceful escape in nature.`,
      images: [
        "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=200&h=150&fit=crop",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=200&h=150&fit=crop"
      ],
      helpful: 12,
      hostResponse: "Thank you Sarah for the wonderful review! It was a pleasure hosting you and I\'m so glad you enjoyed the treehouse experience. You\'re welcome back anytime! 🌿",
      verified: true
    },
    {
      id: 2,
      property: "Vineyard Villa with Wine Tasting",
      location: "Tuscany, Italy",
      rating: 5,
      date: "2023-09-20",
      review: `Giuseppe's villa exceeded all expectations! The wine tasting sessions were educational and delicious, and the cooking classes with his wife were the highlight of our trip. The villa itself is beautifully maintained with stunning views of the vineyard.

The location is perfect for exploring the Tuscan countryside, and Giuseppe provided excellent recommendations for local attractions and restaurants. The property has everything you need for a relaxing vacation.`,
      images: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=200&h=150&fit=crop"
      ],
      helpful: 8,
      hostResponse: "Grazie mille Sarah! It was wonderful having you and your family stay with us. We\'re so happy you enjoyed the wine tastings and cooking classes. Arrivederci!",
      verified: true
    },
    {
      id: 3,
      property: "Traditional Riad with Rooftop Terrace",
      location: "Marrakech, Morocco",
      rating: 5,
      date: "2023-05-18",
      review: `Fatima's riad is a hidden gem in the heart of Marrakech! The traditional architecture and beautiful tilework create such an authentic atmosphere. The rooftop terrace with views of the medina was perfect for evening relaxation.

The hammam experience was incredibly relaxing, and Fatima's recommendations for navigating the souks were invaluable. The location is ideal - close enough to explore easily but quiet enough for peaceful rest.`,
      images: [],
      helpful: 15,
      hostResponse: null,
      verified: true
    }
  ];

  const pendingReviews = [
    {
      id: 4,
      property: "Northern Lights Glass Igloo",
      location: "Reykjavik, Iceland",
      checkOut: "2023-11-25",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=150&fit=crop",
      daysAgo: 45
    }
  ];

  const renderStars = (rating, interactive = false, onRatingChange = null) => {
    return Array.from({ length: 5 }, (_, index) => (
      <button
        key={index}
        onClick={() => interactive && onRatingChange && onRatingChange(index + 1)}
        className={interactive ? "hover:scale-110 transition-transform duration-200" : ""}
        disabled={!interactive}
      >
        <Icon
          name="Star"
          size={interactive ? 24 : 16}
          color={index < rating ? "var(--color-secondary)" : "var(--color-border)"}
          strokeWidth={index < rating ? 0 : 2}
          className={index < rating ? "fill-current" : ""}
        />
      </button>
    ));
  };

  const WriteReviewModal = ({ property, onClose }) => {
    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState('');
    const [photos, setPhotos] = useState([]);

    const handleSubmit = () => {
      // In a real app, this would submit the review
      onClose();
    };

    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-text-primary">Write a Review</h3>
            <button
              onClick={onClose}
              className="text-text-secondary hover:text-text-primary"
            >
              <Icon name="X" size={24} strokeWidth={2} />
            </button>
          </div>

          <div className="space-y-6">
            {/* Property Info */}
            <div className="flex items-center space-x-4 p-4 bg-surface rounded-lg">
              <Image
                src={property.image}
                alt={property.property}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <h4 className="font-semibold text-text-primary">{property.property}</h4>
                <p className="text-text-secondary text-sm">{property.location}</p>
                <p className="text-text-secondary text-xs">
                  Stayed {property.daysAgo} days ago
                </p>
              </div>
            </div>

            {/* Rating */}
            <div>
              <label className="block text-sm font-medium text-text-primary mb-3">
                Overall Rating
              </label>
              <div className="flex items-center space-x-2">
                {renderStars(rating, true, setRating)}
                <span className="text-sm text-text-secondary ml-2">
                  {rating > 0 && `${rating} star${rating !== 1 ? 's' : ''}`}
                </span>
              </div>
            </div>

            {/* Review Text */}
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Your Review
              </label>
              <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Share your experience with future travelers..."
                rows={6}
                className="input-field resize-none"
              />
              <p className="text-xs text-text-secondary mt-1">
                {reviewText.length}/1000 characters
              </p>
            </div>

            {/* Photo Upload */}
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Add Photos (Optional)
              </label>
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                <Icon name="Camera" size={32} color="var(--color-text-secondary)" strokeWidth={1.5} className="mx-auto mb-2" />
                <p className="text-text-secondary text-sm">
                  Drag photos here or click to upload
                </p>
                <button className="btn-outline text-sm mt-2">
                  Choose Photos
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-3 pt-4 border-t border-border">
              <button
                onClick={handleSubmit}
                disabled={rating === 0 || reviewText.trim().length === 0}
                className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit Review
              </button>
              <button
                onClick={onClose}
                className="btn-outline flex-1"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-text-primary">Reviews</h2>
          <p className="text-text-secondary mt-1">Share your experiences and help other travelers</p>
        </div>
      </div>

      {/* Review Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="card text-center">
          <div className="text-2xl font-bold text-primary">{writtenReviews.length}</div>
          <div className="text-sm text-text-secondary">Reviews Written</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-secondary">
            {(writtenReviews.reduce((sum, review) => sum + review.rating, 0) / writtenReviews.length).toFixed(1)}
          </div>
          <div className="text-sm text-text-secondary">Average Rating Given</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-success">
            {writtenReviews.reduce((sum, review) => sum + review.helpful, 0)}
          </div>
          <div className="text-sm text-text-secondary">Helpful Votes Received</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-border">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('written')}
            className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
              activeTab === 'written' ?'border-primary text-primary' :'border-transparent text-text-secondary hover:text-primary hover:border-primary-200'
            }`}
          >
            Written Reviews ({writtenReviews.length})
          </button>
          <button
            onClick={() => setActiveTab('pending')}
            className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
              activeTab === 'pending' ?'border-primary text-primary' :'border-transparent text-text-secondary hover:text-primary hover:border-primary-200'
            }`}
          >
            Pending Reviews ({pendingReviews.length})
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === 'written' && (
        <div className="space-y-6">
          {writtenReviews.map((review) => (
            <div key={review.id} className="card">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-text-primary">{review.property}</h3>
                  <p className="text-text-secondary text-sm flex items-center space-x-1">
                    <Icon name="MapPin" size={14} strokeWidth={2} />
                    <span>{review.location}</span>
                  </p>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-1 mb-1">
                    {renderStars(review.rating)}
                  </div>
                  <p className="text-text-secondary text-sm">
                    {new Date(review.date).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="prose prose-sm max-w-none text-text-primary mb-4">
                <p>{review.review}</p>
              </div>

              {review.images.length > 0 && (
                <div className="flex space-x-3 mb-4">
                  {review.images.map((image, index) => (
                    <div key={index} className="w-24 h-18 rounded-lg overflow-hidden">
                      <Image
                        src={image}
                        alt={`Review photo ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center space-x-4 text-sm text-text-secondary">
                  <span className="flex items-center space-x-1">
                    <Icon name="ThumbsUp" size={14} strokeWidth={2} />
                    <span>{review.helpful} helpful</span>
                  </span>
                  {review.verified && (
                    <span className="flex items-center space-x-1 text-success">
                      <Icon name="CheckCircle" size={14} strokeWidth={2} />
                      <span>Verified stay</span>
                    </span>
                  )}
                </div>
                <button className="btn-outline text-sm px-4 py-2">
                  Edit Review
                </button>
              </div>

              {review.hostResponse && (
                <div className="mt-4 p-4 bg-surface rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="MessageCircle" size={16} color="var(--color-primary)" strokeWidth={2} />
                    <span className="text-sm font-medium text-primary">Host Response</span>
                  </div>
                  <p className="text-sm text-text-primary">{review.hostResponse}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {activeTab === 'pending' && (
        <div className="space-y-4">
          {pendingReviews.length > 0 ? (
            pendingReviews.map((property) => (
              <div key={property.id} className="card">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-16 rounded-lg overflow-hidden">
                    <Image
                      src={property.image}
                      alt={property.property}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-text-primary">{property.property}</h3>
                    <p className="text-text-secondary text-sm flex items-center space-x-1">
                      <Icon name="MapPin" size={14} strokeWidth={2} />
                      <span>{property.location}</span>
                    </p>
                    <p className="text-text-secondary text-sm">
                      Checked out {property.daysAgo} days ago
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedProperty(property);
                      setShowWriteReview(true);
                    }}
                    className="btn-primary flex items-center space-x-2"
                  >
                    <Icon name="Star" size={16} strokeWidth={2} />
                    <span>Write Review</span>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="card text-center py-12">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Star" size={32} color="var(--color-primary)" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">No pending reviews</h3>
              <p className="text-text-secondary">All caught up! Your reviews help other travelers make great choices.</p>
            </div>
          )}
        </div>
      )}

      {/* Write Review Modal */}
      {showWriteReview && selectedProperty && (
        <WriteReviewModal
          property={selectedProperty}
          onClose={() => {
            setShowWriteReview(false);
            setSelectedProperty(null);
          }}
        />
      )}
    </div>
  );
}

export default Reviews;