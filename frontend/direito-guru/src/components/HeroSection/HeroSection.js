import React from 'react';
import '../../App.css';
import { Button } from '../Button/Button';

import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>PROJETO 3 TECWEB</h1>
      <p>FELIPE LEMOS</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          CADASTRAR
        </Button>

      </div>
    </div>
  );
}

export default HeroSection;