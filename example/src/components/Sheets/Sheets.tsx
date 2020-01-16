import React, { useState, useEffect } from 'react';

import RDC from '../../rdc';
import { useRdcState } from '../../utils';

import { SheetProps } from './interfaces';

const Sheets: React.FC<SheetProps> = ({ data: incommingData }) => {
  const [type, setType] = useState(incommingData);
  useEffect(() => {
    setType(incommingData);
  }, [incommingData]);

  const { structure, data } = useRdcState(`/samples/${type}-structure.json`, `/samples/${type}-data.json`);

  if (!type) {
    return null;
  }

  if (!structure || !data) {
    return null;
  }

  return <RDC structure={structure} data={data} />;
};

export default Sheets;
