import ImageSrc from './Image';
import ImageStructure from './structure';

import { register } from '../../core';

const Image = register('Image', ImageStructure)(ImageSrc);

export { Image };
