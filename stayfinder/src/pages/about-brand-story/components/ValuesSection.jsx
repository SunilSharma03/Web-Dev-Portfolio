import React from 'react';
import Icon from '../../../components/AppIcon';

function ValuesSection() {
  const values = [
    {
      icon: "Sparkles",
      title: "Curation Over Quantity",
      description: "We believe in the power of thoughtful selection. Every property on StayFinder is carefully vetted and curated to ensure it offers something special—whether that\'s exceptional design, unique location, outstanding hospitality, or authentic local character.",
      color: "primary"
    },
    {
      icon: "Users",
      title: "Community Over Transactions",
      description: "Travel is inherently social, and the best recommendations come from fellow travelers. We foster a community where authentic experiences are shared, genuine connections are made, and every booking contributes to a larger story of discovery.",
      color: "secondary"
    },
    {
      icon: "Compass",
      title: "Authentic Experiences Over Generic Stays",
      description: "We champion accommodations that reflect the true spirit of their destinations. From family-run guesthouses that offer insider local knowledge to architecturally significant properties that tell the story of their place, we prioritize character over conformity.",
      color: "accent"
    },
    {
      icon: "Shield",
      title: "Trust Through Transparency",
      description: "Honest communication builds lasting relationships. We provide comprehensive, accurate information about every property, maintain transparent pricing, and ensure our community guidelines protect both travelers and hosts.",
      color: "success"
    },
    {
      icon: "Lightbulb",
      title: "Innovation with Purpose",
      description: "Technology should enhance human connection, not replace it. Our platform uses intelligent matching and personalization to help travelers discover accommodations that align with their values, preferences, and travel intentions.",
      color: "warning"
    },
    {
      icon: "Leaf",
      title: "Sustainable Travel Future",
      description: "We\'re committed to promoting responsible travel that benefits local communities and preserves destinations for future generations. This means supporting locally-owned properties, encouraging longer stays, and highlighting eco-conscious accommodations.",
      color: "primary"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      primary: "bg-primary-50 text-primary",
      secondary: "bg-secondary-50 text-secondary",
      accent: "bg-accent-50 text-accent",
      success: "bg-success-50 text-success",
      warning: "bg-warning-50 text-warning"
    };
    return colorMap[color] || colorMap.primary;
  };

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
            Our Core Values
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            The principles that guide every decision we make and every experience we create
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="card group hover:shadow-brand-lg">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${getColorClasses(value.color)}`}>
                <Icon name={value.icon} size={28} strokeWidth={2} />
              </div>
              
              <h3 className="text-xl font-semibold text-text-primary mb-4 group-hover:text-primary transition-colors duration-300">
                {value.title}
              </h3>
              
              <p className="text-text-secondary leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Living Our Values Daily</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              These aren't just words on a wall—they're the foundation of how we build products, 
              serve our community, and make decisions that impact millions of travelers worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ValuesSection;