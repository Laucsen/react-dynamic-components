import { Store } from '../..';

interface LabelDataStructure {
  title: string;
  text: string;
}

export interface LabelStructure {
  name: string;
  type: string;
  inline: boolean;
}

export interface LabelProps {
  structure: LabelStructure;
  data: LabelDataStructure;
  store: Store;
}
