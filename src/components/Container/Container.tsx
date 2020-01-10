import React from 'react';
import styled from 'styled-components';

import { register } from '../../';

import { ContainerProps } from './interfaces';

const Container = styled.div`
  max-width: 1360px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
  &:before,
  &:after {
    content: ' ';
    display: table;
  }
  &:after {
    clear: both;
  }
`;

const GridContainer: React.FC<ContainerProps> = ({ structure, data, store }) => {
  console.log(structure);
  console.log(data);
  console.log(store);
  return <Container>AAA</Container>;
};

export default register('Container')(GridContainer);
