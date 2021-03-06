import { Store, StructureBase, DefaultConfigStyles } from '../..';
import { DataConfig } from '../../core/store';

export interface ColumnProps {
  mobile: number;
  tablet: number;
  desktop: number;
}

interface ColumnStructure extends ColumnProps {
  component: StructureBase;
}

interface RowStructure {
  data: ColumnStructure;
}

export interface GridPropsStructure extends DefaultConfigStyles {
  name: string;
  type: string;
  items: RowStructure[][];
}

export interface GridProps {
  structure: GridPropsStructure;
  store: Store;
  rootData: DataConfig;
}

export interface GridComponentStructure {
  component: StructureBase;
}

export interface GridColumnStructure {
  data: GridComponentStructure;
}

export interface GridStructure {
  items: GridColumnStructure[][];
}
