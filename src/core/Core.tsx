import React, { useState, useEffect } from 'react';

import { connectController } from './store';
import { getErrorsStructureAndData } from './errors';

import { CoreProps, CoreBaseState, StructureError } from './interfaces';

const Core: React.FC<CoreProps> = ({ structure, data, store }) => {
  const [state, setState] = useState<CoreBaseState | null>(null);
  const [errors, setErrors] = useState<StructureError[] | null>(null);

  useEffect(() => {
    try {
      const validaData: CoreBaseState = {
        structure: JSON.parse(structure),
        data: JSON.parse(data),
      };

      // - HOW TO VALIDATE?
      const result = store.validateStructure(validaData.structure);
      if (result.length !== 0) {
        setErrors(result);
      } else {
        setState(validaData);
      }
    } catch (err) {
      console.log('Error: ');
      console.log(err);
    }
  }, [structure, data]);

  if (errors) {
    console.log(errors);
    const errorsDef = getErrorsStructureAndData(errors);
    return store.build(errorsDef.structure, errorsDef.data);
  }

  if (!state) {
    return null;
  }

  console.log(state.structure);

  return store.build(state.structure, state.data.data);
};

export default connectController(Core);
