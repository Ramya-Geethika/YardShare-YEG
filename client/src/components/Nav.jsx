import React from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navBar'>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/connectyards'>Connect Yards</Link></li>
        <li><Link to='/gardeningguide'>Gardening Guide</Link></li>
        <li><Link to='/coordinators'>Co-ordinators</Link></li>
        <li><Link to='/contactus'>Contact Us</Link></li>
      </ul>
    </nav>
  )
};

export default Navbar;