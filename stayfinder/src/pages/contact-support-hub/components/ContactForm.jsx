import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

function ContactForm() {
  const [formData, setFormData] = useState({
    category: '',
    name: '',
    email: '',
    subject: '',
    message: '',
    priority: 'normal',
    attachments: []
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const categories = [
    { value: 'booking', label: 'Booking Issues', icon: 'Calendar' },
    { value: 'payment', label: 'Payment & Billing', icon: 'CreditCard' },
    { value: 'property', label: 'Property Questions', icon: 'Home' },
    { value: 'account', label: 'Account Management', icon: 'User' },
    { value: 'technical', label: 'Technical Support', icon: 'Settings' },
    { value: 'host', label: 'Host Support', icon: 'Users' },
    { value: 'partnership', label: 'Partnership Inquiry', icon: 'Handshake' },
    { value: 'other', label: 'Other', icon: 'HelpCircle' }
  ];

  const priorityLevels = [
    { value: 'low', label: 'Low Priority', description: 'General questions (48-72 hours)' },
    { value: 'normal', label: 'Normal Priority', description: 'Standard support (24-48 hours)' },
    { value: 'high', label: 'High Priority', description: 'Urgent issues (2-4 hours)' },
    { value: 'urgent', label: 'Urgent', description: 'Critical problems (< 1 hour)' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        category: '',
        name: '',
        email: '',
        subject: '',
        message: '',
        priority: 'normal',
        attachments: []
      });
    }, 2000);
  };

  if (submitStatus === 'success') {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-success-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCircle" size={40} className="text-success" />
            </div>
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Message Sent Successfully!
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Thank you for contacting us. We've received your message and will respond within the expected timeframe based on your priority level.
            </p>
            <div className="bg-success-50 border border-success-200 rounded-lg p-6 max-w-md mx-auto">
              <p className="text-success-700 font-medium mb-2">Ticket ID: #SF-2024-001234</p>
              <p className="text-success-600 text-sm">
                You'll receive a confirmation email shortly with your ticket details.
              </p>
            </div>
            <button 
              onClick={() => setSubmitStatus(null)}
              className="btn-primary mt-8"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Send Us a Message
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Can't find what you're looking for? Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Category Selection */}
          <div>
            <label className="block text-lg font-semibold text-text-primary mb-4">
              What can we help you with? *
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {categories.map((category) => (
                <label
                  key={category.value}
                  className={`relative flex flex-col items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                    formData.category === category.value
                      ? 'border-primary bg-primary-50' :'border-border hover:border-primary-300 hover:bg-primary-50/50'
                  }`}
                >
                  <input
                    type="radio"
                    name="category"
                    value={category.value}
                    checked={formData.category === category.value}
                    onChange={handleInputChange}
                    className="sr-only"
                    required
                  />
                  <Icon 
                    name={category.icon} 
                    size={24} 
                    className={`mb-2 ${
                      formData.category === category.value ? 'text-primary' : 'text-text-secondary'
                    }`} 
                  />
                  <span className={`text-sm font-medium text-center ${
                    formData.category === category.value ? 'text-primary' : 'text-text-primary'
                  }`}>
                    {category.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="input-field"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="input-field"
                placeholder="Enter your email address"
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-2">
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              className="input-field"
              placeholder="Brief description of your issue or question"
            />
          </div>

          {/* Priority Level */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-4">
              Priority Level
            </label>
            <div className="space-y-3">
              {priorityLevels.map((priority) => (
                <label
                  key={priority.value}
                  className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                    formData.priority === priority.value
                      ? 'border-primary bg-primary-50' :'border-border hover:border-primary-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="priority"
                    value={priority.value}
                    checked={formData.priority === priority.value}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                  />
                  <div className="ml-3">
                    <div className="text-sm font-medium text-text-primary">{priority.label}</div>
                    <div className="text-xs text-text-secondary">{priority.description}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={6}
              className="input-field resize-none"
              placeholder="Please provide as much detail as possible about your issue or question. Include any relevant booking IDs, property names, or error messages."
            />
            <div className="mt-2 text-xs text-text-secondary">
              Minimum 20 characters. Current: {formData.message.length}
            </div>
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Attachments (Optional)
            </label>
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary-300 transition-colors duration-200">
              <Icon name="Upload" size={32} className="text-text-secondary mx-auto mb-2" />
              <p className="text-text-secondary mb-2">
                Drag and drop files here, or click to select
              </p>
              <p className="text-xs text-text-secondary">
                Supported formats: JPG, PNG, PDF, DOC (Max 10MB each)
              </p>
              <input
                type="file"
                multiple
                accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                className="hidden"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`btn-primary px-12 py-4 text-lg ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending Message...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Icon name="Send" size={20} />
                  <span>Send Message</span>
                </div>
              )}
            </button>
            <p className="text-sm text-text-secondary mt-4">
              By submitting this form, you agree to our privacy policy and terms of service.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;