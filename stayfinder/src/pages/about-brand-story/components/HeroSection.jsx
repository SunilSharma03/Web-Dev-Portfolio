import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

function HeroSection() {
  return (
    <section className="pt-20 lg:pt-28 pb-16 lg:pb-24 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <Icon name="MapPin" size={24} color="white" strokeWidth={2.5} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gradient">StayFinder</h1>
                <p className="text-sm text-text-secondary font-medium">Curated Discovery Platform</p>
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6 leading-tight">
              Where You Stay Defines How You 
              <span className="text-gradient"> Experience</span>
            </h2>
            
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              We're transforming accommodation discovery from commodity booking to curated experience matching. 
              StayFinder serves as the bridge between wanderlust and belonging, helping travelers find not just 
              accommodation, but their temporary home in any corner of the world.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <Icon name="Users" size={16} color="var(--color-primary)" />
                <span className="text-sm font-medium text-text-primary">50K+ Happy Travelers</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <Icon name="Home" size={16} color="var(--color-secondary)" />
                <span className="text-sm font-medium text-text-primary">10K+ Curated Properties</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <Icon name="Globe" size={16} color="var(--color-accent)" />
                <span className="text-sm font-medium text-text-primary">150+ Destinations</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-brand-xl">
                <Image
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Beautiful curated accommodation showcasing StayFinder's premium selection"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-brand-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-success-100 rounded-full flex items-center justify-center">
                    <Icon name="Star" size={20} color="var(--color-success)" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary">4.9/5 Rating</p>
                    <p className="text-sm text-text-secondary">From verified travelers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;