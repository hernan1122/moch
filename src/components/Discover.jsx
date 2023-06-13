import React, { useEffect, useState } from 'react';
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
        console.log(data.results);
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
            <div key={dis.id}>
              <img src={`${URL_IMAGE + dis.poster_path}`} alt={`image: ${dis.title}`} />
            </div>
          )
        })}
      </div>
    </div>
  );
}
