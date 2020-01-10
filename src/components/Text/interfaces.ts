import { Store, DataMap } from '../..';

interface TextStructure {
  name: string;
  type: string;
}

export interface TextProps {
  structure: TextStructure;
  data: DataMap;
  store: Store;
}
