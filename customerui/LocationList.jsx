import React from 'react';
import './locationList.css';

const locations = [
  'Tambaram',
  'Porur',
  'Guindy',
  'Kelambakkam',
  'Redhills',
  'Koyembedu'
];

const LocationList = ({ onFilterChange }) => {
  return (
    <div className="location-list">
      <ul>
        {locations.map((location, index) => (
          <li key={index} onClick={() => onFilterChange(location)} className="location-item">{location}</li>
        ))}
      </ul>
    </div>
  );
};

export default LocationList;
