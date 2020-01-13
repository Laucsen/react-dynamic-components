import React, { useState, useEffect } from 'react';

import { connectController } from './store';

import { CoreProps, CoreBaseState } from './interfaces';

const Core: React.FC<CoreProps> = ({ structure, data, store }) => {
  const [state, setState] = useState<CoreBaseState | null>(null);

  useEffect(() => {
    try {
      const validaData: CoreBaseState = {
        structure: JSON.parse(structure),
        data: JSON.parse(data),
      };

      // - HOW TO VALIDATE?
      const result = store.validateStructure(validaData.structure);
      console.log(result);

      setState(validaData);
    } catch (err) {
      console.log('Error: ');
      console.log(err);
    }
  }, [structure, data]);

  if (!state) {
    return null;
  }

  console.log(state.structure);

  return store.build(state.structure, state.data.data);
};

export default connectController(Core);
