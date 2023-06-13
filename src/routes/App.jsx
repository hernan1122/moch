import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Search from '../containers/Search';
import Favorites from '../containers/Favorites';
import MoreTrendingMovies from '../containers/MoreTrendingMovies';
import MoreTrendingTV from '../containers/MoreTrendingTV';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/more-trending-movies' element={<MoreTrendingMovies />} />
        <Route path='/more-trending-tv' element={<MoreTrendingTV />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
