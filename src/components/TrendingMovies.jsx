import React, { useEffect, useState } from 'react';
import { DataFile } from './DataFile';
import { ButtonMoreBack } from './ButtonMoreBack';
import '../styles/ListHome.css'

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
        <div className='list-home-first-movie-shadow'></div>
      </div>
      <div className='list-home-container-title'>
        <h2>Peliculas tendencias</h2>
        <ButtonMoreBack to={'/more-trending-movies'} children={'Ver más'} />
      </div>
      <div className='list-home-container'>
        {movies.map((movie) => {
          return (
            <DataFile
              key={movie.id}
              id={movie.id}
              title={movie.title}
              posterPath={`${URL_IMAGE + movie.poster_path}`}
            />
          )
        })}
      </div>
    </div>
  );
}
