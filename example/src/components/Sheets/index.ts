import { register } from '../../rdc';

import Sheets from './Sheets';
import SheetsStructure from './structure';

export default register('Sheets', SheetsStructure)(Sheets);
