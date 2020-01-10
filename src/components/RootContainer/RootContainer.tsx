import React from 'react';
import styled from 'styled-components';

import { register } from '../..';

import { RootContainerProps } from './interfaces';

const Container = styled.div`
  background: red;
`;

const RootContainer: React.FC<RootContainerProps> = ({ structure, data, store }) => {
  return <Container>{store.build(structure.root, data)}</Container>;
};

export default register('RootContainer')(RootContainer);
