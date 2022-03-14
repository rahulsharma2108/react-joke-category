import React, { useState, useEffect } from 'react';

export const Counter = ({ requestJoke }) => {
  const [counter, setCounter] = useState(15);

  const newData = () => {
    setCounter(15);
    requestJoke();
  };

  useEffect(() => {
    counter > 0 &&
      setTimeout(() => {
        setCounter(counter - 1);
      }, 1000);

    counter === 0 && newData();
  }, [counter]);

  return <div>Time Remaining: {counter}</div>;
};
