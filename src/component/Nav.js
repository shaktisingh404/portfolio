import React from 'react';
import './Nav.css';
import instagram from './images/instagram.png';
import linkdin from './images/linkdin.png';
import twitter from './images/twitter.png'; // Tell webpack this JS file uses this image
// Tell webpack this JS file uses this image
// Tell webpack this JS file uses this image

const Nav = () => {
  return (
    <nav class='nav-bar'>
      <lable id='logo'>Shakti</lable>
      <div className='logos-img'>
        <a href='https://www.instagram.com/shaktisingh4o4/'>
          <img src={instagram} alt='Instagram' width='20' height='20' />
        </a>
        <a href='https://in.linkedin.com/in/shaktisingh404'>
          <img src={linkdin} alt='linkdin' width='20' height='20' />
        </a>
        <a href='/'>
          <img src={twitter} alt='twitter' width='20' height='20' />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
