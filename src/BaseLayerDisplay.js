import React from 'react';
import {withBaseLayer} from './BaseLayerProvider';
import Markdown from 'react-markdown'


function BaseLayerInfo({ recipe }) {
  return (
    <div>
      <Markdown source={recipe} />
    </div>
  )
}

function BaseLayerDisplay({ loading, err, baseLayers, currentBaseLayer }) {
  return (
    loading ?
    <div>...Loading</div>
    :
    err ?
      <div>Data unavailable</div>
      :
      <BaseLayerInfo {...baseLayers[currentBaseLayer]} />
  )
}

export default withBaseLayer(BaseLayerDisplay);
