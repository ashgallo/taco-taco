import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => (
    <nav className="landing-link">
      <Link to={'/'} style={{ color: '#FFF' }} >Home</Link>
    </nav>
)

export default LandingPage;
