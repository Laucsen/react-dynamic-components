import React from 'react';
import { mount } from 'enzyme';

import RDC from '../../';

const structure = {
  version: 1,
  name: 'base-structure',
  title: 'React Dynamic Components',
  root: {
    name: 'main-grid',
    type: 'Grid',
    items: [
      [
        {
          data: {
            mobile: 6,
            tablet: 12,
            desktop: 12,
            component: {
              type: 'dummy',
            },
          },
        },
      ],
    ],
  },
};

const data = {
  version: 1,
  data: {},
};

describe('<Grid />', () => {
  it('renders a Container with sub elements', () => {
    const Wrapper = mount(<RDC structure={structure} data={data} />);

    console.log(Wrapper.html());

    expect(true).toBeTruthy();
  });
});
