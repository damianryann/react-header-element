import React from 'react';
import { mount } from 'enzyme';
import HeaderElement from './HeaderElement';

import testData from './HeaderElement.test.json';

it('mounts without crashing', () => {
  const component = mount(<HeaderElement />);

  expect(component).toMatchSnapshot();
});

it('is isFunctional true', () => {
  const component = mount(<HeaderElement {...testData[0]} />);

  const { isFunctional } = testData;

  if (isFunctional) {
    expect(component.find('h1')).toHaveLength(1);
    expect(isFunctional).toBeTruthy();
  }

  expect(component).toMatchSnapshot();
});

it('is isFunctional false', () => {
  const component = mount(<HeaderElement {...testData[1]} />);

  const { isFunctional } = testData;

  if (isFunctional) {
    expect(component.find('h2')).toHaveLength(1);
    expect(isFunctional).toBeFalsy();
  }

  expect(component).toMatchSnapshot();
});

it('is value an h2 and is fallBack h1', () => {
  const component = mount(<HeaderElement {...testData[1]} />);

  const { value, fallBack } = testData;

  expect(component.find('HeaderElement')).toHaveLength(1);

  if (value) {
    expect(value).toBe('h2');
    expect(fallBack).toBe('h1');
  }

  expect(component).toMatchSnapshot();
});
