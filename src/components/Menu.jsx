import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Menu.css'

//icons
import { VscHome } from 'react-icons/vsc'
import { AiOutlineSearch } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";

export function Menu() {
  return (
    <div className='Menu'>
      <NavLink className='Menu-link' to='/' activeclassname="active">
        <VscHome className='Menu-icons' />
        <h5 className='h5'>Inicio</h5>
      </NavLink>
      <NavLink className='Menu-link' to='/search' activeclassname="active">
        <AiOutlineSearch className='Menu-icons' />
        <h5 className='h5'>Buscar</h5>
      </NavLink>
      <NavLink className='Menu-link' to='/favorites' activeclassname="active">
        <MdFavoriteBorder className='Menu-icons' />
        <h5 className='h5'>Favoritos</h5>
      </NavLink>
    </div>
  );
}
