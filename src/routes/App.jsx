import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Search from '../containers/Search';
import Favorites from '../containers/Favorites';
import MoreTrendingMovies from '../containers/MoreTrendingMovies';
import MoreTrendingTV from '../containers/MoreTrendingTV';
import Category from '../containers/Category';
import CardDetailsMovies from '../containers/CardDetailsMovies';
import CardDetailsTV from '../containers/CardDetailsTV';
import CardDetailsSeries from '../containers/CardDetailsSeries';
import CardDetailsPeople from '../containers/CardDetailsPeople';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/more-trending-movies' element={<MoreTrendingMovies />} />
        <Route path='/more-trending-tv' element={<MoreTrendingTV />} />
        <Route path='/category' element={<Category />} />
        <Route path='/details-movie' element={<CardDetailsMovies />} />
        <Route path='/details-tv' element={<CardDetailsTV />} />
        <Route path='/details-series' element={<CardDetailsSeries />} />
        <Route path='/details-person' element={<CardDetailsPeople />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
