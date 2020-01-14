import { Store } from '../../rdc';

interface SheetsStructure {
  name: string;
  type: string;
}

export interface SheetProps {
  structure: SheetsStructure;
  data: string;
  store: Store;
}
