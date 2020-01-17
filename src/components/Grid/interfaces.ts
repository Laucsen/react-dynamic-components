import { Store, StructureBase } from '../..';
import { DataConfig } from '../../Core/interfaces';
import { RdcTheme, StyledBackgrond } from '../../';

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

interface BackgroundStyle {
  color?: string;
}

export interface GridPropsStructure {
  name: string;
  type: string;
  items: RowStructure[][];
  background?: BackgroundStyle;
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

export interface GridAreaStyleProps {
  theme?: RdcTheme;
  background?: StyledBackgrond;
}
