import * as React from 'react';
import { mount } from 'enzyme';

import { Core } from '../../';

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
              type: 'Text',
              name: 'text-a',
            },
          },
        },
      ],
    ],
  },
};

const data = {
  version: 1,
  data: {
    'text-a': 'Yes',
  },
};

const build = () => mount(<Core structure={JSON.stringify(structure)} data={JSON.stringify(data)} />);

describe('<Grid />', () => {
  it('renders a Container with sub elements', () => {
    const Wrapper = build();

    expect(
      Wrapper.find('[data-name="text-a"]')
        .first()
        .text(),
    ).toBe('Yes');
  });
});
