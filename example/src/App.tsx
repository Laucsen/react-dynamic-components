import React, { useEffect, useState } from 'react';

import RDC from './rdc';

const App = () => {
  const [type] = useState('mage');

  const [structure, setStructure] = useState<null | string>(null);
  const [data, setData] = useState<null | string>(null);

  useEffect(() => {
    fetch(`/samples/${type}-structure.json`)
      .then(res => res.text())
      .then(res => setStructure(res));
  }, [type]);
  useEffect(() => {
    if (structure) {
      fetch(`/samples/${type}-data.json`)
        .then(res => res.text())
        .then(res => setData(res));
    }
  }, [type, structure]);

  if (!structure || !data) {
    return null;
  }

  return <RDC structure={structure} data={data} />;
};

export default App;
