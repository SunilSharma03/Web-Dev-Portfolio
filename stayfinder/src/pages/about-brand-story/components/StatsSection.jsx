import React from 'react';
import Icon from '../../../components/AppIcon';

function StatsSection() {
  const stats = [
    {
      icon: "Users",
      number: "50,000+",
      label: "Happy Travelers",
      description: "Verified guests who\'ve found their perfect stays through our platform",
      color: "primary"
    },
    {
      icon: "Home",
      number: "10,000+",
      label: "Curated Properties",
      description: "Hand-selected accommodations across 150+ destinations worldwide",
      color: "secondary"
    },
    {
      icon: "Globe",
      number: "150+",
      label: "Destinations",
      description: "Cities and regions where travelers can discover unique stays",
      color: "accent"
    },
    {
      icon: "Star",
      number: "4.9/5",
      label: "Average Rating",
      description: "Consistently high satisfaction scores from our traveler community",
      color: "success"
    },
    {
      icon: "TrendingUp",
      number: "300%",
      label: "Year-over-Year Growth",
      description: "Rapid expansion driven by word-of-mouth recommendations",
      color: "warning"
    },
    {
      icon: "Award",
      number: "15+",
      label: "Industry Awards",
      description: "Recognition for innovation in travel technology and user experience",
      color: "primary"
    }
  ];

  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      description: "StayFinder launched with a vision to transform accommodation discovery"
    },
    {
      year: "2020",
      title: "First 1,000 Properties",
      description: "Reached our initial milestone of curated accommodations across 25 cities"
    },
    {
      year: "2021",
      title: "Series A Funding",
      description: "Raised $12M to expand our curation team and enhance platform technology"
    },
    {
      year: "2022",
      title: "AI Matching Launch",
      description: "Introduced intelligent recommendation system, improving match accuracy by 87%"
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Expanded to 150+ destinations with 10,000+ curated properties"
    },
    {
      year: "2024",
      title: "Community Milestone",
      description: "Welcomed our 50,000th traveler and achieved 4.9/5 average rating"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      primary: "from-primary to-primary-600",
      secondary: "from-secondary to-secondary-600",
      accent: "from-accent to-accent-600",
      success: "from-success to-success-600",
      warning: "from-warning to-warning-600"
    };
    return colorMap[color] || colorMap.primary;
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Platform growth, traveler satisfaction, and industry recognition that demonstrate our market traction
          </p>
        </div>
        
        {/* Statistics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={`w-16 h-16 bg-gradient-to-br ${getColorClasses(stat.color)} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={stat.icon} size={28} color="white" strokeWidth={2} />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-text-primary mb-2">
                {stat.number}
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {stat.label}
              </h3>
              <p className="text-text-secondary text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Timeline */}
        <div className="bg-surface p-8 lg:p-12 rounded-2xl">
          <h3 className="text-2xl lg:text-3xl font-bold text-text-primary text-center mb-12">
            Our Journey So Far
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 hidden lg:block"></div>
            
            <div className="space-y-8 lg:space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start space-x-6">
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-brand-lg">
                    {milestone.year.slice(-2)}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="bg-white p-6 rounded-xl shadow-brand hover:shadow-brand-lg transition-all duration-300">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="text-sm font-semibold text-primary bg-primary-50 px-3 py-1 rounded-full">
                          {milestone.year}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-text-primary mb-2">
                        {milestone.title}
                      </h4>
                      <p className="text-text-secondary">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Be Part of Our Story</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Join thousands of travelers who've discovered their perfect stays and help us continue 
              transforming how people experience destinations around the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300">
                Start Exploring
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300">
                List Your Property
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;