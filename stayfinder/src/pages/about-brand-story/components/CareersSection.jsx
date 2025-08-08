import React from 'react';
import Icon from '../../../components/AppIcon';

function CareersSection() {
  const openPositions = [
    {
      title: "Senior Product Manager",
      department: "Product",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      description: "Lead product strategy for our core discovery and booking experience, working closely with engineering and design teams to enhance user satisfaction.",
      requirements: ["5+ years product management experience", "Travel industry background preferred", "Strong analytical and communication skills"],
      icon: "Briefcase"
    },
    {
      title: "Senior Frontend Engineer",
      department: "Engineering",
      location: "New York, NY / Remote",
      type: "Full-time",
      description: "Build and optimize our React-based platform, focusing on performance, user experience, and scalable architecture for millions of travelers.",
      requirements: ["Expert-level React and TypeScript", "Experience with large-scale applications", "Passion for travel and user experience"],
      icon: "Code"
    },
    {
      title: "Travel Curation Specialist",
      department: "Curation",
      location: "Remote",
      type: "Full-time",
      description: "Identify, evaluate, and onboard unique properties that align with StayFinder\'s quality standards and traveler preferences.",
      requirements: ["Extensive travel experience", "Eye for unique accommodations", "Strong relationship building skills"],
      icon: "MapPin"
    },
    {
      title: "Data Scientist",
      department: "Engineering",
      location: "Seattle, WA / Remote",
      type: "Full-time",
      description: "Enhance our AI matching algorithms and develop predictive models to improve booking success rates and personalization.",
      requirements: ["PhD/MS in relevant field", "Machine learning expertise", "Experience with recommendation systems"],
      icon: "BarChart3"
    },
    {
      title: "Community Manager",
      department: "Marketing",
      location: "Austin, TX / Remote",
      type: "Full-time",
      description: "Build and nurture our traveler community through social media, events, and content creation that showcases authentic travel experiences.",
      requirements: ["Social media expertise", "Content creation skills", "Travel industry knowledge"],
      icon: "Users"
    },
    {
      title: "Partnership Manager",
      department: "Business Development",
      location: "London, UK / Remote",
      type: "Full-time",
      description: "Develop strategic partnerships with property owners, local businesses, and travel organizations to expand our curated inventory.",
      requirements: ["Business development experience", "International market knowledge", "Negotiation and relationship skills"],
      icon: "Handshake"
    }
  ];

  const benefits = [
    {
      icon: "Plane",
      title: "Travel Stipend",
      description: "$3,000 annual travel budget to experience destinations and accommodations firsthand"
    },
    {
      icon: "Heart",
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs"
    },
    {
      icon: "GraduationCap",
      title: "Learning & Development",
      description: "Professional development budget, conference attendance, and skill-building opportunities"
    },
    {
      icon: "Home",
      title: "Flexible Work",
      description: "Remote-first culture with flexible hours and co-working space stipends"
    },
    {
      icon: "DollarSign",
      title: "Competitive Package",
      description: "Market-rate salaries, equity participation, and performance-based bonuses"
    },
    {
      icon: "Calendar",
      title: "Time Off",
      description: "Unlimited PTO policy with mandatory minimum vacation time to recharge"
    }
  ];

  const companyValues = [
    {
      title: "Curiosity-Driven",
      description: "We encourage exploration, learning, and asking \'what if?\' in everything we do"
    },
    {
      title: "Quality-Focused",
      description: "We believe in doing fewer things exceptionally well rather than many things adequately"
    },
    {
      title: "Community-First",
      description: "Every decision considers the impact on our travelers, hosts, and team members"
    },
    {
      title: "Authentically Global",
      description: "We celebrate diverse perspectives and create inclusive experiences for all"
    }
  ];

  return (
    <section id="careers" className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            We're looking for passionate individuals who share our vision of transforming travel experiences. 
            Help us build the future of accommodation discovery.
          </p>
        </div>
        
        {/* Company Culture */}
        <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-brand mb-16">
          <h3 className="text-2xl font-bold text-text-primary text-center mb-8">
            Our Culture & Values
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {companyValues.map((value, index) => (
              <div key={index} className="text-center p-6 bg-surface rounded-xl">
                <h4 className="font-bold text-text-primary mb-2">{value.title}</h4>
                <p className="text-sm text-text-secondary">{value.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-text-secondary max-w-3xl mx-auto">
              At StayFinder, we believe that diverse teams create better products. We're committed to building 
              an inclusive workplace where everyone can do their best work and grow their careers while making 
              a meaningful impact on how people experience the world.
            </p>
          </div>
        </div>
        
        {/* Benefits */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-text-primary text-center mb-12">
            Why Work With Us
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-brand hover:shadow-brand-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={benefit.icon} size={24} color="white" strokeWidth={2} />
                </div>
                <h4 className="text-lg font-bold text-text-primary mb-2">{benefit.title}</h4>
                <p className="text-text-secondary text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Open Positions */}
        <div>
          <h3 className="text-2xl font-bold text-text-primary text-center mb-12">
            Open Positions
          </h3>
          
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-brand hover:shadow-brand-lg transition-all duration-300 group">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name={position.icon} size={24} color="var(--color-primary)" strokeWidth={2} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors duration-300">
                          {position.title}
                        </h4>
                        <div className="flex flex-wrap gap-3 mb-3">
                          <span className="text-sm font-medium text-primary bg-primary-50 px-3 py-1 rounded-full">
                            {position.department}
                          </span>
                          <span className="text-sm font-medium text-text-secondary bg-surface px-3 py-1 rounded-full">
                            {position.location}
                          </span>
                          <span className="text-sm font-medium text-success bg-success-50 px-3 py-1 rounded-full">
                            {position.type}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-text-secondary mb-4 leading-relaxed">
                      {position.description}
                    </p>
                    
                    <div>
                      <h5 className="font-semibold text-text-primary mb-2">Key Requirements:</h5>
                      <ul className="space-y-1">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start space-x-2 text-sm">
                            <Icon name="Check" size={14} color="var(--color-success)" strokeWidth={2} className="mt-0.5 flex-shrink-0" />
                            <span className="text-text-secondary">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <button className="btn-primary w-full lg:w-auto px-8 py-3">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary p-8 lg:p-12 rounded-2xl text-white text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Don't See Your Role?
          </h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            We're always looking for exceptional talent who share our passion for transforming travel. 
            Send us your resume and tell us how you'd like to contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300">
              Send General Application
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300">
              View All Benefits
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareersSection;