import React from 'react';
import styled from 'styled-components';

import { TextProps } from './interfaces';

const TextContainer = styled.div`
  padding: 8px;
`;

const Text: React.FC<TextProps> = ({ data }) => {
  return <TextContainer>{data}</TextContainer>;
};

export default Text;
