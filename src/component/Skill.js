import React, { useEffect } from 'react';
import './Skill.css';
import $ from 'jquery'; // Import jQuery

const Skill = () => {
  useEffect(() => {
    $('.skill-per').each(function () {
      var $this = $(this);
      var per = $this.attr('per');
      $this.css('width', per + '%');
      $({ animatedValue: 0 }).animate(
        { animatedValue: per },
        {
          duration: 1000,
          step: function () {
            $this.attr('per', Math.floor(this.animatedValue) + '%');
          },
          complete: function () {
            $this.attr('per', Math.floor(this.animatedValue) + '%');
          },
        }
      );
    });
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <>
      <h2 className='title'>Skills and Expertise </h2>
      <div className='skills'>
        <div className='skill'>
          <div className='skill-name'>HTML</div>
          <div className='skill-bar'>
            <div className='skill-per' per='93'></div>
          </div>
        </div>
        <div className='skill'>
          <div className='skill-name'>CSS</div>
          <div className='skill-bar'>
            <div className='skill-per' per='75'></div>
          </div>
        </div>
        <div className='skill'>
          <div className='skill-name'>JavaScript</div>
          <div className='skill-bar'>
            <div className='skill-per' per='55'></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
