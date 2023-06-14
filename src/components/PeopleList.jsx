import React, { useEffect, useState } from 'react';
import '../styles/ListHome.css'

export function PeopleList() {
  const [people, setPeople] = useState([])

  const API_KEY = '763eb5981208a184a1e9429b05166e9c'
  const URL_IMAGE = 'https://image.tmdb.org/t/p/w300'
  const url = `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}`;

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        console.log('People', data);
        setPeople(data.results)
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  return (
    <div className='list-home'>
      <h2>Actores más populares hoy</h2>
      <div className='list-home-container'>
        {people.map((person) => {
          return (
            <div key={person.id}>
              <img src={`${URL_IMAGE + person.profile_path}`} alt={`Imagen: ${person.name}`} />
              <h4>{person.name}</h4>
            </div>
          )
        })}
      </div>
    </div>
  );
}
