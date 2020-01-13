import React from 'react';
import styled from 'styled-components';

import { ContainerProps } from './interfaces';

const ContainerStyled = styled.div`
  display: flex;

  padding: 8px;
`;

const Container: React.FC<ContainerProps> = ({ structure, data, store }) => {
  return (
    <ContainerStyled>
      {structure.components.map((component: object, index: number) => {
        return <React.Fragment key={index}>{store.build(component, data)}</React.Fragment>;
      })}
    </ContainerStyled>
  );
};

export default Container;
