import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { connectController, StructureBase, DataConfig } from './store';
import { getErrorsStructureAndData, StructureError } from './errors';

import theme from './themes';

import { CoreProps } from './interfaces';

const Core: React.FC<CoreProps> = ({ structure: structureStr, data: dataStr, store }) => {
  const [data, setData] = useState<DataConfig | null>(null);

  const [, setErrors] = useState<StructureError[] | null>(null);
  const [RootElement, setElements] = useState<React.ReactElement | null>(null);

  // Parse Structure Once...
  useEffect(() => {
    try {
      const parsedStructure = JSON.parse(structureStr);
      const structureAnalisys = store.validateStructure(parsedStructure);
      if (structureAnalisys.length !== 0) {
        setErrors(structureAnalisys);

        const errorsDef = getErrorsStructureAndData(structureAnalisys);
        setData({ data: errorsDef.data });

        const elements = store.build(errorsDef.structure as StructureBase);
        setElements(elements);
      } else {
        const elements = store.build(parsedStructure);
        setElements(elements);
      }
    } catch (err) {
      console.log('Error: ');
      console.log(err);
    }
  }, [structureStr]);

  // Parse Data Change each time...
  useEffect(() => {
    try {
      const parsedData = JSON.parse(dataStr);
      setData(parsedData);
    } catch (err) {
      console.log('Error: ');
      console.log(err);
    }
  }, [dataStr]);

  if (!RootElement) {
    return null;
  }

  return (
    <>
      <theme.global />
      <ThemeProvider theme={theme}>{store.appendDataToContainer(RootElement, data)}</ThemeProvider>
    </>
  );
};

export default connectController(Core);
