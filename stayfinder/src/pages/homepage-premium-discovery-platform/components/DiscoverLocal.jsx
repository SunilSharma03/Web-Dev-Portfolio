import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

function DiscoverLocal() {
  const destinationGuides = [
    {
      id: 1,
      city: "Portland, Oregon",
      image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      insiderTips: 12,
      localExpert: "Maya Chen",
      expertImage: "https://randomuser.me/api/portraits/women/25.jpg",
      highlights: ["Food Cart Culture", "Craft Beer Scene", "Urban Hiking"],
      description: "Discover Portland\'s quirky neighborhoods, from the artisan markets of Hawthorne to the trendy galleries of the Pearl District.",
      readTime: "8 min read"
    },
    {
      id: 2,
      city: "Savannah, Georgia",
      image: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=600&q=80",
      insiderTips: 15,
      localExpert: "James Morrison",
      expertImage: "https://randomuser.me/api/portraits/men/42.jpg",
      highlights: ["Historic Squares", "Ghost Tours", "Southern Cuisine"],
      description: "Navigate Savannah\'s cobblestone streets and hidden courtyards with insights from locals who know every secret garden.",
      readTime: "10 min read"
    },
    {
      id: 3,
      city: "Sedona, Arizona",
      image: "https://images.pixabay.com/photo/2017/08/07/19/45/landscape-2604709_1280.jpg?auto=compress&cs=tinysrgb&w=600&q=80",
      insiderTips: 18,
      localExpert: "Sofia Rodriguez",
      expertImage: "https://randomuser.me/api/portraits/women/36.jpg",
      highlights: ["Vortex Sites", "Sunrise Hikes", "Wellness Retreats"],
      description: "Experience Sedona\'s mystical energy through the eyes of locals who understand the spiritual significance of each red rock formation.",
      readTime: "12 min read"
    },
    {
      id: 4,
      city: "Burlington, Vermont",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      insiderTips: 9,
      localExpert: "Alex Thompson",
      expertImage: "https://randomuser.me/api/portraits/men/29.jpg",
      highlights: ["Farm-to-Table", "Lake Champlain", "Craft Breweries"],
      description: "Explore Vermont\'s farm-to-table culture and outdoor adventures with guidance from locals who live the mountain lifestyle.",
      readTime: "6 min read"
    }
  ];

  const localInsights = [
    {
      icon: "MapPin",
      title: "Hidden Gems",
      description: "Discover secret spots that only locals know about"
    },
    {
      icon: "Clock",
      title: "Perfect Timing",
      description: "Learn when to visit attractions to avoid crowds"
    },
    {
      icon: "Utensils",
      title: "Local Flavors",
      description: "Find authentic restaurants away from tourist traps"
    },
    {
      icon: "Calendar",
      title: "Seasonal Events",
      description: "Experience festivals and events like a local"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Icon name="Compass" size={24} className="text-accent mr-3" />
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Local Intelligence
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Discover Like a Local
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Go beyond tourist attractions with insider guides written by locals who know their cities inside and out
          </p>
        </div>

        {/* Local Insights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {localInsights.map((insight, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-brand">
                <Icon name={insight.icon} size={24} className="text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {insight.title}
              </h3>
              <p className="text-text-secondary text-sm">
                {insight.description}
              </p>
            </div>
          ))}
        </div>

        {/* Destination Guides */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {destinationGuides.map((guide) => (
            <Link
              key={guide.id}
              to="/search-results-intelligent-discovery"
              className="group card hover:shadow-brand-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-lg mb-4 h-48">
                <Image
                  src={guide.image}
                  alt={guide.city}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* City Name Overlay */}
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-xl font-bold mb-1">
                    {guide.city}
                  </h3>
                  <div className="flex items-center text-white/80 text-sm">
                    <Icon name="BookOpen" size={14} className="mr-2" />
                    {guide.readTime}
                  </div>
                </div>

                {/* Insider Tips Badge */}
                <div className="absolute top-3 right-3 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {guide.insiderTips} Tips
                </div>
              </div>

              {/* Content */}
              <div>
                {/* Local Expert */}
                <div className="flex items-center mb-3">
                  <Image
                    src={guide.expertImage}
                    alt={guide.localExpert}
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  <div>
                    <div className="text-sm font-medium text-text-primary">
                      {guide.localExpert}
                    </div>
                    <div className="text-xs text-text-secondary">Local Expert</div>
                  </div>
                  <div className="ml-auto">
                    <div className="bg-success-50 text-success px-2 py-1 rounded text-xs font-medium">
                      Verified Local
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                  {guide.description}
                </p>

                {/* Highlights */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {guide.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="text-xs bg-primary-50 text-primary px-2 py-1 rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Read More Link */}
                <div className="flex items-center justify-between">
                  <span className="text-primary font-medium text-sm group-hover:text-primary-600 transition-colors duration-200">
                    Read Full Guide
                  </span>
                  <Icon 
                    name="ArrowRight" 
                    size={16} 
                    className="text-primary group-hover:translate-x-1 transition-transform duration-200" 
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-accent-50 to-primary-50 rounded-2xl p-8 lg:p-12">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
                Become a Local Insider
              </h3>
              <p className="text-text-secondary mb-8 text-lg">
                Join our community of local experts and travelers sharing authentic experiences and hidden discoveries
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/about-brand-story"
                  className="btn-primary px-8 py-3"
                >
                  Join Our Community
                </Link>
                <Link
                  to="/search-results-intelligent-discovery"
                  className="btn-outline px-8 py-3"
                >
                  Explore All Guides
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DiscoverLocal;