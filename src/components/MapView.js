import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import React from 'react';

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
});

const MapView = ({ earthquakes }) => {
  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      style={{ height: "80vh", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {earthquakes.map((eq) => {
        const [lon, lat] = eq.geometry.coordinates;
        const { mag, place, time } = eq.properties;

        return (
          <Marker key={eq.id} position={[lat, lon]} icon={markerIcon}>
            <Popup>
              <strong>{place}</strong><br />
              Magnitude: {mag}<br />
              Time: {new Date(time).toLocaleString()}
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default MapView;
