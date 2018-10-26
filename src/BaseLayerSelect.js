import React from 'react';
import { withBaseLayer } from './BaseLayerProvider';

function BaseLayerSelect({ baseLayers, loading, err, handleSelection }) {

  const baseLayerOptions = baseLayers.map((baseLayer, i) => (
    <option value={i} key={i}>{baseLayer.name}</option>
  ))

  return (
    loading ?
      <div>...loading</div>
      : err ?
        <div>Sorry, data is unavailable</div>
        :
        <select onChange={handleSelection()}>
          <option value="Choose a Base Layer"></option>
          {baseLayerOptions}
        </select>
  )
}

export default withBaseLayer(BaseLayerSelect);
