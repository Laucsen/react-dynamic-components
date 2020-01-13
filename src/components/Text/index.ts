import TextSrc from './Text';
import TextStructure from './structure';

import { register } from '../..';

const Text = register('Text', TextStructure)(TextSrc);

export { Text };
