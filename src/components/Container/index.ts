import Column from './Column';
import Row from './Row';
import ContainerSource from './Container';
import ContainerStructure from './structure';

import { register } from '../../';

const Container = register('Container', ContainerStructure)(ContainerSource);

export { Container, Row, Column };
