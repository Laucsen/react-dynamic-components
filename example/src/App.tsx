import React, { Component } from 'react';
import styled from 'styled-components';

import { Container, Row, Column } from './reactComponentLib';

const StyledDiv = styled.div`
  padding: 10px;
  background-color: blue;
  color: white;
`;

// 0. Add default test to Container.
// 1. Criar componente do tipo Container.
// 2. Crair JSON com um esquema para o Container com itens internos.
// 3. Ler o JSON
// 4. Validar o esquema do JSON
// 5. Mostrar o resultado na tela.
// 6. Criar a página com tudo.
// 7. Mostrar o JSON em baixo da tela.
// 8. ADd JSON based test to Container.

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Column mobile={6} tablet={12} desktop={5}>
              mobile 6 / tablet 12 / desktop 5
            </Column>
            <Column mobile={6} tablet={6} desktop={5}>
              mobile 6 / tablet 6 / desktop 5
            </Column>
            <Column mobile={12} tablet={6} desktop={2}>
              mobile 12 / tablet 6 / desktop 2
            </Column>
          </Row>
        </Container>
        <StyledDiv>Example App styled component</StyledDiv>
      </div>
    );
  }
}

export default App;
