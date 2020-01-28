import React from 'react';
import styled from 'styled-components';

import * as RDC from '../../rdc';
import { useRdcState } from '../../utils';

import { SheetsNavigationProps } from './interfaces';

import { PUBLIC_URL } from '../../api';

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px;
`;

const SheetsNavigation: React.FC<SheetsNavigationProps> = () => {
  const { structure, data } = useRdcState(
    `${PUBLIC_URL}/samples/navigation-structure.json`,
    `${PUBLIC_URL}/samples/navigation-data.json`,
  );
  if (!structure || !data) {
    return null;
  }

  return (
    <div>
      <ButtonsContainer>
        <button disabled>Gurps</button>
        <button>Mage</button>
        <button disabled>DeD 5.0</button>
      </ButtonsContainer>
      <RDC.Core structure={structure} data={data} />
    </div>
  );
};

export default SheetsNavigation;
