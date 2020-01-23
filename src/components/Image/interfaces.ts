import { Store } from '../..';

interface ImageStructure {
  name: string;
}

export interface ImageProps {
  structure: ImageStructure;
  data: string;
  store: Store;
}
