import { Store, DefaultConfigStyles, StructureBase } from '../..';
import { DataConfig } from '../../Core/store';

export interface RootContainerStructure extends DefaultConfigStyles {
  root: StructureBase;
}

export interface RootContainerProps {
  structure: RootContainerStructure;
  store: Store;
  rootData: DataConfig;
}
