import { register } from '../..';

import ContainerSrc from './Container';
import childrens from './childrens';
import ContainerStructure from './structure';

const Container = register('Container', ContainerStructure, null, {
  childrens: childrens,
})(ContainerSrc);

export { Container };
