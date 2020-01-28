import React, { useState, useEffect } from 'react';
import ReactJson from 'react-json-view';

import * as RDC from '../../rdc';
import { useRdcState } from '../../utils';

import { SheetProps } from './interfaces';

import { PUBLIC_URL } from '../../api';

const Sheets: React.FC<SheetProps> = ({ data: incommingData }) => {
  const [type, setType] = useState(incommingData);
  useEffect(() => {
    setType(incommingData);
  }, [incommingData]);

  const { structure, data, setStructure, setData } = useRdcState(
    `${PUBLIC_URL}/samples/${type}-structure.json`,
    `${PUBLIC_URL}/samples/${type}-data.json`,
  );

  if (!type || !structure || !data) {
    return null;
  }

  return (
    <>
      <RDC.Core structure={structure} data={data} />
      <ReactJson src={JSON.parse(structure)} onEdit={edit => setStructure(JSON.stringify(edit.updated_src))} />;
      <ReactJson src={JSON.parse(data)} onEdit={edit => setData(JSON.stringify(edit.updated_src))} />;
    </>
  );
};

export default Sheets;
