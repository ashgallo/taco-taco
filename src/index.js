import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import BaseLayerProvider from './BaseLayerProvider';
import MixinProvider from './MixinProvider';
import CondimentProvider from './CondimentProvider';
import SeasoningProvider from './SeasoningProvider';
import ShellProvider from './ShellProvider';
import Randomizer from './Randomizer';
import './assets/styles.css';

render(
  <BrowserRouter>
    <BaseLayerProvider>
    <MixinProvider>
    <CondimentProvider>
    <SeasoningProvider>
    <ShellProvider>
    <Randomizer>
      <App />
    </Randomizer>
    </ShellProvider>
    </SeasoningProvider>
    </CondimentProvider>
    </MixinProvider>
    </BaseLayerProvider>
  </BrowserRouter>,
  document.getElementById("root")
)