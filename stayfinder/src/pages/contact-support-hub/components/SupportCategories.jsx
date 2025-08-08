import React from 'react';

import Icon from '../../../components/AppIcon';

function SupportCategories() {
  const supportCategories = [
    {
      title: "Traveler Support",
      description: "Get help with bookings, payments, and your travel experience",
      icon: "MapPin",
      color: "bg-primary",
      features: [
        "Booking assistance and modifications",
        "Payment and billing support",
        "Property questions and concerns",
        "Travel disruption assistance"
      ],
      responseTime: "< 2 hours",
      availability: "24/7",
      contactMethods: ["Live Chat", "Phone", "Email"]
    },
    {
      title: "Host Support",
      description: "Dedicated assistance for property owners and managers",
      icon: "Home",
      color: "bg-secondary",
      features: [
        "Listing optimization guidance",
        "Performance analytics review",
        "Guest communication support",
        "Payout and tax assistance"
      ],
      responseTime: "< 4 hours",
      availability: "Business Hours",
      contactMethods: ["Dedicated Manager", "Phone", "Email"]
    },
    {
      title: "Partnership Inquiries",
      description: "Connect with our business development team",
      icon: "Handshake",
      color: "bg-accent",
      features: [
        "Property management partnerships",
        "Destination marketing collaboration",
        "Technology integration opportunities",
        "Corporate travel programs"
      ],
      responseTime: "1-2 business days",
      availability: "Business Hours",
      contactMethods: ["Email", "Scheduled Call"]
    },
    {
      title: "Media Relations",
      description: "Press inquiries and media partnership opportunities",
      icon: "Megaphone",
      color: "bg-success",
      features: [
        "Press kit and company information",
        "Interview and quote requests",
        "Partnership announcements",
        "Industry research and data"
      ],
      responseTime: "Same day",
      availability: "Business Hours",
      contactMethods: ["Email", "Phone"]
    }
  ];

  const emergencyContacts = [
    {
      region: "North America",
      phone: "+1-800-STAYFINDER",
      hours: "24/7"
    },
    {
      region: "Europe",
      phone: "+44-20-STAYFINDER",
      hours: "24/7"
    },
    {
      region: "Asia Pacific",
      phone: "+65-STAYFINDER",
      hours: "24/7"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Specialized Support Teams
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Get connected with the right expert for your specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {supportCategories.map((category, index) => (
            <div key={index} className="card group">
              <div className="flex items-start space-x-4 mb-6">
                <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={category.icon} size={24} color="white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    {category.title}
                  </h3>
                  <p className="text-text-secondary">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-medium text-text-primary mb-2">What we help with:</h4>
                  <ul className="space-y-1">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-text-secondary">
                        <Icon name="Check" size={16} className="text-success mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                  <div>
                    <div className="text-xs text-text-secondary uppercase tracking-wide mb-1">
                      Response Time
                    </div>
                    <div className="font-semibold text-text-primary">
                      {category.responseTime}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-text-secondary uppercase tracking-wide mb-1">
                      Availability
                    </div>
                    <div className="font-semibold text-text-primary">
                      {category.availability}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-xs text-text-secondary uppercase tracking-wide mb-2">
                    Contact Methods
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.contactMethods.map((method, methodIndex) => (
                      <span
                        key={methodIndex}
                        className="px-3 py-1 bg-gray-100 text-text-secondary text-xs rounded-full"
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <button className="w-full btn-outline group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                Get Support
              </button>
            </div>
          ))}
        </div>

        {/* Emergency Support */}
        <div className="bg-error-50 border border-error-200 rounded-lg p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-error rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="AlertTriangle" size={32} color="white" />
            </div>
            <h3 className="text-2xl font-bold text-error-700 mb-2">
              Emergency Support
            </h3>
            <p className="text-error-600 max-w-2xl mx-auto">
              For urgent travel emergencies, safety concerns, or critical booking issues that require immediate assistance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center">
                <h4 className="font-semibold text-text-primary mb-2">{contact.region}</h4>
                <div className="text-lg font-bold text-error mb-1">{contact.phone}</div>
                <div className="text-sm text-text-secondary">{contact.hours}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <p className="text-sm text-error-600">
              Emergency support is available for active bookings and urgent safety situations only.
              For general inquiries, please use our standard support channels above.
            </p>
          </div>
        </div>

        {/* Support Statistics */}
        <div className="mt-16 bg-surface rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-text-primary mb-2">
              Our Support Performance
            </h3>
            <p className="text-text-secondary">
              We're committed to providing exceptional support to our community
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">98.5%</div>
              <div className="text-sm text-text-secondary">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">1.8h</div>
              <div className="text-sm text-text-secondary">Average Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <div className="text-sm text-text-secondary">Emergency Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-2">15+</div>
              <div className="text-sm text-text-secondary">Languages Supported</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SupportCategories;