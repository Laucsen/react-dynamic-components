import React from 'react';

import RDC from './rdc';

import { useRdcState } from './utils';

import {} from './components/Sheets';
import {} from './components/SheetsNavigation';

const App = () => {
  const { structure, data } = useRdcState('/samples/base-structure.json', '/samples/base-data.json');
  if (!structure || !data) {
    return null;
  }

  return <RDC structure={structure} data={data} />;
};

export default App;
