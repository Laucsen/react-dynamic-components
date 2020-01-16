import { Store } from '../../rdc';

interface SheetsNavigationStructure {
  name: string;
  type: string;
}

export interface SheetsNavigationProps {
  structure: SheetsNavigationStructure;
  data: string;
  store: Store;
}
