import * as React from 'react';
import styled from 'styled-components';
import { mount } from 'enzyme';

import { Grid, Row, Column } from '.';

const SimpleText = styled.div`
  color: blue;
`;

describe('<Grid />', () => {
  it('renders a Container with sub elements', () => {
    const Wrapper = mount(
      <Grid>
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
      </Grid>,
    );

    expect(Wrapper.find(Column)).toHaveLength(3);

    expect(true).toBeTruthy();
  });
});
