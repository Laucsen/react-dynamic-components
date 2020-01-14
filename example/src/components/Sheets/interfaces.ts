import { Store, Data } from '../../rdc';

interface SheetsStructure {
  name: string;
  type: string;
}

export interface SheetProps {
  structure: SheetsStructure;
  data: Data;
  store: Store;
}
