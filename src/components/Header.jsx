import React from 'react';
import '../styles/Header.css'

//logo
import logoApp from '../images/logoApp.png'

export function Header() {
  return (
    <div className='Header'>
      <img src={logoApp} alt="logo de app" />
      <h1>Moch</h1>
    </div>
  );
}
