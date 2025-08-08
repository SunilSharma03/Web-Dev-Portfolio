import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

function SocialSharing({ bookingData }) {
  const [showShareModal, setShowShareModal] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const shareData = {
    title: `My upcoming trip to ${bookingData.property.name}`,
    text: `I'm so excited about my upcoming stay at ${bookingData.property.name} in ${bookingData.property.location}! 🏖️✈️`,
    url: window.location.href,
    hashtags: ['StayFinder', 'Travel', 'Santorini', 'Vacation']
  };

  const socialPlatforms = [
    {
      name: 'Facebook',
      icon: 'Facebook',
      color: '#1877F2',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareData.url)}&quote=${encodeURIComponent(shareData.text)}`
    },
    {
      name: 'Twitter',
      icon: 'Twitter',
      color: '#1DA1F2',
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareData.text)}&url=${encodeURIComponent(shareData.url)}&hashtags=${shareData.hashtags.join(',')}`
    },
    {
      name: 'Instagram',
      icon: 'Instagram',
      color: '#E4405F',
      url: '#',
      note: 'Copy text and share on Instagram'
    },
    {
      name: 'WhatsApp',
      icon: 'MessageCircle',
      color: '#25D366',
      url: `https://wa.me/?text=${encodeURIComponent(shareData.text + ' ' + shareData.url)}`
    },
    {
      name: 'LinkedIn',
      icon: 'Linkedin',
      color: '#0A66C2',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareData.url)}`
    },
    {
      name: 'Email',
      icon: 'Mail',
      color: '#6B7280',
      url: `mailto:?subject=${encodeURIComponent(shareData.title)}&body=${encodeURIComponent(shareData.text + '\n\n' + shareData.url)}`
    }
  ];

  const handleShare = (platform) => {
    if (platform.name === 'Instagram') {
      copyToClipboard(shareData.text);
      alert('Text copied! Now you can paste it on Instagram.');
      return;
    }
    
    window.open(platform.url, '_blank', 'width=600,height=400');
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareData.title,
          text: shareData.text,
          url: shareData.url
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      setShowShareModal(true);
    }
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-brand p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Share Your Adventure</h3>
        <p className="text-text-secondary text-sm mb-6">
          Let your friends and family know about your upcoming trip to {bookingData.property.location}!
        </p>
        
        <div className="space-y-4">
          {/* Quick Share Button */}
          <button
            onClick={handleNativeShare}
            className="w-full btn-primary flex items-center justify-center space-x-2"
          >
            <Icon name="Share2" size={18} />
            <span>Share Trip</span>
          </button>
          
          {/* Social Media Grid */}
          <div className="grid grid-cols-3 gap-3">
            {socialPlatforms.slice(0, 6).map((platform) => (
              <button
                key={platform.name}
                onClick={() => handleShare(platform)}
                className="flex flex-col items-center space-y-2 p-3 border border-border rounded-lg hover:bg-primary-50 hover:border-primary-200 transition-all duration-200"
                title={platform.note || `Share on ${platform.name}`}
              >
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: platform.color }}
                >
                  <Icon name={platform.icon} size={16} color="white" />
                </div>
                <span className="text-xs font-medium text-text-secondary">
                  {platform.name}
                </span>
              </button>
            ))}
          </div>
          
          {/* Copy Link */}
          <div className="border-t border-border pt-4">
            <div className="flex items-center space-x-3">
              <div className="flex-1 bg-surface rounded-lg px-3 py-2 text-sm text-text-secondary font-mono">
                {shareData.url.length > 40 ? shareData.url.substring(0, 40) + '...' : shareData.url}
              </div>
              <button
                onClick={() => copyToClipboard(shareData.url)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                  copySuccess
                    ? 'bg-success text-white' :'bg-primary text-white hover:bg-primary-600'
                }`}
              >
                {copySuccess ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        </div>
        
        {/* Travel Tips */}
        <div className="mt-6 pt-6 border-t border-border">
          <h4 className="font-medium text-text-primary mb-3">Share & Save</h4>
          <div className="space-y-2 text-sm text-text-secondary">
            <div className="flex items-center space-x-2">
              <Icon name="Camera" size={14} />
              <span>Tag @StayFinder in your travel photos for a chance to be featured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Hash" size={14} />
              <span>Use #{shareData.hashtags.join(' #')} to connect with other travelers</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Heart" size={14} />
              <span>Share your experience to help other travelers discover amazing places</span>
            </div>
          </div>
        </div>
      </div>

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-text-primary">Share Your Trip</h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="text-text-secondary hover:text-text-primary"
              >
                <Icon name="X" size={20} />
              </button>
            </div>
            
            {/* Preview */}
            <div className="bg-surface rounded-lg p-4 mb-6">
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={20} color="white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-text-primary mb-1">{shareData.title}</h4>
                  <p className="text-sm text-text-secondary">{shareData.text}</p>
                </div>
              </div>
            </div>
            
            {/* Social Platforms */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {socialPlatforms.map((platform) => (
                <button
                  key={platform.name}
                  onClick={() => {
                    handleShare(platform);
                    setShowShareModal(false);
                  }}
                  className="flex items-center space-x-3 p-3 border border-border rounded-lg hover:bg-primary-50 hover:border-primary-200 transition-all duration-200"
                >
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: platform.color }}
                  >
                    <Icon name={platform.icon} size={16} color="white" />
                  </div>
                  <span className="font-medium text-text-primary">{platform.name}</span>
                </button>
              ))}
            </div>
            
            {/* Copy Link */}
            <div className="border-t border-border pt-4">
              <label className="block text-sm font-medium text-text-primary mb-2">
                Or copy link to share anywhere:
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={shareData.url}
                  readOnly
                  className="flex-1 px-3 py-2 border border-border rounded-lg bg-surface text-sm"
                />
                <button
                  onClick={() => copyToClipboard(shareData.url)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                    copySuccess
                      ? 'bg-success text-white' :'bg-primary text-white hover:bg-primary-600'
                  }`}
                >
                  {copySuccess ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SocialSharing;