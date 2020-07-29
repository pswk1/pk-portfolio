import React from 'react';
import { NavLink } from 'react-router-dom';
// import logo from '../../assets/imgs/PK.png';
import logoLight from '../../assets/imgs/PK_Light_small.png';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1>
        <NavLink to='/'>
          <img src={logoLight} alt='logo'></img>
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
