import { useState, useEffect } from 'react';

export default function useEarthquakeData(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEarthquakes = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json.features);
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchEarthquakes();
  }, [url]);

  return { data, loading, error };
}
