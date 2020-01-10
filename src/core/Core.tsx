import React, { useState, useEffect } from 'react';

import { connectController } from './store';
import { convertData } from '../utils';

import { CoreProps, CoreBaseState } from './interfaces';

const Core: React.FC<CoreProps> = ({ structure, data, store }) => {
  const [state, setState] = useState<CoreBaseState | null>(null);

  useEffect(() => {
    try {
      const validaData: CoreBaseState = convertData(structure, data);
      setState(validaData);
    } catch (err) {
      console.log(err);
    }
  }, [structure, data]);

  if (!state) {
    return null;
  }

  return store.build(state.structure, state.data.data);
};

export default connectController(Core);
