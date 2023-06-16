import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/DataFile.css'

export function DataFile({ id, to, posterPath, title }) {
  return (
    <Link to={to} key={id}>
      <img className='DataFile-img' src={posterPath} alt={`image: ${title}`} />
    </Link>
  );
}
