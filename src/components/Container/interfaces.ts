import { Store, DefaultConfigStyles } from '../..';
import { StructureBase, DataConfig } from '../../Core/interfaces';

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
