import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { ButtonMoreBack } from '../components/ButtonMoreBack';
import { DataFile } from '../components/DataFile';
import { Menu } from '../components/Menu';
import '../styles/More.css'

function MoreTrendingTV() {
  const [moreTV, setMoreTV] = useState([])

  const API_KEY = '763eb5981208a184a1e9429b05166e9c'
  const URL_IMAGE = 'https://image.tmdb.org/t/p/w300'
  const url = `https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}`;

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        setMoreTV(data.results)
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  return (
    <div className='More'>
      <Header />
      <div className='More-container-title'>
        <h2>TV tendencias</h2>
        <ButtonMoreBack to={'/'} children={'ATRÁS'} />
      </div>
      <div className='More-container'>
        {moreTV.map((more) => {
          return (
            <DataFile
              key={more.id}
              id={more.id}
              to={`/details-tv?id=${more.id}`}
              title={more.title}
              posterPath={`${URL_IMAGE + more.poster_path}`}
            />
          )
        })}
      </div>
      <Menu />
    </div>
  );
}

export default MoreTrendingTV;
