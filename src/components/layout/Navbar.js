import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title }) => {
  return (
    <nav className='navbar bg-brown'>
      <h1>
        <Link to='/'>
          <span style={{ paddingLeft: '.5em' }}>{title}</span>
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

Navbar.defaultProps = {
  title: `Peter Kang`,
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
