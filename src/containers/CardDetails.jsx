import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../components/Header';
import { DataFile } from '../components/DataFile';
import '../styles/CardDetails.css'

//icons
import { AiFillStar } from 'react-icons/ai'

function CardDetails() {
  const [details, setDetails] = useState([])
  const [genres, setGenres] = useState([])
  const [recommendations, setRecommendations] = useState([])

  const location = useLocation()
  const id = new URLSearchParams(location.search).get('id')

  const API_KEY = '763eb5981208a184a1e9429b05166e9c'
  const URL_IMAGE = 'https://image.tmdb.org/t/p/w300'
  const url = `https://api.themoviedb.org/3/movie/${id}?language=es&&api_key=${API_KEY}`
  const url_recommendations = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}`

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        setDetails(data)
        setGenres(data.genres)
      })
  }, [])

  useEffect(() => {
    fetch(url_recommendations)
      .then(res => res.json())
      .then((data) => {
        setRecommendations(data.results)
      })
  }, [])

  return (
    <div className='CardDetails'>
      <Header />
      <img className='CardDetails-img' src={`${URL_IMAGE + details.poster_path}`} alt="" />
      <div className='CardDetails-container'>
        <div className='CardDetails-container-title'>
          <h2>{details.title}</h2>
          <div className='CardDetails-score'>
            <AiFillStar className='icon' />
            <p>{details.vote_average}</p>
          </div>
        </div>
        <div className='CardDetails-description'>
          <p>{details.overview}</p>
        </div>
        <div className='CardDetails-categories'>
          {genres.map((genre) => {
            return (
              <div key={genre.id} className='CardDetails-categories-content'>
                <h3>{genre.name}</h3>
              </div>
            )
          })}
        </div>
        <div className='CardDetails-similar'>
          <h2>Titulos similares</h2>
          <div className='CardDetails-similar-container'>
            {recommendations.map((recomm) => {
              return (
                <DataFile
                  key={recomm.id}
                  id={recomm.id}
                  title={recomm.title}
                  posterPath={`${URL_IMAGE + recomm.poster_path}`}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetails
