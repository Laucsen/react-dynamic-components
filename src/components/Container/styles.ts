import styled from 'styled-components';

import { appendDefaultStyles } from '../../utils';

export const ContainerStyled = styled.div`
  display: flex;

  padding: 8px;

  ${props => appendDefaultStyles(props)}
`;
