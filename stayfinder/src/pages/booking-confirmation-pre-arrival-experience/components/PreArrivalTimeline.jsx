import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

function PreArrivalTimeline({ checkInDate }) {
  const [completedTasks, setCompletedTasks] = useState(new Set());

  const checkInDateTime = new Date(checkInDate);
  const today = new Date();
  const daysUntilCheckIn = Math.ceil((checkInDateTime - today) / (1000 * 60 * 60 * 24));

  const timelineItems = [
    {
      id: 'booking-confirmed',
      title: 'Booking Confirmed',
      description: 'Your reservation is secured and confirmed',
      date: 'Today',
      status: 'completed',
      icon: 'CheckCircle',
      color: 'success',
      tasks: []
    },
    {
      id: 'week-before',
      title: '1 Week Before Arrival',
      description: 'Prepare for your amazing trip',
      date: daysUntilCheckIn <= 7 ? 'Available Now' : `${Math.max(0, daysUntilCheckIn - 7)} days to go`,
      status: daysUntilCheckIn <= 7 ? 'active' : 'upcoming',
      icon: 'Calendar',
      color: 'primary',
      tasks: [
        {
          id: 'packing-list',
          title: 'Download Packing Checklist',
          description: 'Customized for Santorini weather and activities',
          actionable: true
        },
        {
          id: 'travel-insurance',
          title: 'Review Travel Insurance',
          description: 'Ensure you have adequate coverage for your trip',
          actionable: false
        },
        {
          id: 'currency-exchange',
          title: 'Currency Exchange',
          description: 'Get some Euros for local purchases and tips',
          actionable: false
        },
        {
          id: 'restaurant-reservations',
          title: 'Make Restaurant Reservations',
          description: 'Book popular restaurants for your stay',
          actionable: true
        }
      ]
    },
    {
      id: 'two-days-before',
      title: '48 Hours Before Arrival',
      description: 'Final preparations and local insights',
      date: daysUntilCheckIn <= 2 ? 'Available Now' : `${Math.max(0, daysUntilCheckIn - 2)} days to go`,
      status: daysUntilCheckIn <= 2 ? 'active' : 'upcoming',
      icon: 'Clock',
      color: 'warning',
      tasks: [
        {
          id: 'weather-check',
          title: 'Check Weather Forecast',
          description: 'Current: 28°C, Sunny with light winds',
          actionable: true
        },
        {
          id: 'local-events',
          title: 'Local Events & Festivals',
          description: 'See what\'s happening during your stay',
          actionable: true
        },
        {
          id: 'transportation-confirm',
          title: 'Confirm Transportation',
          description: 'Verify airport transfer or rental car details',
          actionable: false
        },
        {
          id: 'emergency-contacts',
          title: 'Save Emergency Contacts',
          description: 'Host, local emergency services, and StayFinder support',
          actionable: true
        }
      ]
    },
    {
      id: 'day-of-travel',
      title: 'Day of Travel',
      description: 'You\'re almost there!',
      date: daysUntilCheckIn === 0 ? 'Today' : `${daysUntilCheckIn} days to go`,
      status: daysUntilCheckIn === 0 ? 'active' : 'upcoming',
      icon: 'Plane',
      color: 'accent',
      tasks: [
        {
          id: 'check-in-reminder',
          title: 'Check-in Reminder',
          description: 'Check-in available from 3:00 PM',
          actionable: false
        },
        {
          id: 'host-contact',
          title: 'Contact Host if Needed',
          description: 'Maria is available for any last-minute questions',
          actionable: true
        },
        {
          id: 'navigation-ready',
          title: 'Navigation Ready',
          description: 'Download offline maps and directions',
          actionable: true
        },
        {
          id: 'arrival-notification',
          title: 'Arrival Notification',
          description: 'Let your host know when you\'ve arrived safely',
          actionable: false
        }
      ]
    }
  ];

  const toggleTask = (taskId) => {
    const newCompletedTasks = new Set(completedTasks);
    if (newCompletedTasks.has(taskId)) {
      newCompletedTasks.delete(taskId);
    } else {
      newCompletedTasks.add(taskId);
    }
    setCompletedTasks(newCompletedTasks);
  };

  const getStatusColor = (status, color) => {
    if (status === 'completed') return 'success';
    if (status === 'active') return color;
    return 'text-secondary';
  };

  const getStatusIcon = (status, icon) => {
    if (status === 'completed') return 'CheckCircle';
    if (status === 'upcoming') return 'Clock';
    return icon;
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-text-primary mb-2">Pre-Arrival Timeline</h2>
        <p className="text-text-secondary">
          {daysUntilCheckIn > 0 
            ? `${daysUntilCheckIn} days until your amazing Santorini adventure begins!`
            : 'Your Santorini adventure begins today!'
          }
        </p>
      </div>

      {/* Progress Overview */}
      <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-text-primary">Trip Preparation</h3>
          <span className="text-sm text-text-secondary">
            {completedTasks.size} of {timelineItems.reduce((acc, item) => acc + item.tasks.length, 0)} tasks completed
          </span>
        </div>
        
        <div className="w-full bg-white rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-500"
            style={{ 
              width: `${(completedTasks.size / timelineItems.reduce((acc, item) => acc + item.tasks.length, 0)) * 100}%` 
            }}
          />
        </div>
      </div>

      {/* Timeline */}
      <div className="space-y-8">
        {timelineItems.map((item, index) => (
          <div key={item.id} className="relative">
            {/* Timeline Line */}
            {index < timelineItems.length - 1 && (
              <div className="absolute left-6 top-12 w-0.5 h-16 bg-border" />
            )}
            
            <div className="flex items-start space-x-4">
              {/* Timeline Icon */}
              <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                item.status === 'completed' 
                  ? 'bg-success text-white' 
                  : item.status === 'active'
                  ? `bg-${item.color} text-white`
                  : 'bg-surface text-text-secondary border-2 border-border'
              }`}>
                <Icon 
                  name={getStatusIcon(item.status, item.icon)} 
                  size={20} 
                  color={item.status === 'upcoming' ? 'var(--color-text-secondary)' : 'white'} 
                />
              </div>
              
              {/* Timeline Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-text-primary">{item.title}</h3>
                  <span className={`text-sm px-3 py-1 rounded-full ${
                    item.status === 'completed' 
                      ? 'bg-success-50 text-success-700'
                      : item.status === 'active' ?'bg-primary-50 text-primary-700' :'bg-surface text-text-secondary'
                  }`}>
                    {item.date}
                  </span>
                </div>
                
                <p className="text-text-secondary mb-4">{item.description}</p>
                
                {/* Tasks */}
                {item.tasks.length > 0 && (
                  <div className="bg-white rounded-lg border border-border p-4">
                    <div className="space-y-3">
                      {item.tasks.map((task) => (
                        <div key={task.id} className="flex items-start space-x-3">
                          <button
                            onClick={() => toggleTask(task.id)}
                            className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-200 ${
                              completedTasks.has(task.id)
                                ? 'bg-success border-success text-white' :'border-border hover:border-primary'
                            }`}
                          >
                            {completedTasks.has(task.id) && (
                              <Icon name="Check" size={12} color="white" strokeWidth={3} />
                            )}
                          </button>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <h4 className={`font-medium ${
                                completedTasks.has(task.id) 
                                  ? 'text-text-secondary line-through' :'text-text-primary'
                              }`}>
                                {task.title}
                              </h4>
                              {task.actionable && !completedTasks.has(task.id) && (
                                <button className="text-primary hover:text-primary-600 text-sm font-medium transition-colors duration-200">
                                  Take Action
                                </button>
                              )}
                            </div>
                            <p className={`text-sm ${
                              completedTasks.has(task.id) 
                                ? 'text-text-secondary line-through' :'text-text-secondary'
                            }`}>
                              {task.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-brand p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:bg-primary-50 hover:border-primary-200 transition-all duration-200">
            <Icon name="Download" size={20} color="var(--color-primary)" />
            <div className="text-left">
              <p className="font-medium text-text-primary">Download Packing List</p>
              <p className="text-sm text-text-secondary">Customized for your destination</p>
            </div>
          </button>
          
          <button className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:bg-primary-50 hover:border-primary-200 transition-all duration-200">
            <Icon name="Cloud" size={20} color="var(--color-primary)" />
            <div className="text-left">
              <p className="font-medium text-text-primary">Weather Updates</p>
              <p className="text-sm text-text-secondary">Get daily forecasts via email</p>
            </div>
          </button>
          
          <button className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:bg-primary-50 hover:border-primary-200 transition-all duration-200">
            <Icon name="Calendar" size={20} color="var(--color-primary)" />
            <div className="text-left">
              <p className="font-medium text-text-primary">Local Events</p>
              <p className="text-sm text-text-secondary">Discover what's happening</p>
            </div>
          </button>
          
          <button className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:bg-primary-50 hover:border-primary-200 transition-all duration-200">
            <Icon name="MessageCircle" size={20} color="var(--color-primary)" />
            <div className="text-left">
              <p className="font-medium text-text-primary">Contact Host</p>
              <p className="text-sm text-text-secondary">Ask questions anytime</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PreArrivalTimeline;