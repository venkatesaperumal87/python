import React from 'react';
import './priceRangeList.css';

const priceRanges = [
  '1000 - 10000',
  '11000 - 20000',
  '21000 - 35000',
  '36000 - 50000',
  '51000 - 75000',
  '76000 - 100000',
  'Above'
];

const PriceRangeList = ({ onFilterChange }) => {
  return (
    <div className="price-range-list">
      <ul>
        {priceRanges.map((range, index) => (
          <li key={index} onClick={() => onFilterChange(range)} className="price-range-item">{range}</li>
        ))}
      </ul>
    </div>
  );
};

export default PriceRangeList;
