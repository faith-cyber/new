import React from 'react';

function About(props) {
  return (
    <div id='about'>
      <div className='about-image'>
      <img src={props.image} alt='' />
      </div>
      <div className='about-text'>
        <h2>{props.title}</h2>
        <p>Teamwork can be hard, messy, complicated. and still the best way work.That why we made AppLand a place where people get work done. together</p>
        <button> {props.button} </button>
      </div>
    </div>
  )
}

export default About;
