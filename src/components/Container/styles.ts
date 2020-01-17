import styled from 'styled-components';
import { getBackgroundColor } from '../../utils';

import { ContainerStyleProps } from './interfaces';

export const ContainerStyled = styled.div`
  display: flex;

  background-color: ${(props: ContainerStyleProps) => getBackgroundColor(props.theme, props.background)};

  padding: 8px;
`;
