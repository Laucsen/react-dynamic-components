import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { connectController, StructureBase } from './store';
import { getErrorsStructureAndData, StructureError } from './errors';
import theme from './themes';

import { CoreProps, CoreState } from './interfaces';

const Core: React.FC<CoreProps> = ({ structure: structureStr, data: dataStr, store }) => {
  const [state, setState] = useState<CoreState | null>(null);
  const [errors, setErrors] = useState<StructureError[] | null>(null);

  useEffect(() => {
    store.init();
  }, []);

  useEffect(() => {
    try {
      const parsedInfo = {
        structure: JSON.parse(structureStr),
        data: JSON.parse(dataStr),
      };

      const result = store.validateStructure(parsedInfo.structure);
      if (result.length !== 0) {
        setErrors(result);
      } else {
        setState(parsedInfo);
      }
    } catch (err) {
      console.log('Error: ');
      console.log(err);
    }
  }, [structureStr, dataStr, store]);

  if (errors) {
    const errorsDef = getErrorsStructureAndData(errors);
    return store.build(errorsDef.structure as StructureBase, {
      data: errorsDef.data,
    });
  }

  if (!state) {
    return null;
  }

  return (
    <>
      <theme.global />
      <ThemeProvider theme={theme}>{store.build(state.structure, state.data)}</ThemeProvider>;
    </>
  );
};

export default connectController(Core);
