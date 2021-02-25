import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />

      <h1>Welcome to your CMR-system</h1>
      <p>Come on in and have a look!</p>

      <div className='hero-btns'>

        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          to={"/login"}
        >Log In
        </Button>

        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          to="/services"
        >

          <i class="fas fa-dog"></i>
          <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;