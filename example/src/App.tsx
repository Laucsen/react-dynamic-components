import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import RCL, { Container, Row, Column } from './reactComponentLib';

const SimpleText = styled.div`
  color: blue;
`;

const App = () => {
  const [type] = useState('mage');

  const [structure, setStructure] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const getStructure = axios(`/samples/${type}-structure.json`);
    getStructure.then(res => setStructure(res.data));
  }, [type]);
  useEffect(() => {
    if (structure) {
      const getData = axios(`/samples/${type}-data.json`);
      getData.then(res => setData(res.data));
    }
  }, [type, structure]);

  if (!structure || !data) {
    return null;
  }

  console.log(structure);
  console.log(data);

  return (
    <div>
      <Container>
        <Row>
          <Column mobile={6} tablet={12} desktop={5}>
            <SimpleText>mobile 6 / tablet 12 / desktop 5</SimpleText>
          </Column>
          <Column mobile={6} tablet={6} desktop={5}>
            <SimpleText>mobile 6 / tablet 6 / desktop 5</SimpleText>
          </Column>
          <Column mobile={12} tablet={6} desktop={2}>
            <SimpleText>mobile 12 / tablet 6 / desktop 2</SimpleText>
          </Column>
        </Row>
      </Container>
    </div>
  );
};

export default App;
