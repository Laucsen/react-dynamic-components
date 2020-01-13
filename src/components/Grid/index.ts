import { register } from '../..';

import Column from './Column';
import Row from './Row';
import GridSource from './Grid';
import GridStructure from './structure';
import childrens from './childrens';

const Grid = register('Grid', GridStructure, null, childrens)(GridSource);

export { Grid, Row, Column };
