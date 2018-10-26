import React from 'react';
import {withCondiment} from './CondimentProvider';
import Markdown from 'react-markdown';

function CondimentInfo ({ recipe }) {
  return (
    <div>
      <Markdown source={recipe} />
    </div>
  )
}

function CondimentDisplay({ loading, err, condiments, currentCondiment }) {
  return (
    loading ?
    <div>...Loading</div>
    :
    err ?
      <div>Data unavailable</div>
      :
      <CondimentInfo {...condiments[currentCondiment]} />
  )
}

export default withCondiment(CondimentDisplay);