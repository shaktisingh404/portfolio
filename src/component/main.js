import React from 'react';
import './main.css';
import headerimg from './images/headerimg.jpg';
function Main() {
  return (
    <>
      <div className='hero'>
        <div className='first-section'>
          <h1 id='name'>Shakti Singh</h1>
          <h2 id='designation'>Front-End Developer</h2>
        </div>
        <div className='second-section'>
          <button id='btn-resume'>Resume</button>
        </div>
      </div>

      <img src={headerimg} id='header-img' height='200' width='1000' />
    </>
  );
}

export default Main;
