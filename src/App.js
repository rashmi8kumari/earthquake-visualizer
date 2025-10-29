import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import FilterPanel from './components/FilterPanel';
import MapView from './components/MapView';
import useEarthquakeData from './hooks/useEarthquakeData';

function App() {
  const [magnitude, setMagnitude] = useState(0);
  const [timeRange, setTimeRange] = useState('all_day');

  const apiUrl = useMemo(() => (
    `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/${timeRange}.geojson`
  ), [timeRange]);

  const { data: earthquakes, loading, error } = useEarthquakeData(apiUrl);

  const filteredData = earthquakes.filter(eq => eq.properties.mag >= magnitude);

  return (
    <div>
      <Header />
      <div className="container text-center">
        <FilterPanel
          magnitude={magnitude}
          setMagnitude={setMagnitude}
          timeRange={timeRange}
          setTimeRange={setTimeRange}
        />

        {loading && <p>Loading earthquakes data...</p>}
        {error && <p className="text-danger">{error}</p>}
        {!loading && !error && <MapView earthquakes={filteredData} />}
      </div>
    </div>
  );
}

export default App;

