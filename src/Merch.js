import React from 'react';
import LandingPage from './LandingPage';
import TacoAccessories from './TacoAccessories';

const Merch = () => (
  <div>
    <nav className='landing-page'>
      <LandingPage />
    </nav>
    <h1>Buy cool taco things</h1>
    <div>
      <TacoAccessories />
    </div>
  </div>
)

export default Merch;