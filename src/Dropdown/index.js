import React, { useCallback } from 'react';
import './dropdown.css';

export const Dropdown = ({ categories, renderJoke }) => {
  const renderOptions = useCallback(() => {
    return categories.map((category, index) => (
      <option key={index}>{category}</option>
    ));
  }, [categories]);

  return (
    <select className="customDropdown" onChange={renderJoke}>
      {renderOptions()}
    </select>
  );
};
