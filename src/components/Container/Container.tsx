import React from 'react';

import { StructureBase, useDefaultStyles } from '../..';
import { ContainerProps } from './interfaces';
import { ContainerStyled } from './styles';

import { GradientContainer, ContentContainer } from '../../shared';

const Container: React.FC<ContainerProps> = ({ store, structure, rootData }) => {
  const styles = useDefaultStyles(structure);
  return (
    <ContainerStyled {...styles}>
      {structure.background && structure.background.gradient && (
        <GradientContainer color={structure.background.gradient} />
      )}
      {structure.components.map((component: StructureBase, index: number) => {
        return <ContentContainer key={index}>{store.build(component, rootData)}</ContentContainer>;
      })}
    </ContainerStyled>
  );
};

export default Container;
