import React from 'react';
import '../styles/Trending.css'

//images
import imgAvatar from '../images/avatar_the_way_of_water.jpg'

export function Trending() {
  return (
    <div className='Trending'>
      <h2>Tendencias</h2>
      <div className='Trending-container'>
        <img src={imgAvatar} alt="" />
        <img src={imgAvatar} alt="" />
        <img src={imgAvatar} alt="" />
        <img src={imgAvatar} alt="" />
        <img src={imgAvatar} alt="" />
      </div>
    </div>
  );
}
