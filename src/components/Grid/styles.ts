import styled from 'styled-components';

import { appendDefaultStyles } from '../../utils';

export const GridArea = styled.div`
  position: relative;

  max-width: 1360px;
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 16px;
  padding-bottom: 32px;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;

  &:before,
  &:after {
    content: ' ';
    display: table;
  }
  &:after {
    clear: both;
  }

  ${props => appendDefaultStyles(props)}
`;
