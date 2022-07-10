import React from 'react';
import { Slider } from 'components/Slider';
import { Footer } from 'components/Footer';
import { Movies } from 'components/Movies';

export const MovieLayout = () => {
  return (
    <div>
      <Slider />
      <Movies />
      <Footer />
    </div>
  );
};
