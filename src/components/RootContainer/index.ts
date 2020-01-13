import { register } from '../..';

import RootContainerSource from './RootContainer';
import RootStructure from './structure';

export const RootContainer = register('RootContainer', RootStructure)(RootContainerSource);
