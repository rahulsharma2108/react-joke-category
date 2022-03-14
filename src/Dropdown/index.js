import React, { useCallback, useContext } from 'react';
import AppContext from '../Common/AppContext';
import './dropdown.css';

export const Dropdown = () => {
  const { categories, setSelectedCategory, setCounter, clearTimer } =
    useContext(AppContext);
  const renderOptions = useCallback(() => {
    return categories.map((category, index) => (
      <option key={index}>{category}</option>
    ));
  }, [categories]);

  const updateCategory = (e) => {
    setSelectedCategory(e.target.value);
    clearTimer();
    setCounter(15);
  };

  return (
    <select className="customDropdown" onChange={updateCategory}>
      {renderOptions()}
    </select>
  );
};
