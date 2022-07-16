import React from 'react';
import { Slider } from 'components/Slider';
import { Movies } from 'components/Movies';

export const MovieLayout = () => {
  return (
    <div>
      <Slider />
      <Movies />
    </div>
  );
};
