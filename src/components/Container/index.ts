import ContainerSrc from './Container';
import ContainerStructure from './structure';

import { register } from '../..';

const Container = register('Container', ContainerStructure)(ContainerSrc);

export { Container };
