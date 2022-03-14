import React, { useContext } from 'react';
import AppContext from '../Common/AppContext';
import './joke.css';

export const Joke = () => {
  const { joke } = useContext(AppContext);
  return <p className="msg">{joke}</p>;
};
