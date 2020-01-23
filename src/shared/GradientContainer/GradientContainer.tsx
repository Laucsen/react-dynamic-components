import styled from 'styled-components';

import theme from '../../Core/themes';

const extractColor = (color?: string) => {
  if (!color) {
    return null;
  }
  const tc = theme.colors[color];
  if (tc) {
    return tc;
  }
  return color;
};

export const GradientContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  z-index: ${theme.zIndex.base};

  background: rgb(210, 210, 210);
  background: linear-gradient(
    150deg,
    ${props => extractColor(props.color)} 0%,
    ${props => extractColor(props.color)} 20%,
    rgba(0, 212, 255, 0) 100%
  );
`;
