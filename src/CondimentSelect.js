import React from 'react';
import {withCondiment} from './CondimentProvider';

function CondimentSelect({ loading, err, condiments, handleSelection }) {
  
  const condimentOptions = condiments.map((condiment, i) => (
      <option value={i} key={i}>{condiment.name}</option>
  ))

  return (
    loading ?
    <div>...loading</div>
    : err ?
      <div>Sorry, data is unavailable</div>
      :
      <select onChange={handleSelection()}>
        <option value="Choose a Condiment"></option>
        {condimentOptions}
      </select>
  )
}

export default withCondiment(CondimentSelect);