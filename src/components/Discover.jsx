import React, { useEffect, useState } from 'react';
import { DataFile } from './DataFile';
import '../styles/ListHome.css'

export function Discover() {
  const [discover, setDiscover] = useState([])

  const API_KEY = '763eb5981208a184a1e9429b05166e9c'
  const URL_IMAGE = 'https://image.tmdb.org/t/p/w300'
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        setDiscover(data.results)
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  return (
    <div className='list-home'>
      <h2>Peliculas por descubrir</h2>
      <div className='list-home-container'>
        {discover.map((dis) => {
          return (
            <DataFile
              key={dis.id}
              id={dis.id}
              title={dis.title}
              posterPath={`${URL_IMAGE + dis.poster_path}`}
            />
          )
        })}
      </div>
    </div>
  );
}
