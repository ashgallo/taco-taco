import React from 'react';
import { withShell } from './ShellProvider';

function ShellSelect ({ shells, loading, err, handleSelection }) {
  const shellOptions = shells.map((shell, i) => (
    <option value={i} key={i}>{shell.name}</option>
  ))

  return (
    loading ?
    <div>...loading</div>
    : err ?
      <div>Sorry, data is unavailable</div>
      :
      <select onChange={handleSelection()}>
        <option value="Choose a Shell"></option>
        {shellOptions}
      </select>
  )
}

export default withShell(ShellSelect);