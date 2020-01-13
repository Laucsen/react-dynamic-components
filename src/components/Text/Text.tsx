import React, { useState } from 'react';

import { TextProps } from './interfaces';

const Text: React.FC<TextProps> = ({ structure, data }) => {
  const [state] = useState({
    name: structure.name,
    type: structure.type,
  });

  const name = state.name;
  return <React.Fragment>{data[name]}</React.Fragment>;
};

export default Text;
