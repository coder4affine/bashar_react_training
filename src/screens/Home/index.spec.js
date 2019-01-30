import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from './index';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {};

  const enzymeWrapper = shallow(<Home {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('Home page testing', () => {
  it('description', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('div').hasClass('container')).toBe(true);
    expect(enzymeWrapper.find('h1').text()).toBe('Home Page');
  });
});
