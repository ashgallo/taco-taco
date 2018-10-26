import React from 'react';
import { Grid } from 'semantic-ui-react';
import BaseLayerDisplay from './BaseLayerDisplay';
import MixinDisplay from './MixinDisplay';
import CondimentDisplay from './CondimentDisplay';
import SeasoningDisplay from './SeasoningDisplay';
import ShellDisplay from './ShellDisplay';

function TacoDisplay() {
  return (
    <Grid columns='equal'>
     <BaseLayerDisplay /> 
     <MixinDisplay />
     <CondimentDisplay />
     <SeasoningDisplay />
     <ShellDisplay />
    </Grid>
  )
}

export default TacoDisplay;
