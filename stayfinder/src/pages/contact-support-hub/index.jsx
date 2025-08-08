import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';

import ContactForm from './components/ContactForm';
import FAQSection from './components/FAQSection';
import SupportCategories from './components/SupportCategories';
import OfficeLocations from './components/OfficeLocations';
import EmergencySupport from './components/EmergencySupport';

function ContactSupportHub() {
  const [activeTab, setActiveTab] = useState('general');

  const supportStats = [
    { label: "Average Response Time", value: "< 2 hours", icon: "Clock" },
    { label: "Customer Satisfaction", value: "98.5%", icon: "Heart" },
    { label: "24/7 Emergency Support", value: "Available", icon: "Shield" },
    { label: "Languages Supported", value: "15+", icon: "Globe" }
  ];

  const quickActions = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: "MessageCircle",
      action: "Start Chat",
      available: true,
      color: "bg-primary"
    },
    {
      title: "Call Support",
      description: "Speak directly with a support specialist",
      icon: "Phone",
      action: "Call Now",
      available: true,
      color: "bg-secondary"
    },
    {
      title: "Video Call",
      description: "Screen sharing for technical issues",
      icon: "Video",
      action: "Schedule Call",
      available: false,
      color: "bg-accent"
    },
    {
      title: "Email Support",
      description: "Detailed assistance via email",
      icon: "Mail",
      action: "Send Email",
      available: true,
      color: "bg-success"
    }
  ];

  const socialChannels = [
    { name: "Twitter", handle: "@StayFinderHelp", icon: "Twitter", color: "text-blue-500" },
    { name: "Facebook", handle: "StayFinderSupport", icon: "Facebook", color: "text-blue-600" },
    { name: "Instagram", handle: "@stayfinder_help", icon: "Instagram", color: "text-pink-500" },
    { name: "LinkedIn", handle: "StayFinder", icon: "Linkedin", color: "text-blue-700" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-700 text-white pt-24 pb-16">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Icon name="HelpCircle" size={32} color="white" strokeWidth={2} />
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              How can we help you today?
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 font-light">
              Your dedicated support hub for all things StayFinder. We're here to make your journey seamless.
            </p>
            
            {/* Quick Search */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for help articles, FAQs, or contact options..."
                  className="w-full px-6 py-4 pl-14 rounded-xl text-text-primary bg-white shadow-brand-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-lg"
                />
                <Icon 
                  name="Search" 
                  size={24} 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Stats */}
      <section className="py-12 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {supportStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name={stat.icon} size={24} className="text-primary" />
                </div>
                <div className="text-2xl font-bold text-text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Get Help Instantly
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Choose the support method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <div key={index} className="card group cursor-pointer">
                <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={action.icon} size={24} color="white" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">{action.title}</h3>
                <p className="text-text-secondary mb-4">{action.description}</p>
                <button 
                  className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
                    action.available 
                      ? 'bg-primary-50 text-primary hover:bg-primary hover:text-white' :'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                  disabled={!action.available}
                >
                  {action.available ? action.action : 'Coming Soon'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <SupportCategories />

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Form */}
      <ContactForm />

      {/* Emergency Support */}
      <EmergencySupport />

      {/* Office Locations */}
      <OfficeLocations />

      {/* Social Media Support */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Connect With Us
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Follow us on social media for updates, tips, and community support
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {socialChannels.map((channel, index) => (
              <div key={index} className="card text-center group cursor-pointer">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={channel.icon} size={28} className={channel.color} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-1">{channel.name}</h3>
                <p className="text-text-secondary text-sm">{channel.handle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Self-Service Resources
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Find answers quickly with our comprehensive help resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center group cursor-pointer">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon name="BookOpen" size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-4">Help Center</h3>
              <p className="text-text-secondary mb-6">
                Comprehensive guides and tutorials for all StayFinder features
              </p>
              <Link to="/help-center" className="btn-outline">
                Browse Articles
              </Link>
            </div>

            <div className="card text-center group cursor-pointer">
              <div className="w-16 h-16 bg-secondary-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon name="Users" size={28} className="text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-4">Community Forum</h3>
              <p className="text-text-secondary mb-6">
                Connect with other travelers and hosts to share experiences
              </p>
              <Link to="/community" className="btn-outline">
                Join Discussion
              </Link>
            </div>

            <div className="card text-center group cursor-pointer">
              <div className="w-16 h-16 bg-accent-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon name="Play" size={28} className="text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-4">Video Tutorials</h3>
              <p className="text-text-secondary mb-6">
                Step-by-step video guides for booking and hosting
              </p>
              <Link to="/tutorials" className="btn-outline">
                Watch Videos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Still need help?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our support team is standing by to assist you with any questions or concerns
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200">
              Start Live Chat
            </button>
            <Link 
              to="/homepage-premium-discovery-platform" 
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-200"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactSupportHub;