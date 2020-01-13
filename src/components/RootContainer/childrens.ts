import { RootContainerStructure } from './interfaces';
import { StrctureBase } from '../../Core/interfaces';

export default (structure: RootContainerStructure): StrctureBase[] | null => {
  return [structure.root];
};
