import { Store, DefaultConfigStyles, StructureBase } from '../..';
import { DataConfig } from '../../Core/store';

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
