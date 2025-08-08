import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

function Messages() {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [newMessage, setNewMessage] = useState('');

  const conversations = [
    {
      id: 1,
      host: {
        name: "Maria Konstantinos",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
        property: "Sunset Villa with Infinity Pool",
        location: "Santorini, Greece"
      },
      lastMessage: "Looking forward to welcoming you next week! I\'ve prepared some local recommendations.",
      timestamp: new Date(Date.now() - 3600000),
      unread: 2,
      status: "online",
      messages: [
        {
          id: 1,
          sender: "host",
          content: "Hi Sarah! Thank you for booking the Sunset Villa. I\'m excited to host you!",
          timestamp: new Date(Date.now() - 86400000),
          read: true
        },
        {
          id: 2,
          sender: "guest",
          content: "Hi Maria! We\'re so excited for our stay. Could you recommend some good restaurants nearby?",
          timestamp: new Date(Date.now() - 82800000),
          read: true
        },
        {
          id: 3,
          sender: "host",
          content: "Absolutely! I have a list of my favorite local spots. Ambrosia Restaurant has the best sunset views, and Selene offers amazing traditional Greek cuisine.",
          timestamp: new Date(Date.now() - 7200000),
          read: true
        },
        {
          id: 4,
          sender: "host",
          content: "Looking forward to welcoming you next week! I\'ve prepared some local recommendations.",
          timestamp: new Date(Date.now() - 3600000),
          read: false
        }
      ]
    },
    {
      id: 2,
      host: {
        name: "Hiroshi Tanaka",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
        property: "Traditional Ryokan Experience",
        location: "Kyoto, Japan"
      },
      lastMessage: "The cherry blossoms will be in full bloom during your visit!",
      timestamp: new Date(Date.now() - 7200000),
      unread: 1,
      status: "away",
      messages: [
        {
          id: 1,
          sender: "guest",
          content: "Hello! I\'m wondering about the traditional tea ceremony experience you mentioned.",
          timestamp: new Date(Date.now() - 14400000),
          read: true
        },
        {
          id: 2,
          sender: "host",
          content: "Hello Sarah-san! The tea ceremony is included in your stay. We conduct it every morning at 9 AM in our traditional tea room.",
          timestamp: new Date(Date.now() - 10800000),
          read: true
        },
        {
          id: 3,
          sender: "host",
          content: "The cherry blossoms will be in full bloom during your visit!",
          timestamp: new Date(Date.now() - 7200000),
          read: false
        }
      ]
    },
    {
      id: 3,
      host: {
        name: "Giuseppe Romano",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
        property: "Vineyard Villa with Wine Tasting",
        location: "Tuscany, Italy"
      },
      lastMessage: "Grazie for the wonderful review! Hope to see you again soon.",
      timestamp: new Date(Date.now() - 172800000),
      unread: 0,
      status: "offline",
      messages: [
        {
          id: 1,
          sender: "guest",
          content: "Thank you for an amazing stay! The wine tasting was incredible.",
          timestamp: new Date(Date.now() - 259200000),
          read: true
        },
        {
          id: 2,
          sender: "host",
          content: "Grazie for the wonderful review! Hope to see you again soon.",
          timestamp: new Date(Date.now() - 172800000),
          read: true
        }
      ]
    }
  ];

  const quickResponses = [
    "Thank you for the information!",
    "That sounds perfect!",
    "What time should we arrive?",
    "Could you provide directions?",
    "We're looking forward to our stay!"
  ];

  const formatTime = (date) => {
    const now = new Date();
    const diff = now - date;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days > 0) {
      return `${days}d ago`;
    } else if (hours > 0) {
      return `${hours}h ago`;
    } else {
      return 'Just now';
    }
  };

  const formatMessageTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const handleSendMessage = () => {
    if (newMessage.trim() && selectedConversation) {
      // In a real app, this would send the message
      setNewMessage('');
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'online':
        return 'bg-success';
      case 'away':
        return 'bg-warning';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-text-primary">Messages</h2>
          <p className="text-text-secondary mt-1">Communicate with your hosts</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-text-secondary">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-success rounded-full"></div>
            <span>Online</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-warning rounded-full"></div>
            <span>Away</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <span>Offline</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
        {/* Conversations List */}
        <div className="lg:col-span-1 card p-0 overflow-hidden">
          <div className="p-4 border-b border-border">
            <h3 className="font-semibold text-text-primary">Conversations</h3>
          </div>
          <div className="overflow-y-auto h-full">
            {conversations.map((conversation) => (
              <button
                key={conversation.id}
                onClick={() => setSelectedConversation(conversation)}
                className={`w-full p-4 text-left hover:bg-surface transition-colors duration-200 border-b border-border last:border-b-0 ${
                  selectedConversation?.id === conversation.id ? 'bg-primary-50 border-primary-200' : ''
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className="relative">
                    <Image
                      src={conversation.host.avatar}
                      alt={conversation.host.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className={`absolute -bottom-1 -right-1 w-4 h-4 ${getStatusColor(conversation.status)} rounded-full border-2 border-white`}></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-text-primary truncate">
                        {conversation.host.name}
                      </h4>
                      <span className="text-xs text-text-secondary">
                        {formatTime(conversation.timestamp)}
                      </span>
                    </div>
                    <p className="text-xs text-text-secondary mb-1 truncate">
                      {conversation.host.property}
                    </p>
                    <p className="text-sm text-text-secondary truncate">
                      {conversation.lastMessage}
                    </p>
                    {conversation.unread > 0 && (
                      <div className="mt-2">
                        <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">
                          {conversation.unread}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="lg:col-span-2 card p-0 overflow-hidden flex flex-col">
          {selectedConversation ? (
            <>
              {/* Chat Header */}
              <div className="p-4 border-b border-border bg-surface">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Image
                      src={selectedConversation.host.avatar}
                      alt={selectedConversation.host.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className={`absolute -bottom-1 -right-1 w-3 h-3 ${getStatusColor(selectedConversation.status)} rounded-full border-2 border-white`}></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-text-primary">
                      {selectedConversation.host.name}
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {selectedConversation.host.property} • {selectedConversation.host.location}
                    </p>
                  </div>
                  <button className="text-text-secondary hover:text-primary">
                    <Icon name="Phone" size={20} strokeWidth={2} />
                  </button>
                  <button className="text-text-secondary hover:text-primary">
                    <Icon name="MoreVertical" size={20} strokeWidth={2} />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {selectedConversation.messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'guest' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.sender === 'guest' ?'bg-primary text-white' :'bg-surface text-text-primary'
                    }`}>
                      <p className="text-sm">{message.content}</p>
                      <p className={`text-xs mt-1 ${
                        message.sender === 'guest' ? 'text-primary-200' : 'text-text-secondary'
                      }`}>
                        {formatMessageTime(message.timestamp)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Responses */}
              <div className="px-4 py-2 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  {quickResponses.map((response, index) => (
                    <button
                      key={index}
                      onClick={() => setNewMessage(response)}
                      className="text-xs bg-surface text-text-secondary px-3 py-1 rounded-full hover:bg-primary-50 hover:text-primary transition-colors duration-200"
                    >
                      {response}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-border">
                <div className="flex items-center space-x-3">
                  <button className="text-text-secondary hover:text-primary">
                    <Icon name="Paperclip" size={20} strokeWidth={2} />
                  </button>
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Type your message..."
                      className="input-field pr-12"
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary hover:text-primary">
                      <Icon name="Smile" size={20} strokeWidth={2} />
                    </button>
                  </div>
                  <button
                    onClick={handleSendMessage}
                    disabled={!newMessage.trim()}
                    className="btn-primary px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Icon name="Send" size={16} strokeWidth={2} />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MessageCircle" size={32} color="var(--color-primary)" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Select a conversation</h3>
                <p className="text-text-secondary">Choose a conversation from the list to start messaging</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Messages;