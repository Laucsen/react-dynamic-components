import { register } from '../..';

import ContainerSrc from './Container';
import ContainerStructure from './structure';
import childrens from './childrens';

const Container = register('Container', ContainerStructure, null, childrens)(ContainerSrc);

export { Container };
