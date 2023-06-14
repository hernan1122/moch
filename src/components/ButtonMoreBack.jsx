import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ButtonMoreBack.css'

export function ButtonMoreBack({to, children}) {
  return (
    <Link to={to} className='ButtonMoreBack'>
      {children}
    </Link>
  );
}
