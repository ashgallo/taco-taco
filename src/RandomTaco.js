import React from 'react';
import LandingPage from './LandingPage';
import RandomizerDisplay from './RandomizerDisplay';

const RandomTaco = () => (
  <div>
    <nav className='landing-page'>
      <LandingPage />
    </nav>
    <div>
      <RandomizerDisplay />
    </div>
  </div>
)

export default RandomTaco;