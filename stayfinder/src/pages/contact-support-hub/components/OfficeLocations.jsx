import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

function OfficeLocations() {
  const [selectedOffice, setSelectedOffice] = useState(0);

  const offices = [
    {
      city: "San Francisco",
      country: "United States",
      address: "123 Market Street, Suite 500, San Francisco, CA 94105",
      phone: "+1 (415) 555-0123",
      email: "sf@stayfinder.com",
      hours: {
        weekdays: "9:00 AM - 6:00 PM PST",
        weekends: "Closed"
      },
      timezone: "Pacific Standard Time",
      coordinates: "37.7749,-122.4194",
      services: [
        "Corporate Headquarters",
        "Business Development",
        "Partnership Inquiries",
        "Media Relations"
      ],
      team: [
        { name: "Sarah Chen", role: "Head of Partnerships", email: "sarah.chen@stayfinder.com" },
        { name: "Michael Rodriguez", role: "Business Development", email: "michael.r@stayfinder.com" }
      ],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
    },
    {
      city: "London",
      country: "United Kingdom",
      address: "45 Shoreditch High Street, London E1 6PN, United Kingdom",
      phone: "+44 20 7946 0958",
      email: "london@stayfinder.com",
      hours: {
        weekdays: "9:00 AM - 5:30 PM GMT",
        weekends: "Closed"
      },
      timezone: "Greenwich Mean Time",
      coordinates: "51.5074,-0.1278",
      services: [
        "European Operations",
        "Host Support",
        "Customer Service",
        "Localization Team"
      ],
      team: [
        { name: "Emma Thompson", role: "European Operations Manager", email: "emma.t@stayfinder.com" },
        { name: "James Wilson", role: "Host Success Manager", email: "james.w@stayfinder.com" }
      ],
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop"
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "1 Raffles Place, #40-02, One Raffles Place, Singapore 048616",
      phone: "+65 6789 1234",
      email: "singapore@stayfinder.com",
      hours: {
        weekdays: "9:00 AM - 6:00 PM SGT",
        weekends: "Closed"
      },
      timezone: "Singapore Standard Time",
      coordinates: "1.3521,103.8198",
      services: [
        "Asia Pacific Operations",
        "Technical Support",
        "Regional Partnerships",
        "Market Expansion"
      ],
      team: [
        { name: "Li Wei", role: "APAC Regional Director", email: "li.wei@stayfinder.com" },
        { name: "Priya Sharma", role: "Technical Support Lead", email: "priya.s@stayfinder.com" }
      ],
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=600&fit=crop"
    },
    {
      city: "Toronto",
      country: "Canada",
      address: "100 King Street West, Suite 3000, Toronto, ON M5X 1C9, Canada",
      phone: "+1 (416) 555-0789",
      email: "toronto@stayfinder.com",
      hours: {
        weekdays: "9:00 AM - 5:00 PM EST",
        weekends: "Closed"
      },
      timezone: "Eastern Standard Time",
      coordinates: "43.6532,-79.3832",
      services: [
        "Canadian Operations",
        "Customer Success",
        "Content Localization",
        "Regulatory Compliance"
      ],
      team: [
        { name: "David Kim", role: "Canadian Operations Manager", email: "david.k@stayfinder.com" },
        { name: "Sophie Dubois", role: "Customer Success Manager", email: "sophie.d@stayfinder.com" }
      ],
      image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&h=600&fit=crop"
    }
  ];

  const currentOffice = offices[selectedOffice];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Our Global Offices
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Visit us in person or connect with our regional teams around the world
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Office List */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {offices.map((office, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedOffice(index)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                    selectedOffice === index
                      ? 'border-primary bg-primary-50' :'border-border hover:border-primary-300 hover:bg-primary-50/50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      selectedOffice === index ? 'bg-primary' : 'bg-gray-300'
                    }`}></div>
                    <div>
                      <div className="font-semibold text-text-primary">{office.city}</div>
                      <div className="text-sm text-text-secondary">{office.country}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Quick Contact */}
            <div className="mt-8 bg-surface rounded-lg p-6">
              <h3 className="font-semibold text-text-primary mb-4">Quick Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={16} className="text-primary" />
                  <span className="text-sm text-text-secondary">Global Support: +1-800-STAYFINDER</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={16} className="text-primary" />
                  <span className="text-sm text-text-secondary">support@stayfinder.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MessageCircle" size={16} className="text-primary" />
                  <span className="text-sm text-text-secondary">Live Chat Available 24/7</span>
                </div>
              </div>
            </div>
          </div>

          {/* Office Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-brand overflow-hidden">
              {/* Office Image */}
              <div className="h-64 bg-gray-200 overflow-hidden">
                <img
                  src={currentOffice.image}
                  alt={`${currentOffice.city} office`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "/assets/images/no_image.png";
                  }}
                />
              </div>

              <div className="p-8">
                {/* Office Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary mb-2">
                      {currentOffice.city}, {currentOffice.country}
                    </h3>
                    <p className="text-text-secondary">{currentOffice.address}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-text-secondary mb-1">Local Time</div>
                    <div className="font-semibold text-text-primary">
                      {new Date().toLocaleTimeString('en-US', {
                        timeZone: currentOffice.timezone === 'Pacific Standard Time' ? 'America/Los_Angeles' :
                                  currentOffice.timezone === 'Greenwich Mean Time' ? 'Europe/London' :
                                  currentOffice.timezone === 'Singapore Standard Time'? 'Asia/Singapore' : 'America/Toronto',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-semibold text-text-primary mb-3">Contact Information</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <Icon name="Phone" size={16} className="text-primary" />
                        <span className="text-text-secondary">{currentOffice.phone}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="Mail" size={16} className="text-primary" />
                        <span className="text-text-secondary">{currentOffice.email}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-text-primary mb-3">Office Hours</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <Icon name="Clock" size={16} className="text-primary" />
                        <div>
                          <div className="text-text-secondary text-sm">Weekdays</div>
                          <div className="text-text-primary font-medium">{currentOffice.hours.weekdays}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="Calendar" size={16} className="text-primary" />
                        <div>
                          <div className="text-text-secondary text-sm">Weekends</div>
                          <div className="text-text-primary font-medium">{currentOffice.hours.weekends}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Services */}
                <div className="mb-8">
                  <h4 className="font-semibold text-text-primary mb-3">Services Available</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {currentOffice.services.map((service, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-success" />
                        <span className="text-text-secondary text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Team Members */}
                <div className="mb-8">
                  <h4 className="font-semibold text-text-primary mb-3">Key Team Members</h4>
                  <div className="space-y-3">
                    {currentOffice.team.map((member, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-surface rounded-lg">
                        <div>
                          <div className="font-medium text-text-primary">{member.name}</div>
                          <div className="text-sm text-text-secondary">{member.role}</div>
                        </div>
                        <a
                          href={`mailto:${member.email}`}
                          className="text-primary hover:text-primary-600 transition-colors duration-200"
                        >
                          <Icon name="Mail" size={16} />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Map */}
                <div className="mb-6">
                  <h4 className="font-semibold text-text-primary mb-3">Location</h4>
                  <div className="h-64 bg-gray-100 rounded-lg overflow-hidden">
                    <iframe
                      width="100%"
                      height="100%"
                      loading="lazy"
                      title={`${currentOffice.city} Office Location`}
                      referrerPolicy="no-referrer-when-downgrade"
                      src={`https://www.google.com/maps?q=${currentOffice.coordinates}&z=15&output=embed`}
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="btn-primary flex-1">
                    <Icon name="Calendar" size={16} className="mr-2" />
                    Schedule Visit
                  </button>
                  <button className="btn-outline flex-1">
                    <Icon name="Navigation" size={16} className="mr-2" />
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visiting Guidelines */}
        <div className="mt-16 bg-warning-50 border border-warning-200 rounded-lg p-8">
          <div className="flex items-start space-x-4">
            <Icon name="Info" size={24} className="text-warning-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-warning-800 mb-2">
                Visiting Our Offices
              </h3>
              <div className="text-warning-700 space-y-2">
                <p>
                  We welcome visitors to our offices! To ensure the best experience, please:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Schedule your visit in advance by calling or emailing the office</li>
                  <li>Bring a valid photo ID for building security</li>
                  <li>Arrive 10 minutes early for check-in procedures</li>
                  <li>Check our holiday schedule as office hours may vary</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OfficeLocations;