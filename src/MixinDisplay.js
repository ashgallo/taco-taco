import React from 'react';
import {withMixin} from './MixinProvider';
import Markdown from 'react-markdown';

function MixinInfo({ recipe }) {
  return (
    <div>
      <Markdown source={recipe} />
    </div>
  )
}

function MixinDisplay({ loading, err, mixins, currentMixin }) {
  return (
    loading ?
    <div>...Loading</div>
    :
    err ?
      <div>Data unavailable</div>
      :
      <MixinInfo {...mixins[currentMixin]} />
  )
}

export default withMixin(MixinDisplay);