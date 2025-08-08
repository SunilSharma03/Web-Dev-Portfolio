import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    discover: [
      { name: 'Search Properties', path: '/search-results-intelligent-discovery' },
      { name: 'Trending Destinations', path: '/search-results-intelligent-discovery' },
      { name: 'Unique Stays', path: '/search-results-intelligent-discovery' },
      { name: 'Local Guides', path: '/search-results-intelligent-discovery' }
    ],
    account: [
      { name: 'Dashboard', path: '/user-dashboard-travel-command-center' },
      { name: 'My Bookings', path: '/user-dashboard-travel-command-center' },
      { name: 'Wishlist', path: '/user-dashboard-travel-command-center' },
      { name: 'Travel Preferences', path: '/user-dashboard-travel-command-center' }
    ],
    support: [
      { name: 'Help Center', path: '/contact-support-hub' },
      { name: 'Contact Us', path: '/contact-support-hub' },
      { name: 'Safety Guidelines', path: '/contact-support-hub' },
      { name: 'Trust & Safety', path: '/contact-support-hub' }
    ],
    company: [
      { name: 'About StayFinder', path: '/about-brand-story' },
      { name: 'Our Story', path: '/about-brand-story' },
      { name: 'Careers', path: '/about-brand-story' },
      { name: 'Press', path: '/about-brand-story' }
    ]
  };

  const socialLinks = [
    { name: 'Instagram', icon: 'Instagram', url: '#' },
    { name: 'Facebook', icon: 'Facebook', url: '#' },
    { name: 'Twitter', icon: 'Twitter', url: '#' },
    { name: 'LinkedIn', icon: 'Linkedin', url: '#' }
  ];

  return (
    <footer className="bg-text-primary text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/homepage-premium-discovery-platform" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <Icon name="MapPin" size={24} color="white" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gradient bg-gradient-to-r from-primary-200 to-secondary-200 bg-clip-text text-transparent">
                  StayFinder
                </h3>
                <p className="text-sm text-white/70 -mt-1">Curated Discovery</p>
              </div>
            </Link>
            
            <p className="text-white/80 mb-6 leading-relaxed">
              Discover stays that fit your story. We connect travelers with unique accommodations through intelligent curation and community insights.
            </p>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Stay Inspired</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary text-white placeholder-white/60"
                />
                <button className="bg-primary hover:bg-primary-600 px-6 py-2 rounded-r-lg transition-colors duration-200">
                  <Icon name="Send" size={16} />
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  aria-label={social.name}
                >
                  <Icon name={social.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Discover */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Discover</h4>
              <ul className="space-y-3">
                {footerLinks.discover.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Account */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Account</h4>
              <ul className="space-y-3">
                {footerLinks.account.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-white/60 text-sm">
              © {currentYear} StayFinder. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">
              <Link to="/about-brand-story" className="text-white/60 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/about-brand-story" className="text-white/60 hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/about-brand-story" className="text-white/60 hover:text-white transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-white/60 text-xs">
                <Icon name="Shield" size={16} />
                <span>Secure Platform</span>
              </div>
              <div className="flex items-center space-x-2 text-white/60 text-xs">
                <Icon name="Award" size={16} />
                <span>Verified Properties</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;