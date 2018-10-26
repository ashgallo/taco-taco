import React from 'react';
import { withMixin } from './MixinProvider';

function MixinSelect({ mixins, loading, err, handleSelection}) {

  const mixinOptions = mixins.map((mixin, i) => (
    <option value={i} key={i}>{mixin.name}</option>
  ))

  return (
    loading ?
      <div>...loading</div>
      : err ?
        <div>Sorry, data is unavailable</div>
        :
        <select onChange={handleSelection()}>
          <option value="Choose a Mixin"></option>
          {mixinOptions}
        </select>
  )
}

export default withMixin(MixinSelect);