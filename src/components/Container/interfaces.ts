import { Store, Data } from '../..';
import { StrctureBase } from '../../Core/interfaces';

interface ContainerStrucutre {
  name?: string;
  type: string;
  components: StrctureBase[];
}

export interface ContainerProps {
  structure: ContainerStrucutre;
  data: Data;
  store: Store;
}
