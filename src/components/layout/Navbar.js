import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/imgs/PK.png';

const Navbar = () => {
  return (
    <nav className='navbar .bg-light-gray'>
      <h1>
        <Link to='/'>
          <img src={logo} alt='logo'></img>
        </Link>
      </h1>
      <ul>
        <Link to='/about'>About</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/Contact'>Contact</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
