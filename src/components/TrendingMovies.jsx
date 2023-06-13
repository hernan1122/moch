import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ListHome.css'

//icons
import {MdOutlineNavigateNext} from 'react-icons/md'

export function TrendingMovies() {
  const [movies, setMovies] = useState([])
  const [movie, setMovie] = useState('')

  const API_KEY = '763eb5981208a184a1e9429b05166e9c'
  const URL_IMAGE = 'https://image.tmdb.org/t/p/w300'
  const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        setMovies(data.results)
        setMovie(data.results[0])
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  return (
    <div className='list-home'>
      <div className='list-home-first-movie'>
        {<img src={`${URL_IMAGE + movie.poster_path}`} alt={`image: ${movie.title}`} />}
      </div>
      <div className='list-home-container-title'>
        <h2>Peliculas tendencias</h2>
        <Link to={'/more-trending-movies'} className='list-home-link'>
          Más
          <MdOutlineNavigateNext className='list-home-icon' />
        </Link>
      </div>
      <div className='list-home-container'>
        {movies.map((movie) => {
          return (
            <div key={movie.id}>
              <img src={`${URL_IMAGE + movie.poster_path}`} alt={`image: ${movie.title}`} />
            </div>
          )
        })}
      </div>
    </div>
  );
}
