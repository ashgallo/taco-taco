import React from 'react';
import { Grid } from 'semantic-ui-react';
import BaseLayerSelect from './BaseLayerSelect';
import MixinSelect from './MixinSelect';
import CondimentSelect from './CondimentSelect';
import SeasoningSelect from './SeasoningSelect';
import ShellSelect from './ShellSelect';

function IngredientSelector() {
  return (
    <Grid columns='equal'>
      <Grid.Row>
        <BaseLayerSelect />
        <MixinSelect />
        <CondimentSelect />
        <SeasoningSelect />
        <ShellSelect />
      </Grid.Row>
    </Grid>
  )
}

export default IngredientSelector;

