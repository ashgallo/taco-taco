import React from 'react';
import { withSeasoning } from './SeasoningProvider';

function SeasoningSelect({ loading, err, seasonings, handleSelection }) {

  const seasoningOptions = seasonings.map((seasoning, i) => (
    <option value={i} key={i}>{seasoning.name}</option>
  ))

  return (
    loading ?
    <div>...loading</div>
    : err ?
      <div>Sorry, data is unavailable</div>
      :
      <select onChange={handleSelection()}>
        <option value="Choose a Seasoning"></option>
        {seasoningOptions}
      </select>
  )
}

export default withSeasoning(SeasoningSelect);