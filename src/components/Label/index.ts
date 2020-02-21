import LabelSrc from './Label';
import LabelStructure from './structure';

import { register } from '../../core';

const Label = register('Label', LabelStructure)(LabelSrc);

export { Label };
