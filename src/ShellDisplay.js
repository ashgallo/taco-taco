import React from 'react';
import { withShell } from './ShellProvider';
import Markdown from 'react-markdown';

function ShellInfo({ recipe }) {
  return (
    <div>
      <Markdown source={recipe} />
    </div>
  )
}

function ShellDisplay({ loading, err, shells, currentShell}) {
  return (
    loading ?
    <div>...loading</div>
    :
    err ?
      <div>Data Unavailable</div>
      :
      <ShellInfo {...shells[currentShell]} />
  )
}

export default withShell(ShellDisplay);