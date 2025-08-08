import React from 'react';
import Icon from '../../../components/AppIcon';

function MilestonesSection() {
  const milestones = [
    {
      year: "2019",
      quarter: "Q3",
      title: "StayFinder Founded",
      description: "Company launched with seed funding of $2.5M from leading travel and technology investors",
      type: "founding",
      icon: "Rocket",
      details: [
        "Secured seed funding from Bessemer Venture Partners",
        "Assembled founding team of travel and tech veterans",
        "Launched beta platform with 100 curated properties"
      ]
    },
    {
      year: "2020",
      quarter: "Q2",
      title: "First Major Partnership",
      description: "Strategic partnership with Boutique Hotel Association, adding 500+ unique properties",
      type: "partnership",
      icon: "Handshake",
      details: [
        "Partnership with Boutique Hotel Association",
        "Expanded to 25 cities across North America",
        "Launched mobile app with 50K+ downloads"
      ]
    },
    {
      year: "2021",
      quarter: "Q1",
      title: "Series A Funding",
      description: "$12M Series A led by Andreessen Horowitz to accelerate growth and technology development",
      type: "funding",
      icon: "TrendingUp",
      details: [
        "$12M Series A funding round",
        "Led by Andreessen Horowitz",
        "Expanded engineering team by 200%"
      ]
    },
    {
      year: "2021",
      quarter: "Q4",
      title: "AI Matching System Launch",
      description: "Proprietary AI recommendation engine launched, improving booking success rate by 87%",
      type: "product",
      icon: "Brain",
      details: [
        "Launched AI-powered matching system",
        "87% improvement in booking satisfaction",
        "Patent filed for recommendation algorithm"
      ]
    },
    {
      year: "2022",
      quarter: "Q2",
      title: "International Expansion",
      description: "Expanded to Europe with partnerships in London, Paris, Barcelona, and Amsterdam",
      type: "expansion",
      icon: "Globe",
      details: [
        "Launched in 15 European cities",
        "Partnerships with local property managers",
        "Multi-currency and multi-language support"
      ]
    },
    {
      year: "2022",
      quarter: "Q4",
      title: "Industry Recognition",
      description: "Named \'Best Travel Innovation\' by Travel + Leisure and \'Startup of the Year\' by TechCrunch",
      type: "recognition",
      icon: "Award",
      details: [
        "Travel + Leisure 'Best Travel Innovation' award",
        "TechCrunch 'Startup of the Year' recognition",
        "Featured in Forbes '30 Under 30' list"
      ]
    },
    {
      year: "2023",
      quarter: "Q1",
      title: "Series B Funding",
      description: "$35M Series B funding to accelerate global expansion and enhance platform capabilities",
      type: "funding",
      icon: "DollarSign",
      details: [
        "$35M Series B funding round",
        "Led by General Catalyst",
        "Valuation reached $200M"
      ]
    },
    {
      year: "2023",
      quarter: "Q3",
      title: "Community Milestone",
      description: "Reached 50,000 verified travelers and 10,000 curated properties across 150+ destinations",
      type: "milestone",
      icon: "Users",
      details: [
        "50,000+ verified travelers",
        "10,000+ curated properties",
        "150+ destinations worldwide"
      ]
    },
    {
      year: "2024",
      quarter: "Q1",
      title: "Sustainability Initiative",
      description: "Launched \'Green Stay\' program promoting eco-friendly accommodations and carbon-neutral travel",
      type: "initiative",
      icon: "Leaf",
      details: [
        "Green Stay certification program",
        "Carbon offset partnerships",
        "1,000+ eco-certified properties"
      ]
    }
  ];

  const getTypeColor = (type) => {
    const colorMap = {
      founding: "primary",
      partnership: "secondary",
      funding: "success",
      product: "accent",
      expansion: "warning",
      recognition: "primary",
      milestone: "secondary",
      initiative: "success"
    };
    return colorMap[type] || "primary";
  };

  const getTypeIcon = (type) => {
    const iconMap = {
      founding: "bg-primary",
      partnership: "bg-secondary",
      funding: "bg-success",
      product: "bg-accent",
      expansion: "bg-warning",
      recognition: "bg-primary",
      milestone: "bg-secondary",
      initiative: "bg-success"
    };
    return iconMap[type] || "bg-primary";
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
            Company Milestones
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Key achievements including funding announcements, partnership launches, and industry recognition that build investor and user confidence
          </p>
        </div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 transform lg:-translate-x-0.5"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-start ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Timeline Dot */}
                <div className={`absolute left-0 lg:left-1/2 w-8 h-8 ${getTypeIcon(milestone.type)} rounded-full flex items-center justify-center transform lg:-translate-x-4 z-10`}>
                  <Icon name={milestone.icon} size={16} color="white" strokeWidth={2} />
                </div>
                
                {/* Content */}
                <div className={`w-full lg:w-1/2 ml-12 lg:ml-0 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="bg-surface p-8 rounded-2xl shadow-brand hover:shadow-brand-lg transition-all duration-300 group">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full bg-${getTypeColor(milestone.type)}-100 text-${getTypeColor(milestone.type)}`}>
                        {milestone.quarter} {milestone.year}
                      </span>
                      <span className="text-xs font-medium text-text-secondary uppercase tracking-wide">
                        {milestone.type}
                      </span>
                    </div>
                    
                    <h3 className="text-xl lg:text-2xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors duration-300">
                      {milestone.title}
                    </h3>
                    
                    <p className="text-text-secondary mb-6 leading-relaxed">
                      {milestone.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {milestone.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-2 text-sm">
                          <Icon name="ArrowRight" size={14} color="var(--color-primary)" strokeWidth={2} className="mt-0.5 flex-shrink-0" />
                          <span className="text-text-secondary">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Future Vision */}
        <div className="mt-20 bg-gradient-to-r from-primary to-secondary p-8 lg:p-12 rounded-2xl text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6">
              Looking Ahead: Our 2024-2025 Vision
            </h3>
            <p className="text-lg opacity-90 mb-8">
              As we continue to grow, our focus remains on enhancing the traveler experience through 
              innovative technology, expanding our curated inventory, and building stronger community connections.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 p-6 rounded-xl">
                <Icon name="Target" size={32} color="white" className="mx-auto mb-4" />
                <h4 className="font-bold mb-2">Global Reach</h4>
                <p className="text-sm opacity-80">Expand to 300+ destinations with 25,000+ curated properties</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <Icon name="Zap" size={32} color="white" className="mx-auto mb-4" />
                <h4 className="font-bold mb-2">AI Innovation</h4>
                <p className="text-sm opacity-80">Launch next-generation personalization and predictive booking</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <Icon name="Heart" size={32} color="white" className="mx-auto mb-4" />
                <h4 className="font-bold mb-2">Community Growth</h4>
                <p className="text-sm opacity-80">Build a community of 100,000+ verified travelers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MilestonesSection;