import React, { useState, useEffect } from 'react';

import { convertData } from '../utils';

import { CoreProps, CoreBaseState } from './interfaces';

const Core: React.FC<CoreProps> = ({ structure, data }) => {
  const [state, setState] = useState<CoreBaseState>({});

  useEffect(() => {
    try {
      const validaData: CoreBaseState = convertData(structure, data);
      setState(validaData);
    } catch (err) {
      console.log(err);
    }
  }, [structure, data]);

  console.log(state);

  return <div>AAA</div>;
};

export default Core;
