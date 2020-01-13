import Column from './Column';
import Row from './Row';
import GridSource from './Grid';
import GridStructure from './structure';

import { register } from '../..';

const Grid = register('Grid', GridStructure)(GridSource);

export { Grid, Row, Column };
