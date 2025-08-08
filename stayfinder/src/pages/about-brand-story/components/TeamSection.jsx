import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

function TeamSection() {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Co-Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Former Airbnb product lead with 12+ years in travel tech. Sarah\'s vision for authentic travel experiences drives StayFinder\'s curation philosophy. She\'s visited 60+ countries and believes the right accommodation can transform any journey.",
      expertise: ["Travel Technology", "Product Strategy", "User Experience"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Marcus Rodriguez",
      role: "Co-Founder & CTO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Ex-Google engineer specializing in machine learning and search algorithms. Marcus built the intelligent matching system that powers StayFinder\'s personalized recommendations, combining technical excellence with travel passion.",
      expertise: ["Machine Learning", "Search Technology", "Platform Architecture"],
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Elena Kowalski",
      role: "Head of Curation",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Former luxury travel advisor and hospitality consultant. Elena leads our property curation team, ensuring every listing meets StayFinder\'s standards for uniqueness, quality, and authentic local character.",
      expertise: ["Hospitality", "Property Curation", "Travel Advisory"],
      social: {
        linkedin: "#",
        instagram: "#"
      }
    },
    {
      name: "David Park",
      role: "Head of Community",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Community building expert with background in social platforms and user engagement. David fosters the StayFinder community, ensuring authentic connections between travelers and meaningful host-guest relationships.",
      expertise: ["Community Building", "User Engagement", "Content Strategy"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Amara Okafor",
      role: "Head of Trust & Safety",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Former risk management specialist with expertise in fraud prevention and user verification. Amara ensures StayFinder maintains the highest standards of safety and trust for our global community.",
      expertise: ["Risk Management", "Fraud Prevention", "User Verification"],
      social: {
        linkedin: "#"
      }
    },
    {
      name: "Thomas Mueller",
      role: "Head of Partnerships",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Hospitality industry veteran with 15+ years building relationships with unique property owners worldwide. Thomas expands StayFinder\'s curated inventory while maintaining our quality standards.",
      expertise: ["Business Development", "Partnership Strategy", "Hospitality Relations"],
      social: {
        linkedin: "#"
      }
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Travel experts and technology innovators united by a passion for transforming how people discover and experience destinations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="relative mb-6">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-brand">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-4 left-4 right-4 bg-white p-4 rounded-xl shadow-brand-lg">
                  <h3 className="font-bold text-text-primary text-lg">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                </div>
              </div>
              
              <div className="pt-8">
                <p className="text-text-secondary mb-4 leading-relaxed">
                  {member.bio}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-text-primary mb-2">Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-primary-50 text-primary text-xs font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  {Object.entries(member.social).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      className="w-8 h-8 bg-surface rounded-lg flex items-center justify-center text-text-secondary hover:text-primary hover:bg-primary-50 transition-all duration-200"
                      aria-label={`${member.name} on ${platform}`}
                    >
                      <Icon 
                        name={platform === 'linkedin' ? 'Linkedin' : platform === 'twitter' ? 'Twitter' : platform === 'github' ? 'Github' : 'Instagram'} 
                        size={16} 
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-surface p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-text-primary mb-4">Join Our Mission</h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              We're always looking for passionate individuals who share our vision of transforming travel experiences. 
              Explore opportunities to make a meaningful impact in the travel industry.
            </p>
            <a
              href="#careers"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <Icon name="Users" size={20} />
              <span>View Open Positions</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;