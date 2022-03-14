import React, { useEffect, useState } from 'react';
import { Dropdown } from './Dropdown';
import { Joke } from './Joke';
import { JokesList } from './JokesList';
import { Counter } from './Counter';
import { makeGetCall } from './Common/utilities';
import AppContext from './Common/AppContext';
import './style.css';

export default function App() {
  const [categories, setCategories] = useState([]);
  const [likedJokes, setLikedJokes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [joke, setJoke] = useState('');
  const [counter, setCounter] = useState(15);
  const [timer, setTimer] = useState('');

  const CATEGORIES_URL = 'https://api.chucknorris.io/jokes/categories';
  const JOKE_URL = `https://api.chucknorris.io/jokes/random?category=${selectedCategory}`;

  const populateCategories = (data) => {
    setCategories(data);
    data?.[0] && setSelectedCategory(data?.[0]);
  };
  const errorFn = (err) => {
    console.log(err);
  };
  const getJokeData = () => {
    if (selectedCategory !== '') {
      makeGetCall(JOKE_URL, populateJoke, errorFn);
    }
  };

  const populateJoke = (data) => {
    if (data?.value) {
      setJoke(data.value);
    }
  };

  const clearTimer = () => {
    clearTimeout(timer);
  };

  useEffect(() => {
    makeGetCall(CATEGORIES_URL, populateCategories, errorFn);
  }, []);

  useEffect(() => {
    getJokeData();
  }, [selectedCategory]);

  return (
    <div className="app">
      <div className="appContent">
        <AppContext.Provider
          value={{
            categories,
            selectedCategory,
            setSelectedCategory,
            joke,
            getJokeData,
            counter,
            setCounter,
            timer,
            setTimer,
            clearTimer,
            likedJokes,
            setLikedJokes,
          }}
        >
          <Dropdown />
          <Joke />
          <JokesList />
          <Counter></Counter>
        </AppContext.Provider>
      </div>
    </div>
  );
}
