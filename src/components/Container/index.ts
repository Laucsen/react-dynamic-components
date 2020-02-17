import ContainerSrc from './Container';
import childrens from './childrens';
import ContainerStructure from './structure';
import { register } from '../../core';

const Container = register('Container', ContainerStructure, null, {
  childrens: childrens,
})(ContainerSrc);

export { Container };
