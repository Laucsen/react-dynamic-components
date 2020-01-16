import React from 'react';
import styled from 'styled-components';

import { RootContainerProps } from './interfaces';

const Container = styled.div``;

const RootContainer: React.FC<RootContainerProps> = ({ structure, store, rootData }) => {
  return <Container>{store.build(structure.root, rootData)}</Container>;
};

export default RootContainer;
