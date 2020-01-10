import { Store } from '../..';

export interface ColumnProps {
  mobile: number;
  tablet: number;
  desktop: number;
}

export interface ContainerProps {
  structure: object;
  data: object;
  store: Store;
}
