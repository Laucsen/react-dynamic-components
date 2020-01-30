import { register } from '../../core';

import RootContainerSource from './RootContainer';
import childrens from './childrens';
import RootStructure from './structure';

export const RootContainer = register('RootContainer', RootStructure, null, {
  childrens: childrens,
})(RootContainerSource);
