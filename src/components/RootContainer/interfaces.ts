import { Store, StructureBase } from '../../core';
import { DataConfig } from '../../core/store';
import { DefaultConfigStyles } from '../../utils';

export interface RootContainerStructure extends DefaultConfigStyles {
  root: StructureBase;
}

export interface RootContainerProps {
  structure: RootContainerStructure;
  store: Store;
  rootData: DataConfig;
}
