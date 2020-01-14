import { StructureBase } from '../../Core/interfaces';

export interface ContainerStructure {
  components: StructureBase[];
}

export default (structure: ContainerStructure): StructureBase[] | null => {
  return structure.components;
};
