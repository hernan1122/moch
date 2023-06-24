import React, { useState, useEffect } from 'react';
import { DataFile } from './DataFile';
import '../styles/ListHome.css'

export function SeriesLists() {
  const [series, setSeries] = useState([])

  const API_KEY = '763eb5981208a184a1e9429b05166e9c'
  const URL_IMAGE = 'https://image.tmdb.org/t/p/w300'
  const url = `https://api.themoviedb.org/3/tv/popular?language=en&api_key=${API_KEY}`;

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        setSeries(data.results)
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  return (
    <div className='list-home'>
      <h2>Series populares</h2>
      <div className='list-home-container'>
        {series.map((serie) => {
          return (
            <DataFile
              key={serie.id}
              id={serie.id}
              to={`/details-series?id=${serie.id}`}
              title={serie.title}
              posterPath={`${URL_IMAGE + serie.poster_path}`}
            />
          )
        })}
      </div>
      <div className='list-home-shadow'></div>
    </div>
  );
}
