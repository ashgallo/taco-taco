import React from 'react';
import {withRandomizer} from './Randomizer';
import RandomizerInfo from './RandomizerInfo';

function RandomizerDisplay({ loading, err, random }) {
  return (
    loading ?
    <div>...loading</div>
    :
    err ?
      <div>Data unavailable</div>
      :
      <div> 
        <RandomizerInfo random={random}/>
      </div> 

  )
}

export default withRandomizer(RandomizerDisplay);

// export default withRandomizer(RandomizerInfo);