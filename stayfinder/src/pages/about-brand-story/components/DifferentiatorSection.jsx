import React from 'react';
import Icon from '../../../components/AppIcon';

function DifferentiatorSection() {
  const differentiators = [
    {
      icon: "Brain",
      title: "Intelligent Matching",
      traditional: "Generic search filters and endless scrolling through similar listings",
      stayfinder: "AI-powered recommendations based on travel style, preferences, and past experiences",
      improvement: "87% higher satisfaction with first booking"
    },
    {
      icon: "Users",
      title: "Community Insights",
      traditional: "Anonymous reviews with limited context and verification",
      stayfinder: "Verified traveler stories, detailed photo galleries, and neighborhood insights from locals",
      improvement: "3x more detailed property information"
    },
    {
      icon: "Sparkles",
      title: "Experience-Focused Curation",
      traditional: "Quantity-driven inventory with minimal quality control",
      stayfinder: "Hand-selected properties that offer unique character, exceptional hospitality, or authentic local experiences",
      improvement: "95% of properties rated 4.5+ stars"
    },
    {
      icon: "MapPin",
      title: "Destination Integration",
      traditional: "Basic location information and generic tourist recommendations",
      stayfinder: "Deep neighborhood guides, local event calendars, and cultural insights that enhance your stay",
      improvement: "60% longer average stay duration"
    },
    {
      icon: "Shield",
      title: "Trust & Transparency",
      traditional: "Hidden fees, unclear cancellation policies, and limited customer protection",
      stayfinder: "Transparent pricing, flexible policies, and comprehensive traveler protection with 24/7 support",
      improvement: "99.2% customer satisfaction rate"
    },
    {
      icon: "Heart",
      title: "Personal Connection",
      traditional: "Transactional booking process with minimal host-guest interaction",
      stayfinder: "Facilitated connections between travelers and hosts, with personalized recommendations and local insights",
      improvement: "78% of guests receive personal host recommendations"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
            How We're Different
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            While traditional booking sites focus on inventory and price, we prioritize experience and connection
          </p>
        </div>
        
        <div className="space-y-12">
          {differentiators.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-brand hover:shadow-brand-lg transition-all duration-300">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-3">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                      <Icon name={item.icon} size={24} color="white" strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-bold text-text-primary">{item.title}</h3>
                  </div>
                </div>
                
                <div className="lg:col-span-9">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                      <div className="flex items-center space-x-2 mb-3">
                        <Icon name="X" size={16} color="var(--color-error)" strokeWidth={2} />
                        <h4 className="font-semibold text-error">Traditional Booking Sites</h4>
                      </div>
                      <p className="text-text-secondary text-sm">{item.traditional}</p>
                    </div>
                    
                    <div className="bg-success-50 p-6 rounded-xl border border-success-100">
                      <div className="flex items-center space-x-2 mb-3">
                        <Icon name="Check" size={16} color="var(--color-success)" strokeWidth={2} />
                        <h4 className="font-semibold text-success">StayFinder Approach</h4>
                      </div>
                      <p className="text-text-secondary text-sm mb-3">{item.stayfinder}</p>
                      <div className="flex items-center space-x-2">
                        <Icon name="TrendingUp" size={14} color="var(--color-success)" strokeWidth={2} />
                        <span className="text-xs font-medium text-success">{item.improvement}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">The Result: Better Travel Experiences</h3>
          <p className="text-lg opacity-90 max-w-3xl mx-auto mb-6">
            Our approach doesn't just help you find a place to stay—it helps you discover accommodations 
            that enhance your entire travel experience and create lasting memories.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 p-4 rounded-xl">
              <div className="text-2xl font-bold mb-1">4.9/5</div>
              <div className="text-sm opacity-80">Average Rating</div>
            </div>
            <div className="bg-white/10 p-4 rounded-xl">
              <div className="text-2xl font-bold mb-1">92%</div>
              <div className="text-sm opacity-80">Rebook Rate</div>
            </div>
            <div className="bg-white/10 p-4 rounded-xl">
              <div className="text-2xl font-bold mb-1">24/7</div>
              <div className="text-sm opacity-80">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DifferentiatorSection;