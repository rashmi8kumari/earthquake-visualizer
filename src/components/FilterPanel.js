import React from 'react';

const FilterPanel = ({ magnitude, setMagnitude, timeRange, setTimeRange }) => {
  return (
    <div className="d-flex justify-content-center align-items-center gap-3 my-3">
      <div>
        <label className="form-label me-2 fw-bold">Min Magnitude:</label>
        <input
          type="number"
          className="form-control"
          style={{ width: "120px", display: "inline-block" }}
          value={magnitude}
          onChange={(e) => setMagnitude(e.target.value)}
          min="0"
          max="10"
          step="0.1"
        />
      </div>

      <div>
        <label className="form-label me-2 fw-bold">Time Range:</label>
        <select
          className="form-select"
          style={{ width: "180px", display: "inline-block" }}
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
        >
          <option value="all_day">Last 24 Hours</option>
          <option value="all_week">Last 7 Days</option>
          <option value="all_month">Last 30 Days</option>
        </select>
      </div>
    </div>
  );
};

export default FilterPanel;
