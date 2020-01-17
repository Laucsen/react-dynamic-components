import { StructureBase } from '../..';

export interface ContainerStructure {
  components: StructureBase[];
}

export default (structure: ContainerStructure): StructureBase[] | null => {
  return structure.components;
};
