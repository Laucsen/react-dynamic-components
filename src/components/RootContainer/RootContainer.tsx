import React from 'react';
import styled from 'styled-components';

import { RootContainerProps } from './interfaces';

const Container = styled.div``;

const RootContainer: React.FC<RootContainerProps> = ({ structure, store }) => {
  return <Container>{store.build(structure.root)}</Container>;
};

export default RootContainer;
