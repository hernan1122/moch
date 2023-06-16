import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../components/Header';
import '../styles/CardDetails.css'

//icons
import { TbPoint } from 'react-icons/tb'

function CardDetailsPeople() {
  const [details, setDetails] = useState([])

  const location = useLocation()
  const id = new URLSearchParams(location.search).get('id')

  const API_KEY = '763eb5981208a184a1e9429b05166e9c'
  const URL_IMAGE = 'https://image.tmdb.org/t/p/w300'
  const url = `https://api.themoviedb.org/3/person/${id}?language=es&&api_key=${API_KEY}`

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        console.log('people', data);
        setDetails(data)
      })
  }, [])

  return (
    <div className='CardDetails'>
      <Header />
      <img className='CardDetails-img' src={`${URL_IMAGE + details.profile_path}`} alt="" />
      <div className='CardDetails-container-person'>
        <div className='CardDetails-container-title'>
          <h2>{details.name}</h2>
        </div>
        <div className='CardDetails-person'>
          <div className='CardDetails-person-content'>
            <TbPoint className='icon' />
            <h3>Profesión:</h3>
            <p>{details.known_for_department}</p>
          </div>
          <div className='CardDetails-person-content'>
            <TbPoint className='icon' />
            <h3>Nació en:</h3>
            <p>{details.place_of_birth}</p>
          </div>
          <div className='CardDetails-person-content'>
            <TbPoint className='icon' />
            <h3>Cumpleaños:</h3>
            <p>{details.birthday}</p>
          </div>
        </div>
        <div className='CardDetails-description'>
          <p>{details.biography}</p>
        </div>
      </div>
    </div>
  );
}

export default CardDetailsPeople
