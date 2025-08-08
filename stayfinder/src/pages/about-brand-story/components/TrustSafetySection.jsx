import React from 'react';
import Icon from '../../../components/AppIcon';

function TrustSafetySection() {
  const trustFeatures = [
    {
      icon: "ShieldCheck",
      title: "Verified Properties",
      description: "Every property undergoes a comprehensive verification process including identity confirmation, property inspection, and quality assessment before listing approval.",
      features: ["Photo verification", "Identity confirmation", "Property inspection", "Quality assessment"]
    },
    {
      icon: "CreditCard",
      title: "Secure Payments",
      description: "Bank-level encryption protects all transactions, with secure payment processing, fraud detection, and buyer protection for every booking.",
      features: ["256-bit SSL encryption", "PCI DSS compliance", "Fraud detection", "Chargeback protection"]
    },
    {
      icon: "Users",
      title: "Traveler Verification",
      description: "Multi-layer verification system ensures authentic community members through identity verification, review validation, and behavioral analysis.",
      features: ["Government ID verification", "Phone number confirmation", "Review authenticity checks", "Community reporting system"]
    },
    {
      icon: "Headphones",
      title: "24/7 Support",
      description: "Round-the-clock customer support with multilingual assistance, emergency response, and dedicated resolution specialists for any issues.",
      features: ["24/7 availability", "Multilingual support", "Emergency assistance", "Dedicated specialists"]
    },
    {
      icon: "Umbrella",
      title: "Travel Protection",
      description: "Comprehensive coverage including booking protection, trip interruption coverage, and property damage protection for peace of mind.",
      features: ["Booking guarantee", "Trip interruption coverage", "Property damage protection", "Medical emergency assistance"]
    },
    {
      icon: "FileText",
      title: "Transparent Policies",
      description: "Clear, fair policies with transparent pricing, flexible cancellation options, and detailed terms that protect both travelers and hosts.",
      features: ["No hidden fees", "Flexible cancellation", "Clear terms of service", "Fair dispute resolution"]
    }
  ];

  const certifications = [
    {
      name: "SOC 2 Type II",
      description: "Security, availability, and confidentiality compliance",
      icon: "Shield"
    },
    {
      name: "PCI DSS Level 1",
      description: "Highest level of payment card industry security",
      icon: "CreditCard"
    },
    {
      name: "GDPR Compliant",
      description: "European data protection regulation compliance",
      icon: "Lock"
    },
    {
      name: "ISO 27001",
      description: "International information security management",
      icon: "Award"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
            Trust & Safety
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Comprehensive protection and verification systems that support our premium positioning and ensure safe, secure experiences for all community members
          </p>
        </div>
        
        {/* Trust Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {trustFeatures.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-brand hover:shadow-brand-lg transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon name={feature.icon} size={28} color="white" strokeWidth={2} />
              </div>
              
              <h3 className="text-xl font-bold text-text-primary mb-4">
                {feature.title}
              </h3>
              
              <p className="text-text-secondary mb-6 leading-relaxed">
                {feature.description}
              </p>
              
              <ul className="space-y-2">
                {feature.features.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center space-x-2 text-sm">
                    <Icon name="Check" size={16} color="var(--color-success)" strokeWidth={2} />
                    <span className="text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Security Certifications */}
        <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-brand mb-16">
          <h3 className="text-2xl font-bold text-text-primary text-center mb-8">
            Security Certifications & Compliance
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center p-6 bg-surface rounded-xl hover:bg-primary-50 transition-colors duration-300">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name={cert.icon} size={24} color="var(--color-primary)" strokeWidth={2} />
                </div>
                <h4 className="font-bold text-text-primary mb-2">{cert.name}</h4>
                <p className="text-sm text-text-secondary">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Safety Statistics */}
        <div className="bg-gradient-to-r from-primary to-secondary p-8 lg:p-12 rounded-2xl text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Safety by the Numbers
            </h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Our commitment to safety and security is reflected in our track record and community trust
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold mb-2">99.8%</div>
              <div className="text-sm opacity-80">Incident-free stays</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold mb-2">&lt;2min</div>
              <div className="text-sm opacity-80">Average support response</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold mb-2">100%</div>
              <div className="text-sm opacity-80">Verified properties</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold mb-2">$2M+</div>
              <div className="text-sm opacity-80">Protected in bookings</div>
            </div>
          </div>
        </div>
        
        {/* Emergency Contact */}
        <div className="mt-16 bg-accent-50 p-8 rounded-2xl border border-accent-100">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon name="Phone" size={24} color="white" strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-text-primary mb-2">
                Emergency Support
              </h3>
              <p className="text-text-secondary mb-4">
                If you're experiencing an emergency during your stay, our 24/7 emergency support team is available to assist you immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} color="var(--color-accent)" />
                  <span className="font-semibold text-text-primary">+1-800-STAYFINDER</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MessageCircle" size={16} color="var(--color-accent)" />
                  <span className="font-semibold text-text-primary">24/7 Live Chat</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustSafetySection;