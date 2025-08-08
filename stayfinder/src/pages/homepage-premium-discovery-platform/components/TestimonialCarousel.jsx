import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

function TestimonialCarousel() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      location: "San Francisco, CA",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      propertyImage: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      propertyName: "Cliffside Retreat, Big Sur",
      rating: 5,
      story: `StayFinder didn't just find me a place to sleep – they found me my perfect match. The AI recommendations were spot-on, suggesting this incredible cliffside cabin that I never would have discovered on traditional booking sites.
      
      The local insights from the community helped me plan the most amazing weekend, from hidden hiking trails to the best sunset viewing spots. This wasn't just accommodation; it was a transformative experience.`,
      stayDuration: "3 nights",
      travelType: "Solo Retreat",
      highlight: "Perfect match algorithm"
    },
    {
      id: 2,
      name: "Marcus & Jennifer Williams",
      location: "Austin, TX",
      avatar: "https://randomuser.me/api/portraits/men/35.jpg",
      propertyImage: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400&q=80",
      propertyName: "Historic Brownstone, Brooklyn",
      rating: 5,
      story: `As parents traveling with two kids, finding the right place is always stressful. StayFinder's family-focused matching considered everything – from child-safe spaces to nearby playgrounds and family restaurants.The host was incredible, and the community reviews from other families gave us confidence. Our kids are still talking about the garden where they played every morning. We've found our go-to platform for family travel.`,
      stayDuration: "5 nights",
      travelType: "Family Vacation",
      highlight: "Family-focused curation"
    },
    {
      id: 3,
      name: "David Park",
      location: "Seattle, WA",
      avatar: "https://randomuser.me/api/portraits/men/28.jpg",
      propertyImage: "https://images.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_1280.jpg?auto=compress&cs=tinysrgb&w=400&q=80",
      propertyName: "Designer Loft, Portland",
      rating: 5,
      story: `I'm a digital nomad who's stayed in hundreds of places worldwide. StayFinder's workspace-focused recommendations and community insights from other remote workers are game-changing.They matched me with a loft that had everything I needed – blazing fast WiFi, ergonomic workspace, great natural light, and a community of other creatives nearby. The local recommendations helped me discover the city's best coffee shops and co-working spaces.`,
      stayDuration: "2 weeks",
      travelType: "Remote Work",
      highlight: "Digital nomad community"
    },
    {
      id: 4,
      name: "Elena Rodriguez",
      location: "Miami, FL",
      avatar: "https://randomuser.me/api/portraits/women/31.jpg",
      propertyImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      propertyName: "Desert Dome, Joshua Tree",
      rating: 5,
      story: `I wanted something completely unique for my 30th birthday celebration. StayFinder's 'surprise me' feature led me to this incredible geodesic dome in the desert that I never knew existed.
      
      The experience was magical – stargazing from the deck, sunrise yoga, complete digital detox. The community had shared so many insider tips about hidden trails and the best spots for photography. It was exactly the transformative experience I was seeking.`,
      stayDuration: "4 nights",
      travelType: "Milestone Celebration",
      highlight: "Unique experience discovery"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentStory = testimonials[currentTestimonial];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Icon name="MessageCircle" size={24} className="text-primary mr-3" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Traveler Stories
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Perfect Match Stories
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Real travelers sharing how StayFinder helped them discover stays that transformed their journeys
          </p>
        </div>

        {/* Testimonial Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-brand flex items-center justify-center hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-1"
            aria-label="Previous testimonial"
          >
            <Icon name="ChevronLeft" size={20} className="text-text-primary" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-brand flex items-center justify-center hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-1"
            aria-label="Next testimonial"
          >
            <Icon name="ChevronRight" size={20} className="text-text-primary" />
          </button>

          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-brand-lg p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Story Content */}
              <div>
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(currentStory.rating)].map((_, index) => (
                    <Icon key={index} name="Star" size={20} className="text-secondary fill-current mr-1" />
                  ))}
                </div>

                {/* Story Text */}
                <blockquote className="text-text-primary text-lg leading-relaxed mb-6">
                  "{currentStory.story}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center mb-4">
                  <Image
                    src={currentStory.avatar}
                    alt={currentStory.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-text-primary">
                      {currentStory.name}
                    </div>
                    <div className="text-sm text-text-secondary flex items-center">
                      <Icon name="MapPin" size={14} className="mr-1" />
                      {currentStory.location}
                    </div>
                  </div>
                </div>

                {/* Trip Details */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-surface rounded-lg p-3">
                    <div className="text-text-secondary mb-1">Duration</div>
                    <div className="font-medium text-text-primary">{currentStory.stayDuration}</div>
                  </div>
                  <div className="bg-surface rounded-lg p-3">
                    <div className="text-text-secondary mb-1">Travel Type</div>
                    <div className="font-medium text-text-primary">{currentStory.travelType}</div>
                  </div>
                </div>

                {/* Highlight Badge */}
                <div className="mt-4">
                  <div className="inline-flex items-center bg-primary-50 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    <Icon name="Sparkles" size={14} className="mr-2" />
                    {currentStory.highlight}
                  </div>
                </div>
              </div>

              {/* Property Image */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-xl shadow-brand">
                  <Image
                    src={currentStory.propertyImage}
                    alt={currentStory.propertyName}
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white font-semibold text-lg mb-1">
                      {currentStory.propertyName}
                    </h4>
                    <div className="flex items-center text-white/80 text-sm">
                      <Icon name="Camera" size={14} className="mr-2" />
                      Traveler Photo
                    </div>
                  </div>
                </div>

                {/* Floating Quote Icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-brand">
                  <Icon name="Quote" size={20} color="white" />
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-primary scale-125' :'bg-border hover:bg-primary-200'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Social Proof Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
          {[
            { number: '50K+', label: 'Happy Travelers', icon: 'Users' },
            { number: '4.9/5', label: 'Average Rating', icon: 'Star' },
            { number: '15K+', label: 'Unique Properties', icon: 'Home' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-brand">
                <Icon name={stat.icon} size={24} className="text-primary" />
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-text-secondary">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialCarousel;