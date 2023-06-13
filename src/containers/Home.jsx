import React from 'react';
import { Header } from '../components/Header';
import { TrendingMovies } from '../components/TrendingMovies';
import { TrendingTV } from '../components/TrendingTV';
import { Discover } from '../components/Discover';
import { CategoriesMovies } from '../components/CategoriesMovies';
import { CategoriesTV } from '../components/CategoriesTV';
import { Menu } from '../components/Menu'
import '../styles/Home.css';

function Home() {
  return (
    <div className='Home'>
      <Header />
      <TrendingMovies />
      <TrendingTV />
      <Discover />
      <CategoriesMovies />
      <CategoriesTV />
      <Menu />
    </div>
  );
}

export default Home;
