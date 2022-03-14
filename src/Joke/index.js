import React from 'react';
import './joke.css';

export const Joke = ({ joke = '' }) => {
  return <p className="msg">{joke}</p>;
};
