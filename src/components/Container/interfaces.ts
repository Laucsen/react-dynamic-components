import { Store } from '../..';
import { StructureBase, DataConfig } from '../../Core/interfaces';

interface ContainerStrucutre {
  name?: string;
  type: string;
  components: StructureBase[];
}

export interface ContainerProps {
  structure: ContainerStrucutre;
  store: Store;
  rootData: DataConfig;
}
