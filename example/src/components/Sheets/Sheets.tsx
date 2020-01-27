import React, { useState, useEffect } from 'react';
import ReactJson from 'react-json-view';

import * as RDC from '../../rdc';
import { useRdcState } from '../../utils';

import { SheetProps } from './interfaces';

const Sheets: React.FC<SheetProps> = ({ data: incommingData }) => {
  const [type, setType] = useState(incommingData);
  useEffect(() => {
    setType(incommingData);
  }, [incommingData]);

  const { structure, data, setStructure, setData } = useRdcState(
    `/samples/${type}-structure.json`,
    `/samples/${type}-data.json`,
  );

  if (!type || !structure || !data) {
    return null;
  }

  return (
    <div>
      <RDC.Core structure={structure} data={data} />
      <ReactJson src={JSON.parse(structure)} onEdit={edit => setStructure(JSON.stringify(edit.updated_src))} />;
      <ReactJson src={JSON.parse(data)} onEdit={edit => setData(JSON.stringify(edit.updated_src))} />;
    </div>
  );
};

export default Sheets;
