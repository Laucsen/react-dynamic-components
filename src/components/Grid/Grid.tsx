import React from 'react';

import { GridArea } from './styles';

import { GridProps } from './interfaces';

import Row from './Row';
import Column from './Column';

import { useDefaultStyles } from '../..';

const GridContainer: React.FC<GridProps> = ({ structure, store, rootData }) => {
  const styles = useDefaultStyles(structure);
  return (
    <GridArea data-rdc-name={structure.name} {...styles}>
      {structure.items.map((row, ri) => {
        return (
          <Row key={ri}>
            {row.map((column, ci) => {
              const { mobile, tablet, desktop, component } = column.data;
              return (
                <Column mobile={mobile} tablet={tablet} desktop={desktop} key={ci}>
                  {store.build(component, rootData)}
                </Column>
              );
            })}
          </Row>
        );
      })}
    </GridArea>
  );
};

export default GridContainer;
