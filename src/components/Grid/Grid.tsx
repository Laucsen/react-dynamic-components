import React, { useState } from 'react';
import styled from 'styled-components';

import { GridProps } from './interfaces';

import Row from './Row';
import Column from './Column';

const Grid = styled.div`
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

const GridContainer: React.FC<GridProps> = ({ structure, data, store }) => {
  const [] = useState({
    name: structure.name,
    type: structure.type,
  });
  return (
    <Grid>
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
    </Grid>
  );
};

export default GridContainer;
