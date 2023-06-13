import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'

//logo
import logoM from '../images/logoM-blue.png'

export function Header() {
  return (
    <div className='Header'>
      <Link to={'/'}>
        <img src={logoM} alt="logo de app" />
      </Link>
    </div>
  );
}
