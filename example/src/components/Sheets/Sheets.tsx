import React, { useEffect, useState } from 'react';

import RDC from '../../rdc';

import { SheetProps } from './interfaces';

const Sheets: React.FC<SheetProps> = ({ data }) => {
  const [type] = useState(data);

  const [sheetStructure, setSheetStructure] = useState<null | string>(null);
  const [sheetData, setSheetData] = useState<null | string>(null);

  useEffect(() => {
    fetch(`/samples/${type}-structure.json`)
      .then(res => res.text())
      .then(res => setSheetStructure(res));
  }, [type]);
  useEffect(() => {
    if (sheetStructure) {
      fetch(`/samples/${type}-data.json`)
        .then(res => res.text())
        .then(res => setSheetData(res));
    }
  }, [type, sheetStructure]);

  if (!sheetStructure || !sheetData) {
    return null;
  }

  return <RDC structure={sheetStructure} data={sheetData} />;
};

export default Sheets;
