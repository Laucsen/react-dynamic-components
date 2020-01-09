import React, { Component } from 'react';
import styled from 'styled-components';

import { Container, Row, Column } from './reactComponentLib';

const SimpleText = styled.div`
  color: blue;
`;

class App extends Component {
  render() {
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
  }
}

export default App;
