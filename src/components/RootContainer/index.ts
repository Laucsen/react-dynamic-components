import { register } from '../../core';

import RootContainerSource from './RootContainer';
import RootStructure from './structure';
import childrens from './childrens';

export const RootContainer = register('RootContainer', RootStructure, null, childrens)(RootContainerSource);
