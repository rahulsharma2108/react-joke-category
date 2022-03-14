import React, { useContext } from 'react';
import AppContext from '../Common/AppContext';
import { Button } from '../Button';
import './joke.css';

export const Joke = () => {
  const { joke } = useContext(AppContext);
  return (
    <div>
      <p className="msg">{joke}</p>
      <Button />
    </div>
  );
};
