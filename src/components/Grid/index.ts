import { register } from '../../core';

import Column from './Column';
import GridSource from './Grid';
import Row from './Row';
import childrens from './childrens';
import GridStructure from './structure';

const Grid = register('Grid', GridStructure, null, {
  childrens: childrens,
})(GridSource);

export { Grid, Row, Column };
