import React from 'react'
import styles from './styles.css';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
    return(
        <>
        <nav className='navbar'>
              <ul className='navbar-links'>
                <li className='navbar-link'>
                  <Link to='/'>Home</Link>
                </li>
                <li className='navbar-link'>
                  <Link to='/skill'>Skills</Link>
                </li>
                <li className='navbar-link'>
                  <Link to='/experience'>Experience</Link>
                </li>
                <li className='navbar-link'>
                  <Link to='/education'>Education</Link>
                </li>
                <li className='navbar-link'>
                  <Link to='/projects'>Projects</Link>
                </li>
                <li className='navbar-link'>
                  <Link to='/contacts'>Contacts</Link>
                </li>
              </ul>
        </nav>
        <Outlet/>
        </>
    );
}

export default Navbar;