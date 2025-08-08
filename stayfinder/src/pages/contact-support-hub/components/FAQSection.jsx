import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

function FAQSection() {
  const [activeCategory, setActiveCategory] = useState('booking');
  const [openFAQ, setOpenFAQ] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategories = [
    { id: 'booking', label: 'Booking & Reservations', icon: 'Calendar', count: 12 },
    { id: 'payment', label: 'Payment & Billing', icon: 'CreditCard', count: 8 },
    { id: 'property', label: 'Property Information', icon: 'Home', count: 15 },
    { id: 'account', label: 'Account Management', icon: 'User', count: 6 },
    { id: 'host', label: 'Host Support', icon: 'Users', count: 10 },
    { id: 'policies', label: 'Policies & Guidelines', icon: 'FileText', count: 7 }
  ];

  const faqData = {
    booking: [
      {
        question: "How do I modify or cancel my booking?",
        answer: `You can modify or cancel your booking through your StayFinder dashboard. Go to 'My Bookings' and select the reservation you want to change. Cancellation policies vary by property, so please review the specific terms for your booking.

For modifications, you can change dates (subject to availability) or guest count. Some changes may incur additional fees. If you need to cancel, you'll see the refund amount based on the property's cancellation policy.

For bookings within 24 hours of check-in, please contact our support team directly for assistance.`
      },
      {
        question: "What happens if my booking is cancelled by the host?",
        answer: `If a host cancels your booking, you'll receive a full refund within 5-7 business days. We'll also help you find alternative accommodations and may provide additional compensation for the inconvenience.

Our team will immediately search for similar properties in your area and price range. We'll contact you within 2 hours of the cancellation to present options and assist with rebooking.`
      },
      {
        question: "Can I book for someone else?",
        answer: `Yes, you can make a booking for another person. During the booking process, you'll have the option to add the primary guest's information. The person staying at the property will need to provide valid ID at check-in.

Please ensure all guest details are accurate and inform the host about the arrangement. Some properties may have restrictions on third-party bookings.`
      },
      {
        question: "How do I know if my booking is confirmed?",
        answer: `You'll receive an immediate booking confirmation email after completing your reservation. This email contains your booking reference number, property details, check-in instructions, and host contact information.

You can also check your booking status in your StayFinder dashboard. Confirmed bookings will show as 'Confirmed' with a green status indicator.`
      }
    ],
    payment: [
      {
        question: "What payment methods do you accept?",
        answer: `We accept all major credit cards (Visa, Mastercard, American Express), debit cards, PayPal, Apple Pay, Google Pay, and bank transfers in select regions.

Payment is processed securely through our encrypted payment system. We never store your full payment details on our servers.`
      },
      {
        question: "When will I be charged for my booking?",
        answer: `Payment timing depends on the property and booking type:
        
• Instant Book properties: Charged immediately upon confirmation
• Request to Book properties: Charged only after host approval
• Long-term stays (28+ nights): May be split into multiple payments

You'll always see the exact payment schedule before confirming your booking.`
      },
      {
        question: "How do refunds work?",
        answer: `Refunds are processed according to the property's cancellation policy. Once approved, refunds typically take 5-7 business days to appear in your account. The refund will be credited to your original payment method. If that's not possible, we'll work with you to find an alternative solution.`
      }
    ],
    property: [
      {
        question: "How accurate are the property photos and descriptions?",
        answer: `All property photos and descriptions are verified by our team. We require hosts to provide recent, accurate photos and detailed descriptions. Our verification process includes:

• Photo authenticity checks
• Description accuracy reviews
• Regular property inspections
• Guest feedback monitoring

If you find any discrepancies, please report them immediately and we'll investigate.`
      },
      {
        question: "What amenities are typically included?",
        answer: `Amenities vary by property but commonly include:

• WiFi and basic utilities
• Kitchen access (in most properties)
• Linens and towels
• Basic toiletries
• Parking (where available)

Each property listing clearly shows all included amenities. Premium properties may offer additional services like concierge, housekeeping, or welcome packages.`
      },
      {
        question: "Can I see the exact location before booking?",
        answer: `For privacy and security reasons, we show the general neighborhood area before booking. The exact address is revealed after your booking is confirmed.

You'll see the approximate location on the map, nearby landmarks, and detailed neighborhood information to help you make an informed decision.`
      }
    ],
    account: [
      {
        question: "How do I update my profile information?",
        answer: `You can update your profile by going to Account Settings in your dashboard. You can modify:

• Personal information
• Contact details
• Profile photo
• Travel preferences
• Notification settings

Some changes may require email verification for security purposes.`
      },
      {
        question: "How do I delete my account?",
        answer: `To delete your account, go to Account Settings and select 'Delete Account'. Please note:

• This action is permanent and cannot be undone
• You must cancel all active bookings first
• Your reviews and ratings will be anonymized
• You'll receive a confirmation email

If you have concerns, please contact support before deleting your account.`
      }
    ],
    host: [
      {
        question: "How do I become a StayFinder host?",
        answer: `Becoming a host is easy! Follow these steps:

1. Create a host account
2. Add your property with photos and description
3. Set your pricing and availability
4. Complete identity verification
5. Review and publish your listing

Our host onboarding team will guide you through each step and provide tips for success.`
      },
      {
        question: "What are the hosting fees?",
        answer: `StayFinder charges a service fee of 3% per booking, which is automatically deducted from your payout. This covers:

• Payment processing
• 24/7 customer support
• Marketing and promotion
• Platform maintenance
• Host protection insurance

There are no upfront costs or monthly fees to list your property.`
      },
      {
        question: "How and when do I get paid?",
        answer: `Payments are released 24 hours after guest check-in. You can choose from:

• Bank transfer (1-3 business days)
• PayPal (within 24 hours)
• International wire transfer (3-7 business days)

You can track all payments and payouts in your host dashboard.`
      }
    ],
    policies: [
      {
        question: "What is your cancellation policy?",
        answer: `Cancellation policies are set by individual hosts and clearly displayed on each property listing. Common policies include:

• Flexible: Full refund up to 24 hours before check-in
• Moderate: Full refund up to 5 days before check-in
• Strict: 50% refund up to 7 days before check-in

Extenuating circumstances may qualify for exceptions to these policies.`
      },
      {
        question: "What happens if there\'s a problem with my stay?",
        answer: `If you encounter issues during your stay:

1. Contact the host first to resolve the issue
2. If unresolved, contact StayFinder support immediately
3. Document the issue with photos if applicable
4. We'll work to find a solution or alternative accommodation

Our resolution team is available 24/7 for urgent issues.`
      }
    ]
  };

  const filteredFAQs = faqData[activeCategory]?.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-8">
            Find quick answers to common questions about StayFinder
          </p>
          
          {/* FAQ Search */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary"
              />
              <Icon 
                name="Search" 
                size={20} 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary" 
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Category Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-brand p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-text-primary mb-4">Categories</h3>
              <nav className="space-y-2">
                {faqCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id);
                      setOpenFAQ(null);
                    }}
                    className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-all duration-200 ${
                      activeCategory === category.id
                        ? 'bg-primary text-white' :'text-text-secondary hover:bg-primary-50 hover:text-primary'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon name={category.icon} size={18} />
                      <span className="font-medium">{category.label}</span>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      activeCategory === category.id
                        ? 'bg-white/20 text-white' :'bg-gray-100 text-text-secondary'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-brand overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    >
                      <h4 className="text-lg font-semibold text-text-primary pr-4">
                        {faq.question}
                      </h4>
                      <Icon 
                        name={openFAQ === index ? "ChevronUp" : "ChevronDown"} 
                        size={20} 
                        className="text-text-secondary flex-shrink-0" 
                      />
                    </button>
                    {openFAQ === index && (
                      <div className="px-6 pb-6">
                        <div className="prose prose-lg max-w-none text-text-secondary">
                          <p className="whitespace-pre-line">{faq.answer}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <Icon name="Search" size={48} className="text-text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-text-primary mb-2">No FAQs Found</h3>
                  <p className="text-text-secondary">
                    Try adjusting your search terms or browse different categories.
                  </p>
                </div>
              )}
            </div>

            {/* Still Need Help */}
            <div className="mt-12 bg-primary-50 rounded-lg p-8 text-center">
              <Icon name="HelpCircle" size={48} className="text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                Still need help?
              </h3>
              <p className="text-text-secondary mb-6">
                Can't find the answer you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  Contact Support
                </button>
                <button className="btn-outline">
                  Browse Help Center
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;