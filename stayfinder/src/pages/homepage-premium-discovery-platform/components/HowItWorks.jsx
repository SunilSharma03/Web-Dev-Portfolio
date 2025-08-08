import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      icon: 'Search',
      title: 'Intelligent Curation',
      description: `Our AI-powered system doesn't just show you available properties – it learns your preferences, travel style, and past choices to curate a personalized selection of stays that match your unique story.
      
      Every property is hand-vetted by our local experts who verify quality, authenticity, and the special details that make each stay memorable.`,
      features: ['AI-powered matching', 'Local expert verification', 'Quality assurance', 'Personalized recommendations'],
      color: 'primary'
    },
    {
      id: 2,
      icon: 'Heart',title: 'Smart Matching',
      description: `Beyond basic filters, our matching algorithm considers your travel intentions, group dynamics, seasonal preferences, and even your social media activity to suggest properties that align with your vision.
      
      We analyze thousands of data points to predict not just what you need, but what will make your stay extraordinary.`,
      features: ['Behavioral analysis', 'Intention-based matching', 'Group compatibility', 'Seasonal optimization'],
      color: 'secondary'
    },
    {
      id: 3,
      icon: 'Users',title: 'Community Insights',
      description: `Tap into the collective wisdom of our verified traveler community. Get insider tips, authentic reviews, and local recommendations from people who share your travel style and values.
      
      Our community-driven insights help you discover hidden gems and avoid tourist traps, ensuring every stay feels like a local secret.`,
      features: ['Verified traveler reviews', 'Local insider tips', 'Community recommendations', 'Authentic experiences'],
      color: 'accent'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Icon name="Sparkles" size={24} className="text-primary mr-3" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              How StayFinder Works
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Beyond Basic Booking
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            We've reimagined how you discover and book accommodations, moving beyond commodity listings to create meaningful connections between travelers and their perfect stays
          </p>
        </div>

        {/* Steps Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`relative group cursor-pointer transition-all duration-500 ${
                activeStep === index ? 'transform -translate-y-2' : ''
              }`}
              onClick={() => setActiveStep(index)}
            >
              {/* Animated Card */}
              <div className={`card-elevated transition-all duration-500 ${
                activeStep === index 
                  ? 'shadow-brand-xl border-2 border-primary-200' 
                  : 'hover:shadow-brand-lg'
              }`}>
                {/* Step Number & Icon */}
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mr-4 transition-all duration-300 ${
                    activeStep === index
                      ? step.color === 'primary' ? 'bg-primary text-white' :
                        step.color === 'secondary'? 'bg-secondary text-white' : 'bg-accent text-white' :'bg-surface text-text-secondary group-hover:bg-primary-50 group-hover:text-primary'
                  }`}>
                    <Icon name={step.icon} size={24} strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-text-secondary mb-1">
                      Step {step.id}
                    </div>
                    <h3 className="text-xl font-bold text-text-primary">
                      {step.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <p className="text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-2">
                  {step.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <div className={`w-2 h-2 rounded-full mr-3 transition-colors duration-300 ${
                        activeStep === index
                          ? step.color === 'primary' ? 'bg-primary' :
                            step.color === 'secondary'? 'bg-secondary' : 'bg-accent' :'bg-border'
                      }`} />
                      <span className="text-text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Active Indicator */}
                {activeStep === index && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-success rounded-full flex items-center justify-center animate-pulse-brand">
                    <Icon name="Check" size={14} color="white" strokeWidth={3} />
                  </div>
                )}
              </div>

              {/* Connection Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 -right-6 w-12 h-0.5 bg-border">
                  <div className={`h-full transition-all duration-500 ${
                    activeStep === index 
                      ? step.color === 'primary' ? 'bg-primary' :
                        step.color === 'secondary'? 'bg-secondary' : 'bg-accent' :'bg-border'
                  }`} style={{ width: activeStep >= index ? '100%' : '0%' }} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Progress Indicators (Mobile) */}
        <div className="flex justify-center mt-8 lg:hidden space-x-2">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeStep 
                  ? 'bg-primary scale-125' :'bg-border hover:bg-primary-200'
              }`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Join thousands of travelers who've discovered their perfect stays through our intelligent platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary px-8 py-3">
                Start Your Search
              </button>
              <button className="btn-outline px-8 py-3">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;