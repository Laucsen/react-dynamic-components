import React, { useState } from 'react';
import styled from 'styled-components';

import { TextProps } from './interfaces';

const TextContainer = styled.div`
  padding: 8px;
`;

const Text: React.FC<TextProps> = ({ structure, data }) => {
  const [state] = useState({
    name: structure.name,
    type: structure.type,
  });

  const name = state.name;
  return <TextContainer>{data[name]}</TextContainer>;
};

export default Text;
