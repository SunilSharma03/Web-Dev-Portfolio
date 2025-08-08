import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

function EmergencySupport() {
  const [selectedRegion, setSelectedRegion] = useState('global');

  const emergencyContacts = {
    global: {
      title: "Global Emergency Hotline",
      phone: "+1-800-EMERGENCY",
      available: "24/7/365",
      description: "For immediate assistance with urgent travel emergencies, safety concerns, or critical booking issues",
      languages: ["English", "Spanish", "French", "German", "Mandarin", "Japanese"]
    },
    americas: {
      title: "Americas Emergency Support",
      phone: "+1-800-STAY-HELP",
      available: "24/7",
      description: "Dedicated emergency support for travelers in North and South America",
      languages: ["English", "Spanish", "Portuguese", "French"]
    },
    europe: {
      title: "European Emergency Support",
      phone: "+44-800-STAYFINDER",
      available: "24/7",
      description: "Emergency assistance for travelers across Europe, Middle East, and Africa",
      languages: ["English", "French", "German", "Italian", "Spanish", "Dutch"]
    },
    asia: {
      title: "Asia Pacific Emergency Support",
      phone: "+65-800-STAYFINDER",
      available: "24/7",
      description: "Round-the-clock emergency support for Asia Pacific region",
      languages: ["English", "Mandarin", "Japanese", "Korean", "Hindi", "Thai"]
    }
  };

  const emergencyScenarios = [
    {
      title: "Property Access Issues",
      description: "Unable to access your booked property or check-in problems",
      icon: "Key",
      color: "bg-warning",
      actions: [
        "Contact property host immediately",
        "Call emergency support if no response within 30 minutes",
        "We'll arrange alternative accommodation if needed",
        "Full refund or rebooking assistance provided"
      ]
    },
    {
      title: "Safety Concerns",
      description: "Immediate safety threats or dangerous property conditions",
      icon: "Shield",
      color: "bg-error",
      actions: [
        "Leave the property immediately if unsafe",
        "Contact local emergency services (911, 112, etc.)",
        "Call StayFinder emergency support",
        "We'll provide immediate alternative accommodation"
      ]
    },
    {
      title: "Travel Disruptions",
      description: "Flight cancellations, natural disasters, or travel restrictions",
      icon: "AlertTriangle",
      color: "bg-accent",
      actions: [
        "Contact us as soon as possible",
        "Flexible cancellation policies apply",
        "Rebooking assistance for new dates",
        "Travel insurance claim support if applicable"
      ]
    },
    {
      title: "Medical Emergencies",
      description: "Health emergencies requiring immediate attention",
      icon: "Heart",
      color: "bg-primary",
      actions: [
        "Contact local emergency medical services first",
        "Notify StayFinder emergency support",
        "We'll assist with hospital communication",
        "Help coordinate with travel insurance providers"
      ]
    }
  ];

  const emergencyChecklist = [
    "Keep your booking confirmation and StayFinder contact numbers easily accessible",
    "Save local emergency numbers (911, 112, etc.) in your phone",
    "Have your travel insurance information readily available",
    "Keep copies of important documents (passport, ID, insurance) in multiple locations",
    "Share your travel itinerary with trusted contacts at home",
    "Download offline maps and translation apps for your destination"
  ];

  return (
    <section className="py-16 bg-error-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-error rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="AlertTriangle" size={40} color="white" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-error-700 mb-4">
            Emergency Support
          </h2>
          <p className="text-xl text-error-600 max-w-2xl mx-auto">
            We're here to help you 24/7 when urgent situations arise during your travels
          </p>
        </div>

        {/* Emergency Contacts */}
        <div className="bg-white rounded-lg shadow-brand p-8 mb-12">
          <h3 className="text-2xl font-bold text-text-primary mb-6 text-center">
            Emergency Contact Numbers
          </h3>
          
          {/* Region Selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {Object.keys(emergencyContacts).map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedRegion === region
                    ? 'bg-error text-white' :'bg-gray-100 text-text-secondary hover:bg-error-100 hover:text-error-700'
                }`}
              >
                {region.charAt(0).toUpperCase() + region.slice(1)}
              </button>
            ))}
          </div>

          {/* Selected Contact Info */}
          <div className="text-center bg-error-50 rounded-lg p-8">
            <h4 className="text-xl font-bold text-error-700 mb-2">
              {emergencyContacts[selectedRegion].title}
            </h4>
            <div className="text-3xl font-bold text-error mb-2">
              {emergencyContacts[selectedRegion].phone}
            </div>
            <div className="text-error-600 mb-4">
              Available {emergencyContacts[selectedRegion].available}
            </div>
            <p className="text-error-700 mb-6 max-w-2xl mx-auto">
              {emergencyContacts[selectedRegion].description}
            </p>
            
            <div>
              <div className="text-sm text-error-600 mb-2">Languages Supported:</div>
              <div className="flex flex-wrap justify-center gap-2">
                {emergencyContacts[selectedRegion].languages.map((language, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white text-error-700 text-sm rounded-full border border-error-200"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Scenarios */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">
            Common Emergency Scenarios
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {emergencyScenarios.map((scenario, index) => (
              <div key={index} className="bg-white rounded-lg shadow-brand p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-12 h-12 ${scenario.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Icon name={scenario.icon} size={24} color="white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-text-primary mb-2">
                      {scenario.title}
                    </h4>
                    <p className="text-text-secondary text-sm">
                      {scenario.description}
                    </p>
                  </div>
                </div>
                
                <div>
                  <div className="text-sm font-medium text-text-primary mb-3">What to do:</div>
                  <ol className="space-y-2">
                    {scenario.actions.map((action, actionIndex) => (
                      <li key={actionIndex} className="flex items-start space-x-2 text-sm text-text-secondary">
                        <span className="w-5 h-5 bg-primary-100 text-primary rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">
                          {actionIndex + 1}
                        </span>
                        <span>{action}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Preparedness */}
        <div className="bg-white rounded-lg shadow-brand p-8 mb-12">
          <h3 className="text-2xl font-bold text-text-primary mb-6 text-center">
            Emergency Preparedness Checklist
          </h3>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-text-secondary mb-6 text-center">
              Being prepared can make all the difference in an emergency situation. Here's what we recommend:
            </p>
            
            <div className="space-y-3">
              {emergencyChecklist.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-surface rounded-lg">
                  <Icon name="CheckCircle" size={20} className="text-success flex-shrink-0 mt-0.5" />
                  <span className="text-text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-warning-100 border border-warning-300 rounded-lg p-6">
          <div className="flex items-start space-x-4">
            <Icon name="AlertCircle" size={24} className="text-warning-600 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-warning-800 mb-2">Important Notice</h4>
              <div className="text-warning-700 space-y-2">
                <p>
                  <strong>Life-threatening emergencies:</strong> Always contact local emergency services (911, 112, etc.) first before contacting StayFinder.
                </p>
                <p>
                  <strong>Emergency support scope:</strong> Our emergency support is available for active bookings and urgent travel-related issues. For general inquiries, please use our standard support channels.
                </p>
                <p>
                  <strong>Response time:</strong> Emergency support aims to respond within 15 minutes. For immediate assistance, calling is faster than email or chat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EmergencySupport;