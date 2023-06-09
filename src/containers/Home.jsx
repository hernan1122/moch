import React, { useEffect } from 'react';
import { Menu } from '../components/Menu'
import '../styles/Home.css';

function Home() {
  /* const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []); */

  return (
    <div className='Home'>
      <Menu />
    </div>
  );
}

export default Home;
