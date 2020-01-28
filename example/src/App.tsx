import React from 'react';

import * as RDC from './rdc';

import { useRdcState } from './utils';

import {} from './components/Sheets';
import {} from './components/SheetsNavigation';

import { PUBLIC_URL } from './api';

const App = () => {
  const { structure, data } = useRdcState(
    `${PUBLIC_URL}/samples/base-structure.json`,
    `${PUBLIC_URL}/samples/base-data.json`,
  );
  if (!structure || !data) {
    return null;
  }

  return <RDC.Core structure={structure} data={data} />;
};

export default App;
