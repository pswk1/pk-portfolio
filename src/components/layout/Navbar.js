import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { lightTheme } from '../../theme';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/imgs/PK.png';
import logoLight from '../../assets/imgs/PK_Light_small.png';

const Navbar = () => {
	const themeContext = useContext(ThemeContext);
	return (
		<nav className='navbar'>
			<h1>
				<NavLink to='/'>
					{themeContext === lightTheme ? (
						<img src={logoLight} alt='logo'></img>
					) : (
						<img src={logo} alt='logo'></img>
					)}
				</NavLink>
			</h1>
			<ul>
				<li>
					<NavLink className='link-animation' to='/about'>
						About
					</NavLink>
				</li>

				<li>
					<NavLink className='link-animation' to='/projects'>
						Projects
					</NavLink>
				</li>

				<li>
					<NavLink className='link-animation' to='/Blog'>
						Blog
					</NavLink>
				</li>

				<li>
					<NavLink className='link-animation' to='/Contact'>
						Contact
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
