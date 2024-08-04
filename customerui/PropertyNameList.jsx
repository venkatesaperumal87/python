import React from 'react';
import './propertyNameList.css';

const propertyNames = [
  'House',
  'PG',
  'Apartment',
  'Plot'
];

const PropertyNameList = ({ onFilterChange }) => {
  return (
    <div className="property-name-list">
      <ul>
        {propertyNames.map((name, index) => (
          <li key={index} onClick={() => onFilterChange('propertyName', name)} className="property-name-item">{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyNameList;
