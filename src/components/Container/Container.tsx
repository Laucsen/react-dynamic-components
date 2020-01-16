import React from 'react';
import styled from 'styled-components';

import { ContainerProps } from './interfaces';
import { StructureBase } from '../..';

const ContainerStyled = styled.div`
  display: flex;

  padding: 8px;
`;

const Container: React.FC<ContainerProps> = ({ store, structure, rootData }) => {
  return (
    <ContainerStyled>
      {structure.components.map((component: StructureBase, index: number) => {
        return <React.Fragment key={index}>{store.build(component, rootData)}</React.Fragment>;
      })}
    </ContainerStyled>
  );
};

export default Container;
