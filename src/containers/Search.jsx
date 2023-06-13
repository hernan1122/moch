import React, { useEffect, useState } from 'react';
import { Menu } from '../components/Menu';
import '../styles/Search.css'

//icons
import { AiOutlineSearch } from "react-icons/ai";
import { CgClose } from 'react-icons/cg'

function Search() {
  const [files, setFiles] = useState([])
  const [filesSearch, setFilesSearch] = useState([])
  const [search, setSearch] = useState('')

  const API_KEY = '763eb5981208a184a1e9429b05166e9c'
  const URL_IMAGE = 'https://image.tmdb.org/t/p/w300'
  /* const url = `https://api.themoviedb.org/3/search/multi?include_adult=false&language=en-US&&api_key=${API_KEY}` */
  const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        console.log(data.results);
        setFiles(data.results)
        setFilesSearch(data.results)
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  const handleChange = e => {
    setSearch(e.target.value)
    filterSearch(e.target.value)
  }

  const filterSearch = (searchTerm) => {
    let searchResults = filesSearch.filter((element) => {
      if (
        element.title.toString().toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return element
      }
    })

    setFiles(searchResults)
  }

  return (
    <div className='Search'>
      <div className='Search-container'>
        <div className="Search-container-input">
          <div className="Search-icon-container">
            <AiOutlineSearch className='Search-icon' />
          </div>
          <input
            type="text"
            placeholder='Qué quieres ver?'
            value={search}
            onChange={handleChange}
          />
          <div className="Search-icon-container">
            <CgClose className='Search-icon'  />
          </div>
        </div>
      </div>
      <div className='Search-results'>
        {search === '' ? <div></div> :
          [
            <h2>Resultados de tu búsqueda:</h2>,
            files.length === 0 ? (
              <h5>No hay resultados para tu búsqueda</h5>
            ) : (
              files.map((file) => (
                <div key={file.id}>
                  <img src={`${URL_IMAGE + file.poster_path}`} alt={`image: ${file.title}`} />
                </div>
              ))
            )
          ]
        }
      </div>
      <Menu />
    </div>
  );
}

export default Search
