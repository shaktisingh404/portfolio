import React from 'react';
import './About.css';

const About = () => {
  return (
    <div>
      <h2 className='title'>About Me</h2>
      <div className='section'>
        <div id='box-1'>
          <div id='semi-box-1'>
            <h1>10+</h1>
            <h2>Projects</h2>
          </div>
          <div id='semi-box-1'>
            <h1>5+</h1>
            <h2>Certificates</h2>
          </div>
        </div>
        <p id='description'>
          Skilled full-stack web developer proficient in front-end, back-end,
          and databases, crafting robust, user-centric digital experiences with
          code mastery.
        </p>
      </div>
    </div>
  );
};

export default About;
