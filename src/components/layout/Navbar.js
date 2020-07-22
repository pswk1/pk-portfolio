import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/imgs/PK.png';

const Navbar = () => {
  return (
    <nav className='navbar .bg-light-gray'>
      <h1>
        <NavLink to='/'>
          <img src={logo} alt='logo'></img>
        </NavLink>
      </h1>
      <ul>
        <NavLink className='link-animation' to='/about'>
          About
        </NavLink>
        <NavLink className='link-animation' to='/projects'>
          Projects
        </NavLink>
        <NavLink className='link-animation' to='/Contact'>
          Contact
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
