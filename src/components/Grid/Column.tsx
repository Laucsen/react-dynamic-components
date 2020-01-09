import styled from 'styled-components';

import { ColumnProps } from './interfaces';

// Compute the size of a column and return a CSS width line.
const getWidthGrid = (value: number) => {
  if (!value) return;

  const width = (value / 12) * 100;
  return `width: ${width}%;`;
};

const Column = styled.div`
  float: left;
  padding: 0.25rem;
  min-height: 1px;
  box-sizing: border-box;
  width: 100%;

  @media only screen and (max-width: 768px) {
    ${({ mobile }: ColumnProps) => mobile && getWidthGrid(mobile)}
  }

  @media only screen and (min-width: 768px) {
    ${({ tablet }: ColumnProps) => tablet && getWidthGrid(tablet)}
  }

  @media only screen and (min-width: 1000px) {
    ${({ desktop }: ColumnProps) => desktop && getWidthGrid(desktop)}
  }
`;

export default Column;
