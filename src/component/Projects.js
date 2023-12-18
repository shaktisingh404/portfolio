import React from 'react';
import './Projects.css';
import poster1 from './images/poster1-img.jpg';
import poster3 from './images/poster3-img.jpg';

function Projects() {
  return (
    <>
      <h1 className='title'>Ptojects</h1>
      <div class='wrapper'>
        <div class='card'>
          <div class='poster'>
            <img src={poster1} alt='Location Unknown' />
          </div>
          <div class='details'>
            <h1>Travel Page</h1>

            <div class='tags'>
              <span class='tag'>React</span>
              <span class='tag'>JS</span>
              <span class='tag'>MERN</span>
            </div>
            <p class='desc'>
              Join our team crafting innovative travel experiences through
              cutting-edge code and tech solutions.
            </p>

            <a class='tag' href='/'>
              Source code
            </a>
          </div>
        </div>
        <div class='card'>
          <div class='poster'>
            <img
              src='https://i.postimg.cc/GtxLYS7q/poster2-img.jpg'
              alt='Location Unknown'
            />
          </div>
          <div class='details'>
            <h1>To-Do List</h1>

            <div class='tags'>
              <span class='tag'>React</span>
              <span class='tag'>JS Hook</span>
            </div>
            <p class='desc'>
              Simple To-Do List to manage your task and timeline.
            </p>
            <a class='tag' href='/'>
              Source code
            </a>
          </div>
        </div>
        <div class='card'>
          <div class='poster'>
            <img src={poster3} alt='Location Unknown' />
          </div>
          <div class='details'>
            <h1>E-Commerce</h1>

            <div class='tags'>
              <span class='tag yellow'>Database</span>
              <span class='tag'>DSA</span>
              <span class='tag blue'>Design</span>
            </div>
            <p class='desc'>
              Seeking a web developer passionate about revolutionizing online
              shopping experiences.
            </p>
            <a class='tag' href='/'>
              Source code
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
