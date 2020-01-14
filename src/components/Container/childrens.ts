import { StrctureBase } from '../../Core/interfaces';

export interface ContainerStructure {
  components: StrctureBase[];
}

export default (structure: ContainerStructure): StrctureBase[] | null => {
  return structure.components;
};
