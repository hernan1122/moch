import React, { useEffect, useState } from 'react';
import '../styles/Categories.css'

export function CategoriesMovies() {
  const [categories, setCategories] = useState([])

  const API_KEY = '763eb5981208a184a1e9429b05166e9c'
  const url = `https://api.themoviedb.org/3/genre/movie/list?language=es&&api_key=${API_KEY}`

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        setCategories(data.genres)
      })
      .catch((error) => {
        console.log(error);
    })
  }, [])

  return (
    <div className='Categories'>
      <h2>Categorías de peliculas</h2>
      <div className='Categories-container'>
        {categories.map((genres) => {
          return (
            <div className='Categories-content' key={genres.id}>
              <h3>{genres.name}</h3>
            </div>
          )
        })}
      </div>
      <div className='Categories-shadow'></div>
    </div>
  );
}
