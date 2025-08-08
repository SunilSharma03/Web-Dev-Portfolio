import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Discover', path: '/homepage-premium-discovery-platform', icon: 'Compass' },
    { name: 'Search', path: '/search-results-intelligent-discovery', icon: 'Search' },
    { name: 'Dashboard', path: '/user-dashboard-travel-command-center', icon: 'LayoutDashboard' },
    { name: 'About', path: '/about-brand-story', icon: 'Info' },
    { name: 'Support', path: '/contact-support-hub', icon: 'HelpCircle' },
  ];

  const isActivePath = (path) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-brand border-b border-border' 
        : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            to="/homepage-premium-discovery-platform" 
            className="flex items-center space-x-3 group"
            onClick={closeMenu}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center transform transition-transform duration-300 group-hover:scale-105">
                <Icon name="MapPin" size={20} color="white" strokeWidth={2.5} />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full opacity-80 animate-pulse-brand"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-bold text-gradient">StayFinder</h1>
              <p className="text-xs text-text-secondary font-medium -mt-1">Curated Discovery</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ease-out ${
                  isActivePath(item.path)
                    ? 'bg-primary-50 text-primary border border-primary-200' :'text-text-secondary hover:text-primary hover:bg-primary-50/50'
                }`}
              >
                <Icon name={item.icon} size={16} strokeWidth={2} />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/user-dashboard-travel-command-center"
              className="text-text-secondary hover:text-primary font-medium text-sm transition-colors duration-200"
            >
              Sign In
            </Link>
            <Link
              to="/search-results-intelligent-discovery"
              className="btn-primary text-sm px-6 py-2.5"
            >
              Start Exploring
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-primary-50 transition-all duration-200 ease-out"
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} strokeWidth={2} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 pb-6' :'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <nav className="pt-4 space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ease-out ${
                  isActivePath(item.path)
                    ? 'bg-primary-50 text-primary border border-primary-200' :'text-text-secondary hover:text-primary hover:bg-primary-50/50'
                }`}
              >
                <Icon name={item.icon} size={20} strokeWidth={2} />
                <span>{item.name}</span>
              </Link>
            ))}
            
            {/* Mobile CTA */}
            <div className="pt-4 space-y-3 border-t border-border mt-4">
              <Link
                to="/user-dashboard-travel-command-center"
                onClick={closeMenu}
                className="flex items-center space-x-3 px-4 py-3 text-text-secondary hover:text-primary font-medium transition-colors duration-200"
              >
                <Icon name="User" size={20} strokeWidth={2} />
                <span>Sign In</span>
              </Link>
              <Link
                to="/search-results-intelligent-discovery"
                onClick={closeMenu}
                className="btn-primary w-full text-center py-3"
              >
                Start Exploring
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;