import React, { useState, useEffect, useContext } from 'react';
import AppContext from './Common/AppContext';

export const Counter = () => {
  const { getJokeData, counter, setCounter, setTimer } = useContext(AppContext);

  const newData = () => {
    setCounter(15);
    getJokeData();
  };

  useEffect(() => {
    counter > 0 &&
      setTimer(
        setTimeout(() => {
          setCounter(counter - 1);
        }, 1000)
      );

    counter === 0 && newData();
  }, [counter]);

  return <div>Time Remaining: {counter}</div>;
};
