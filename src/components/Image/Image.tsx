import React from 'react';

import { ImageProps } from './interfaces';

const Image: React.FC<ImageProps> = ({ data }) => {
  return (
    <>
      <img src={data} alt="Component Image"></img>
    </>
  );
};

export default Image;
