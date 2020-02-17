import React from 'react';
import styled from 'styled-components';

import { TextProps, StyledTextProps } from './interfaces';

import { Typography } from '../../core/themes';

const TextContainer = styled.div`
  padding: 8px;
`;

const StyledText = (props: StyledTextProps) => {
  const typo = Typography.Headings[props.typography];

  if (!typo) {
    return <TextContainer {...props} />;
  }

  const TypoTemplate = typo``;
  return <TypoTemplate {...props} />;
};

const Text: React.FC<TextProps> = ({ structure, data }) => {
  return (
    <StyledText data-name={structure.name} typography={structure.typography}>
      {data}
    </StyledText>
  );
};

export default React.memo(Text, (prevProps, nextProps) => {
  return prevProps.data === nextProps.data;
});
