import React from 'react';
import { Header } from '../components/Header';
import { TrendingMovies } from '../components/TrendingMovies';
import { TrendingTV } from '../components/TrendingTV';
import { Discover } from '../components/Discover';
import { SeriesLists } from '../components/SeriesLists';
import { CategoriesMovies } from '../components/CategoriesMovies';
import { CategoriesTV } from '../components/CategoriesTV';
import { PeopleList } from '../components/PeopleList';
import { Menu } from '../components/Menu'
import '../styles/Home.css';

function Home() {
  return (
    <div className='Home'>
      <Header />
      <TrendingMovies />
      <TrendingTV />
      <Discover />
      <SeriesLists />
      <CategoriesMovies />
      <CategoriesTV />
      <PeopleList />
      <Menu />
    </div>
  );
}

export default Home;
