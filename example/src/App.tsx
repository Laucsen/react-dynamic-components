import React, { useEffect, useState } from 'react';

import RDC from './rdc';

import {} from './components/Sheets';

const App = () => {
  const [structure, setStructure] = useState<null | string>(null);
  const [data, setData] = useState<null | string>(null);

  useEffect(() => {
    fetch(`/samples/base-structure.json`)
      .then(res => res.text())
      .then(res => setStructure(res));
  }, []);
  useEffect(() => {
    if (structure) {
      fetch(`/samples/base-data.json`)
        .then(res => res.text())
        .then(res => setData(res));
    }
  }, [structure]);

  if (!structure || !data) {
    return null;
  }

  return <RDC structure={structure} data={data} />;
};

export default App;
