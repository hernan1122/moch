import React from 'react';
import '../styles/Header.css'

//logo
import logoM from '../images/logoM.png'

export function Header() {
  return (
    <div className='Header'>
      <img src={logoM} alt="logo de app" />
    </div>
  );
}
