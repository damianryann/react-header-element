import React from 'react';
import { mount } from 'enzyme';

import App from './App';

it('mounts without crashing', () => {
  const component = mount(<App />);

  expect(component).toMatchSnapshot();
});
