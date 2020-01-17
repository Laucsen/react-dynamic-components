import styled from 'styled-components';

import { getBackgroundColor } from '../../utils';

import { GridAreaStyleProps } from './interfaces';

export const GridArea: React.FC<GridAreaStyleProps> = styled.div`
  max-width: 1360px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;

  background-color: ${(props: GridAreaStyleProps) => getBackgroundColor(props.theme, props.background)};

  &:before,
  &:after {
    content: ' ';
    display: table;
  }
  &:after {
    clear: both;
  }
`;
