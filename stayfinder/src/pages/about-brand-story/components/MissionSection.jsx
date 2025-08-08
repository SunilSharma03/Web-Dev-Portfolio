import React from 'react';
import Icon from '../../../components/AppIcon';

function MissionSection() {
  const foundingStory = `In 2019, our founders experienced the frustration of endless scrolling through generic accommodation listings that told them nothing about the actual experience of staying there. After booking what seemed like a perfect beachfront villa only to discover it was next to a construction site, they realized the travel industry needed a fundamental shift from quantity to quality, from booking to belonging.

The insight was simple yet profound: where you stay doesn't just provide shelter—it shapes your entire travel experience. A thoughtfully chosen accommodation becomes the lens through which you experience a destination, connecting you with local culture, hidden gems, and authentic moments that transform a trip into a story worth telling.

StayFinder was born from this realization, with a mission to bridge the gap between wanderlust and belonging. We believe every traveler deserves to find their perfect temporary home, whether it's a minimalist loft in Tokyo that connects them with the city's design culture, a family-run riad in Marrakech that offers authentic Moroccan hospitality, or a sustainable treehouse in Costa Rica that deepens their connection with nature.`;

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
            Our Founding Story
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Born from the belief that where you stay defines how you experience a destination
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none text-text-secondary leading-relaxed">
              <p className="mb-6">{foundingStory}</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-primary-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Icon name="Target" size={24} color="white" strokeWidth={2} />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Our Mission</h3>
              <p className="text-text-secondary">
                Transform accommodation discovery from commodity booking to curated experience matching
              </p>
            </div>
            
            <div className="bg-secondary-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <Icon name="Eye" size={24} color="white" strokeWidth={2} />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Our Vision</h3>
              <p className="text-text-secondary">
                A world where every traveler finds their perfect temporary home, creating meaningful connections with destinations
              </p>
            </div>
            
            <div className="bg-accent-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <Icon name="Heart" size={24} color="white" strokeWidth={2} />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Our Purpose</h3>
              <p className="text-text-secondary">
                Bridge the gap between wanderlust and belonging through intelligent curation and community insights
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionSection;