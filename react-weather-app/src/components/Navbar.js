import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className='fas fa-cloud-meatball' /> Weather App
      </h1>
      <ul>
        {/* Use Route to Router the page */}
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='#'>Todo</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
