import React, { useState } from 'react';
import styled from 'styled-components';

import { register } from '../../';

import { ContainerProps } from './interfaces';

import Row from './Row';
import Column from './Column';

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
  const [] = useState({
    name: structure.name,
    type: structure.type,
  });
  return (
    <Container>
      {structure.items.map((row, ri) => {
        return (
          <Row key={ri}>
            {row.map((column, ci) => {
              const { mobile, tablet, desktop, component } = column.data;
              return (
                <Column mobile={mobile} tablet={tablet} desktop={desktop} key={ci}>
                  {store.build(component, data)}
                </Column>
              );
            })}
          </Row>
        );
      })}
    </Container>
  );
};

export default register('Container')(GridContainer);
