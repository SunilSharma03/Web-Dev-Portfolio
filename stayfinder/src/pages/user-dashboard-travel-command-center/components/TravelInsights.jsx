import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import Icon from '../../../components/AppIcon';

function TravelInsights() {
  const [timeRange, setTimeRange] = useState('year');

  const travelStats = {
    totalTrips: 24,
    totalNights: 156,
    totalSpent: 18750,
    averageRating: 4.7,
    favoriteDestination: "Europe",
    longestTrip: 14,
    shortestTrip: 2,
    averageTripLength: 6.5
  };

  const monthlyBookings = [
    { month: 'Jan', bookings: 2, spending: 1200 },
    { month: 'Feb', bookings: 1, spending: 800 },
    { month: 'Mar', bookings: 3, spending: 2100 },
    { month: 'Apr', bookings: 2, spending: 1600 },
    { month: 'May', bookings: 4, spending: 2800 },
    { month: 'Jun', bookings: 3, spending: 2200 },
    { month: 'Jul', bookings: 2, spending: 1500 },
    { month: 'Aug', bookings: 3, spending: 2400 },
    { month: 'Sep', bookings: 2, spending: 1800 },
    { month: 'Oct', bookings: 1, spending: 900 },
    { month: 'Nov', bookings: 1, spending: 700 },
    { month: 'Dec', bookings: 0, spending: 0 }
  ];

  const destinationData = [
    { name: 'Europe', value: 45, color: 'var(--color-primary)' },
    { name: 'Asia', value: 25, color: 'var(--color-secondary)' },
    { name: 'North America', value: 20, color: 'var(--color-accent)' },
    { name: 'Other', value: 10, color: 'var(--color-success)' }
  ];

  const propertyTypes = [
    { type: 'Villa', count: 8, percentage: 33 },
    { type: 'Apartment', count: 6, percentage: 25 },
    { type: 'Hotel', count: 4, percentage: 17 },
    { type: 'Unique Stay', count: 3, percentage: 13 },
    { type: 'Resort', count: 2, percentage: 8 },
    { type: 'Other', count: 1, percentage: 4 }
  ];

  const travelPatterns = [
    { pattern: 'Weekend Getaways', count: 12, icon: 'Calendar' },
    { pattern: 'Week-long Vacations', count: 8, icon: 'Plane' },
    { pattern: 'Extended Stays', count: 3, icon: 'Home' },
    { pattern: 'Business Travel', count: 1, icon: 'Briefcase' }
  ];

  const seasonalPreferences = [
    { season: 'Spring', trips: 6, avgRating: 4.8 },
    { season: 'Summer', trips: 10, avgRating: 4.6 },
    { season: 'Fall', trips: 5, avgRating: 4.9 },
    { season: 'Winter', trips: 3, avgRating: 4.5 }
  ];

  const achievements = [
    { 
      id: 1, 
      title: 'Globe Trotter', 
      description: 'Visited 10+ countries', 
      icon: 'Globe', 
      earned: true,
      date: '2023-08-15'
    },
    { 
      id: 2, 
      title: 'Review Master', 
      description: 'Written 15+ reviews', 
      icon: 'Star', 
      earned: true,
      date: '2023-11-20'
    },
    { 
      id: 3, 
      title: 'Unique Explorer', 
      description: 'Stayed in 5+ unique properties', 
      icon: 'Compass', 
      earned: true,
      date: '2024-01-10'
    },
    { 
      id: 4, 
      title: 'Loyalty Champion', 
      description: 'Book 25 trips (21/25)', 
      icon: 'Award', 
      earned: false,
      progress: 84
    },
    { 
      id: 5, 
      title: 'Photo Contributor', 
      description: 'Upload 50+ photos (32/50)', 
      icon: 'Camera', 
      earned: false,
      progress: 64
    }
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-text-primary">Travel Insights</h2>
          <p className="text-text-secondary mt-1">Your personal travel analytics and achievements</p>
        </div>
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="input-field text-sm py-2 px-3 w-auto"
        >
          <option value="year">This Year</option>
          <option value="all">All Time</option>
          <option value="6months">Last 6 Months</option>
        </select>
      </div>

      {/* Key Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card text-center">
          <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-3">
            <Icon name="MapPin" size={24} color="var(--color-primary)" strokeWidth={2} />
          </div>
          <div className="text-2xl font-bold text-text-primary mb-1">{travelStats.totalTrips}</div>
          <div className="text-text-secondary text-sm">Total Trips</div>
        </div>
        <div className="card text-center">
          <div className="w-12 h-12 bg-secondary-50 rounded-full flex items-center justify-center mx-auto mb-3">
            <Icon name="Moon" size={24} color="var(--color-secondary)" strokeWidth={2} />
          </div>
          <div className="text-2xl font-bold text-text-primary mb-1">{travelStats.totalNights}</div>
          <div className="text-text-secondary text-sm">Nights Stayed</div>
        </div>
        <div className="card text-center">
          <div className="w-12 h-12 bg-success-50 rounded-full flex items-center justify-center mx-auto mb-3">
            <Icon name="DollarSign" size={24} color="var(--color-success)" strokeWidth={2} />
          </div>
          <div className="text-2xl font-bold text-text-primary mb-1">{formatCurrency(travelStats.totalSpent)}</div>
          <div className="text-text-secondary text-sm">Total Spent</div>
        </div>
        <div className="card text-center">
          <div className="w-12 h-12 bg-accent-50 rounded-full flex items-center justify-center mx-auto mb-3">
            <Icon name="Star" size={24} color="var(--color-accent)" strokeWidth={2} />
          </div>
          <div className="text-2xl font-bold text-text-primary mb-1">{travelStats.averageRating}</div>
          <div className="text-text-secondary text-sm">Avg Rating Given</div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Monthly Booking Trends */}
        <div className="card">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Monthly Booking Trends</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyBookings}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="month" stroke="var(--color-text-secondary)" />
                <YAxis stroke="var(--color-text-secondary)" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="bookings" fill="var(--color-primary)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Destination Distribution */}
        <div className="card">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Favorite Destinations</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={destinationData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, value }) => `${name} ${value}%`}
                >
                  {destinationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Property Types & Travel Patterns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Property Types */}
        <div className="card">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Property Type Preferences</h3>
          <div className="space-y-3">
            {propertyTypes.map((type, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-text-primary">{type.type}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-24 bg-surface rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${type.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-text-secondary text-sm w-8">{type.count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Travel Patterns */}
        <div className="card">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Travel Patterns</h3>
          <div className="space-y-4">
            {travelPatterns.map((pattern, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 bg-surface rounded-lg">
                <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center">
                  <Icon name={pattern.icon} size={20} color="var(--color-primary)" strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-text-primary">{pattern.pattern}</div>
                  <div className="text-text-secondary text-sm">{pattern.count} trips</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Seasonal Preferences */}
      <div className="card">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Seasonal Travel Preferences</h3>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          {seasonalPreferences.map((season, index) => (
            <div key={index} className="text-center p-4 bg-surface rounded-lg">
              <div className="text-2xl font-bold text-primary mb-1">{season.trips}</div>
              <div className="text-text-primary font-medium mb-1">{season.season}</div>
              <div className="flex items-center justify-center space-x-1">
                <Icon name="Star" size={14} color="var(--color-secondary)" strokeWidth={2} className="fill-current" />
                <span className="text-text-secondary text-sm">{season.avgRating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="card">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Travel Achievements</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((achievement) => (
            <div 
              key={achievement.id} 
              className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                achievement.earned 
                  ? 'border-success bg-success-50' :'border-border bg-surface'
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  achievement.earned ? 'bg-success text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  <Icon name={achievement.icon} size={20} strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <h4 className={`font-semibold ${
                    achievement.earned ? 'text-success' : 'text-text-primary'
                  }`}>
                    {achievement.title}
                  </h4>
                  <p className="text-text-secondary text-sm mb-2">{achievement.description}</p>
                  {achievement.earned ? (
                    <p className="text-success text-xs">
                      Earned {new Date(achievement.date).toLocaleDateString()}
                    </p>
                  ) : (
                    <div className="space-y-1">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${achievement.progress}%` }}
                        ></div>
                      </div>
                      <p className="text-text-secondary text-xs">{achievement.progress}% complete</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Travel Goals */}
      <div className="card bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
            <Icon name="Target" size={24} color="white" strokeWidth={2} />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-text-primary mb-2">2024 Travel Goals</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4/6</div>
                <div className="text-text-secondary text-sm">New Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">21/25</div>
                <div className="text-text-secondary text-sm">Total Trips</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success">3/5</div>
                <div className="text-text-secondary text-sm">Unique Stays</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelInsights;