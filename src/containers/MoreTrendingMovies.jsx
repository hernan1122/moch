import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { ButtonMoreBack } from '../components/ButtonMoreBack';
import { Menu } from '../components/Menu';
import '../styles/More.css'

function MoreTrendingMovies() {
  const [moreMovies, setMoreMovies] = useState([])

  const API_KEY = '763eb5981208a184a1e9429b05166e9c'
  const URL_IMAGE = 'https://image.tmdb.org/t/p/w300'
  const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        setMoreMovies(data.results)
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  return (
    <div className='More'>
      <Header />
      <div className='More-container-title'>
        <h2>Peliculas tendencias</h2>
        <ButtonMoreBack to={'/'} children={'Atras'} />
      </div>
      <div className='More-container'>
        {moreMovies.map((more) => {
          return (
            <div key={more.id}>
              <img src={`${URL_IMAGE + more.poster_path}`} alt={`image: ${more.title}`} />
            </div>
          )
        })}
      </div>
      <Menu />
    </div>
  );
}

export default MoreTrendingMovies;
