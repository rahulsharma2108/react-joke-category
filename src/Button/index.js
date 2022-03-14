import React, { useContext, useState } from 'react';
import AppContext from '../Common/AppContext';

export const Button = () => {
  const {
    likedJokes,
    setLikedJokes,
    joke,
    getJokeData,
    clearTimer,
    setCounter,
  } = useContext(AppContext);

  const likeJoke = () => {
    setLikedJokes([...likedJokes, joke]);
    getJokeData();
    clearTimer();
    setCounter(15);
  };
  return <button onClick={likeJoke}>Like</button>;
};
