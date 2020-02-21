import React from 'react';

import { LabelProps, LabelStructure } from './interfaces';
import styled from 'styled-components';

const LabelContainer = styled.div`
  padding: 8px;

  display: flex;
  flex-direction: ${(props: LabelStructure) => (props.inline === true ? 'row' : 'column')};
`;

const LabelComponent = styled.div`
  padding: 4px;
`;

const Label: React.FC<LabelProps> = ({ structure, data }) => {
  return (
    <LabelContainer data-name={structure.name} {...structure}>
      <LabelComponent>{data.title}</LabelComponent>
      <LabelComponent>{data.text}</LabelComponent>
    </LabelContainer>
  );
};

export default Label;
/*
export default React.memo(Label, (prevProps, nextProps) => {
  return prevProps.data === nextProps.data;
});
*/
