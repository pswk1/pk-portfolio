import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ title }) => {
  return (
    <nav className='navbar .bg-light-gray'>
      <h1>
        <Link to='/'>
          <img src={require('../../assets/imgs/PK.png')} alt='logo'></img>
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
