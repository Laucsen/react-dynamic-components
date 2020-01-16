import React from 'react';
import ReactJson from 'react-json-view';

import RDC from '../../rdc';
import { useRdcState } from '../../utils';

import { SheetsNavigationProps } from './interfaces';

const SheetsNavigation: React.FC<SheetsNavigationProps> = () => {
  const { structure, data, setStructure, setData } = useRdcState(
    '/samples/navigation-structure.json',
    '/samples/navigation-data.json',
  );
  if (!structure || !data) {
    return null;
  }

  return (
    <div>
      <RDC structure={structure} data={data} />
      <ReactJson src={JSON.parse(structure)} onEdit={edit => setStructure(JSON.stringify(edit.updated_src))} />;
      <ReactJson src={JSON.parse(data)} onEdit={edit => setData(JSON.stringify(edit.updated_src))} />;
    </div>
  );
};

export default SheetsNavigation;
