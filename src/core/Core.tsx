import React, { useState, useEffect } from 'react';

import { connectController } from './store';
import { getErrorsStructureAndData } from './errors';

import { CoreProps, StructureError, StructureBase } from './interfaces';

const Core: React.FC<CoreProps> = ({ structure: structureStr, data, store }) => {
  const [structure, setStructure] = useState<StructureBase | null>(null);
  const [errors, setErrors] = useState<StructureError[] | null>(null);

  useEffect(() => {
    try {
      const parsedData = JSON.parse(data);
      const parsedStructure = JSON.parse(structureStr);

      const result = store.validateStructure(parsedStructure);
      if (result.length !== 0) {
        setErrors(result);
      } else {
        setStructure(parsedStructure);
        store.storeData(parsedData);
      }
    } catch (err) {
      console.log('Error: ');
      console.log(err);
    }
  }, [structureStr, data, store]);

  if (errors) {
    const errorsDef = getErrorsStructureAndData(errors);
    store.storeData(errorsDef.data);
    return store.build(errorsDef.structure as StructureBase);
  }

  if (!structure) {
    return null;
  }

  return store.build(structure);
};

export default connectController(Core);
