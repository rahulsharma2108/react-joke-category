import React, { useEffect, useState } from 'react';
import { Dropdown } from './Dropdown';
import { Joke } from './Joke';
import { Counter } from './Counter';
import { makeGetCall } from './Common/utilities';
import './style.css';

export default function App() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [joke, setJoke] = useState('');
  const CATEGORIES_URL = 'https://api.chucknorris.io/jokes/categories';
  const JOKE_URL = `https://api.chucknorris.io/jokes/random?category=${selectedCategory}`;

  const populateCategories = (data) => {
    setCategories(data);
    data?.[0] && setSelectedCategory(data?.[0]);
  };
  const errorFn = (err) => {
    console.log(err);
  };
  const getJoke = (e) => {
    setSelectedCategory(e.target.value);
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

  useEffect(() => {
    makeGetCall(CATEGORIES_URL, populateCategories, errorFn);
  }, []);

  useEffect(() => {
    getJokeData();
  }, [selectedCategory]);

  return (
    <div className="app">
      <div className="appContent">
        <Dropdown categories={categories} renderJoke={getJoke} />
        <Joke joke={joke} />
        <Counter requestJoke={getJokeData}></Counter>
      </div>
    </div>
  );
}
