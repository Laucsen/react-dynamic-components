import { Store, Data } from '../..';

interface TextStructure {
  name: string;
  type: string;
}

export interface TextProps {
  structure: TextStructure;
  data: Data;
  store: Store;
}
