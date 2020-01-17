import React from 'react';

import { GridArea } from './styles';

import { GridProps, GridPropsStructure } from './interfaces';

import Row from './Row';
import Column from './Column';

const extractStyles = (structure: GridPropsStructure) => {
  return {
    background: {
      color: structure.background ? structure.background.color : '',
    },
  };
};

const GridContainer: React.FC<GridProps> = ({ structure, store, rootData }) => {
  const styles = extractStyles(structure);

  return (
    <GridArea {...styles}>
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
