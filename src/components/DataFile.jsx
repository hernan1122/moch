import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/DataFile.css'

export function DataFile({ id, posterPath, title }) {
  return (
    <Link to={`/details?id=${id}`} key={id}>
      <img className='DataFile-img' src={posterPath} alt={`image: ${title}`} />
    </Link>
  );
}
