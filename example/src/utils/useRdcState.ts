import { useState, useEffect, Dispatch, SetStateAction } from 'react';

interface RdcState {
  structure: string | null;
  data: string | null;
  setStructure: Dispatch<SetStateAction<string | null>>;
  setData: Dispatch<SetStateAction<string | null>>;
}

function useRdcState(structureUrl: string, dataUrl: string): RdcState {
  const [structure, setStructure] = useState<null | string>(null);
  const [data, setData] = useState<null | string>(null);

  useEffect(() => {
    fetch(structureUrl)
      .then(res => res.text())
      .then(res => setStructure(res));
  }, [structureUrl]);
  useEffect(() => {
    fetch(dataUrl)
      .then(res => res.text())
      .then(res => setData(res));
  }, [dataUrl]);

  return {
    structure,
    data,
    setStructure,
    setData,
  };
}

export default useRdcState;
