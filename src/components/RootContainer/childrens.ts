import { RootContainerStructure } from './interfaces';
import { StructureBase } from '../../Core/interfaces';

export default (structure: RootContainerStructure): StructureBase[] | null => {
  return [structure.root];
};
