import { Store, StrctureBase } from '../..';

export interface ColumnProps {
  mobile: number;
  tablet: number;
  desktop: number;
}

interface ColumnStructure extends ColumnProps {
  component: object;
}

interface RowStructure {
  data: ColumnStructure;
}

interface GeidStructure {
  name: string;
  type: string;
  items: RowStructure[][];
}

export interface GridProps {
  structure: GeidStructure;
  data: object;
  store: Store;
}

export interface GridComponentStructure {
  component: StrctureBase;
}

export interface GridColumnStructure {
  data: GridComponentStructure;
}

export interface GridStructure {
  items: GridColumnStructure[][];
}
