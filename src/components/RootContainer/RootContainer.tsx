import React from 'react';

import { RootContainerProps } from './interfaces';
import { Container } from './styles';

import { useDefaultStyles } from '../..';

const RootContainer: React.FC<RootContainerProps> = ({ structure, store, rootData }) => {
  const styles = useDefaultStyles(structure);
  return <Container {...styles}>{store.build(structure.root, rootData)}</Container>;
};

export default RootContainer;
