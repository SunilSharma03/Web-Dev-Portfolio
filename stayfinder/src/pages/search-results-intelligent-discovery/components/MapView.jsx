import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

function MapView({ properties, center, selectedProperties, onPropertySelect }) {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [mapZoom, setMapZoom] = useState(12);
  const [showClusters, setShowClusters] = useState(true);

  // Mock map clusters based on zoom level
  const clusters = [
    { id: 'cluster-1', lat: -8.6905, lng: 115.2126, count: 8, avgPrice: 220 },
    { id: 'cluster-2', lat: -8.5069, lng: 115.2625, count: 5, avgPrice: 180 },
    { id: 'cluster-3', lat: -8.6847, lng: 115.2623, count: 3, avgPrice: 285 }
  ];

  const handlePropertyClick = (property) => {
    setSelectedProperty(property);
  };

  const handleClusterClick = (cluster) => {
    setMapZoom(15);
    setShowClusters(false);
  };

  const zoomIn = () => {
    setMapZoom(prev => Math.min(prev + 1, 18));
    if (mapZoom >= 14) setShowClusters(false);
  };

  const zoomOut = () => {
    setMapZoom(prev => Math.max(prev - 1, 8));
    if (mapZoom <= 13) setShowClusters(true);
  };

  return (
    <div className="relative h-full bg-surface">
      {/* Map Container */}
      <div className="absolute inset-0">
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          title="Bali Properties Map"
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps?q=${center.lat},${center.lng}&z=${mapZoom}&output=embed`}
          className="border-0"
        />
      </div>

      {/* Map Controls */}
      <div className="absolute top-4 right-4 flex flex-col space-y-2 z-10">
        <button
          onClick={zoomIn}
          className="w-10 h-10 bg-white hover:bg-surface rounded-lg shadow-md flex items-center justify-center transition-colors"
        >
          <Icon name="Plus" size={16} />
        </button>
        <button
          onClick={zoomOut}
          className="w-10 h-10 bg-white hover:bg-surface rounded-lg shadow-md flex items-center justify-center transition-colors"
        >
          <Icon name="Minus" size={16} />
        </button>
      </div>

      {/* Property Markers/Clusters Overlay */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {showClusters ? (
          // Cluster markers
          clusters.map((cluster) => (
            <div
              key={cluster.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-pointer"
              style={{
                left: `${((cluster.lng - center.lng) * 1000 + 50)}%`,
                top: `${(-(cluster.lat - center.lat) * 1000 + 50)}%`
              }}
              onClick={() => handleClusterClick(cluster)}
            >
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold shadow-lg hover:bg-primary-600 transition-colors">
                {cluster.count}
              </div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-white px-2 py-1 rounded shadow-md text-xs font-medium whitespace-nowrap">
                ${cluster.avgPrice} avg
              </div>
            </div>
          ))
        ) : (
          // Individual property markers
          properties.map((property) => (
            <div
              key={property.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-pointer"
              style={{
                left: `${((property.coordinates.lng - center.lng) * 2000 + 50)}%`,
                top: `${(-(property.coordinates.lat - center.lat) * 2000 + 50)}%`
              }}
              onClick={() => handlePropertyClick(property)}
            >
              <div className={`bg-white rounded-lg shadow-lg p-2 hover:shadow-xl transition-all ${
                selectedProperties.includes(property.id) ? 'ring-2 ring-primary' : ''
              } ${selectedProperty?.id === property.id ? 'scale-110' : ''}`}>
                <div className="text-sm font-bold text-text-primary">${property.price}</div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Property Details Popup */}
      {selectedProperty && (
        <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl shadow-brand-lg p-4 z-20 max-w-sm mx-auto">
          <div className="flex items-start space-x-3">
            <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={selectedProperty.images[0]}
                alt={selectedProperty.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-text-primary text-sm line-clamp-1">
                {selectedProperty.title}
              </h4>
              <p className="text-xs text-text-secondary flex items-center mt-1">
                <Icon name="MapPin" size={12} className="mr-1" />
                {selectedProperty.location}
              </p>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center space-x-1">
                  <Icon name="Star" size={12} className="text-secondary" fill="currentColor" />
                  <span className="text-xs font-medium">{selectedProperty.rating}</span>
                  <span className="text-xs text-text-secondary">({selectedProperty.reviewCount})</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-text-primary">${selectedProperty.price}</div>
                  <div className="text-xs text-text-secondary">per night</div>
                </div>
              </div>
            </div>
            <button
              onClick={() => setSelectedProperty(null)}
              className="p-1 hover:bg-surface rounded-md transition-colors flex-shrink-0"
            >
              <Icon name="X" size={16} />
            </button>
          </div>
          
          <div className="flex items-center space-x-2 mt-3 pt-3 border-t border-border">
            <button
              onClick={() => onPropertySelect(selectedProperty.id)}
              className={`flex-1 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                selectedProperties.includes(selectedProperty.id)
                  ? 'bg-primary text-white' :'border border-border text-text-secondary hover:border-primary hover:text-primary'
              }`}
            >
              {selectedProperties.includes(selectedProperty.id) ? 'Added to Compare' : 'Add to Compare'}
            </button>
            <button className="flex-1 btn-primary text-xs py-2">
              View Details
            </button>
          </div>
        </div>
      )}

      {/* Map Legend */}
      <div className="absolute top-4 left-4 bg-white rounded-lg shadow-md p-3 z-10">
        <h4 className="text-sm font-semibold text-text-primary mb-2">Map Legend</h4>
        <div className="space-y-2 text-xs">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-primary rounded-full"></div>
            <span className="text-text-secondary">Property Clusters</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-white border border-border rounded"></div>
            <span className="text-text-secondary">Individual Properties</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-white border-2 border-primary rounded"></div>
            <span className="text-text-secondary">Selected for Compare</span>
          </div>
        </div>
      </div>

      {/* Results Counter */}
      <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-md px-3 py-2 z-10">
        <div className="text-sm font-medium text-text-primary">
          {properties.length} properties shown
        </div>
      </div>
    </div>
  );
}

export default MapView;