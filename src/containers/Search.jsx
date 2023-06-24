import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '../components/Menu';
import '../styles/Search.css'

//icons
import { AiOutlineSearch } from "react-icons/ai";

function Search() {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])

  const API_KEY = '763eb5981208a184a1e9429b05166e9c'
  const URL_IMAGE = 'https://image.tmdb.org/t/p/w300'
  const url = `https://api.themoviedb.org/3/search/multi?include_adult=false&language=en-US&&api_key=${API_KEY}`

  const handleSearch = (e) => {
    e.preventDefault();
    fetch(`${url}&query=${search}`)
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        setSearch(data.results);
        setResults(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='Search'>
      <div className='Search-container'>
        <form onSubmit={handleSearch} className="Search-container-form">
          <input
            type="text"
            placeholder='Qué quieres ver?'
            onChange={(e) => setSearch(e.target.value)}
          />
          <button><AiOutlineSearch /></button>
        </form>
      </div>
      <div className='Search-results'>
        {results.map((result) => {
          return (
            <Link to={`/details-movie?id=${result.id}`} key={result.id}>
              <img src={`${URL_IMAGE + result.poster_path}`} alt={`image: ${result.title}`} />
            </Link>
          )
        })}
      </div>
      <Menu />
    </div>
  );
}

export default Search
