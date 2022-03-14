import React, { useContext } from 'react';
import AppContext from '../Common/AppContext';
import './jokelist.css';

export const JokesList = () => {
  const { likedJokes } = useContext(AppContext);

  const renderJokes = () => {
    return likedJokes.map((joke, index) => <li key={index}>{joke}</li>);
  };

  return (
    <ul className="jokesContainer">
      <li className="header">Liked Comments</li>
      {renderJokes()}
    </ul>
  );
};
