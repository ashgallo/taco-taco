import React from 'react';
import Markdown from 'react-markdown';

function RandomizerInfo({ random }) {
  return (
    <div>
      <div>
        <Markdown source={random.base_layer.recipe} />
      </div>
      <div>
        <Markdown source={random.mixin.recipe} />
      </div>
      <div>
        <Markdown source={random.condiment.recipe} />
      </div>
      <div>
        <Markdown source={random.seasoning.recipe} />
      </div>
      <div>
        <Markdown source={random.shell.recipe} />
      </div>
    </div>
  )
}

export default RandomizerInfo;

