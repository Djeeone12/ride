import { useCallback, useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 40.7128,
  lng: -74.0060,
};

export default function Map() {
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={13}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        styles: [
          {
            featureType: 'all',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#7c93a3' }],
          },
          {
            featureType: 'administrative.country',
            elementType: 'geometry',
            stylers: [{ visibility: 'on' }],
          },
          {
            featureType: 'landscape',
            elementType: 'geometry',
            stylers: [{ color: '#f5f5f5' }],
          },
        ],
      }}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}