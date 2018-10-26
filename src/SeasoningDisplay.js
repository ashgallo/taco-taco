import React from 'react';
import {withSeasoning} from './SeasoningProvider';
import Markdown from 'react-markdown';

function SeasoningInfo({ recipe }) {
  return (
    <div>
      <Markdown source={recipe} />
    </div>
  )
}

function SeasoningDisplay({ loading, err, seasonings, currentSeasoning }) {
  return (
    loading ?
    <div>...loading</div>
    :err ?
      <div>Data unavailable</div>
      :
      <SeasoningInfo {...seasonings[currentSeasoning]} />
  )
}

export default withSeasoning(SeasoningDisplay);

