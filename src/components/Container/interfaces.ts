import { Store, DefaultConfigStyles, StructureBase } from '../..';
import { DataConfig } from '../../core/store';

export interface ContainerStrucutre extends DefaultConfigStyles {
  name?: string;
  type: string;
  components: StructureBase[];
}

export interface ContainerProps {
  structure: ContainerStrucutre;
  store: Store;
  rootData: DataConfig;
}
