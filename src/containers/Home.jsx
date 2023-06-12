import React from 'react';
import { Header } from '../components/Header';
import { TrendingMovies } from '../components/TrendingMovies';
import { TrendingTV } from '../components/TrendingTV';
import { Categories } from '../components/Categories';
import { Menu } from '../components/Menu'
import '../styles/Home.css';

function Home() {
  return (
    <div className='Home'>
      <Header />
      <TrendingMovies />
      <TrendingTV />
      <Categories />
      <Menu />
    </div>
  );
}

export default Home;
