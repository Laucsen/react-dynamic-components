import React from 'react';

import { StructureBase, useDefaultStyles } from '../..';
import { ContainerProps } from './interfaces';
import { ContainerStyled } from './styles';

const Container: React.FC<ContainerProps> = ({ store, structure, rootData }) => {
  const styles = useDefaultStyles(structure);
  return (
    <ContainerStyled {...styles}>
      {structure.components.map((component: StructureBase, index: number) => {
        return <React.Fragment key={index}>{store.build(component, rootData)}</React.Fragment>;
      })}
    </ContainerStyled>
  );
};

export default Container;
