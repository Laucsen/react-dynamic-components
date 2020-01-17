import { RootContainerStructure } from './interfaces';
import { StructureBase } from '../..';

export default (structure: RootContainerStructure): StructureBase[] | null => {
  return [structure.root];
};
