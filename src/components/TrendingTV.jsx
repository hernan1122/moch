import React, { useState, useEffect } from 'react';
import '../styles/ListHome.css'

export function TrendingTV() {
  const [tv, setTv] = useState([])

  const API_KEY = '763eb5981208a184a1e9429b05166e9c'
  const URL_IMAGE = 'https://image.tmdb.org/t/p/w300'
  const url = `https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}`;

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        console.log(data.results);
        setTv(data.results)
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  return (
    <div className='list-home'>
      <h2>TV tendencias</h2>
      <div className='list-home-container'>
        {tv.map((tv) => {
          return (
            <div key={tv.id}>
              <img src={`${URL_IMAGE + tv.poster_path}`} alt={`image: ${tv.title}`} />
            </div>
          )
        })}
      </div>
    </div>
  );
}
