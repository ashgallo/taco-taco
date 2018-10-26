import React from 'react';
import LandingPage from './LandingPage';
import IngredientSelector from './IngredientSelector';
import TacoDisplay from './TacoDisplay';

const Build = () => (
  <div>
    <nav className='landing-page'>
      <LandingPage />
    </nav>
    <h1>Taco Builder</h1>
    <IngredientSelector />
    <TacoDisplay />
  </div>
)

export default Build;
