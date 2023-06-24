import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { ButtonMoreBack } from '../components/ButtonMoreBack';
import '../styles/Category.css'

function Category() {
  const [categoryId, setCategoryId] = useState('')
  const [categoryName, setCategoryName] = useState([])

  const API_KEY = '763eb5981208a184a1e9429b05166e9c'
  const URL_IMAGE = 'https://image.tmdb.org/t/p/w300'
  const url = `https://api.themoviedb.org/3/genre/movie/list?language=es&&api_key=${API_KEY}`

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        setCategoryId(data.genres[0])
        console.log(data.genres);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  return (
    <div className='Category'>
      <Header />
      <div className='Category-container-title'>
        <h2>{categoryId.name}</h2>
        <ButtonMoreBack to={'/'} children={'ATRÁS'}/>
      </div>
    </div>
  );
}

export default Category
