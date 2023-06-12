import React from 'react';
import { Header } from '../components/Header';
import { Trending } from '../components/Trending';
import { Categories } from '../components/Categories';
import { Menu } from '../components/Menu'
import '../styles/Home.css';

function Home() {
  return (
    <div className='Home'>
      <Header />
      <Trending />
      <Categories />
      <Menu />
    </div>
  );
}

export default Home;
