import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Index, defaultTodo } from './index';
import TodoList from './todoList';
import TodoForm from './todoForm';
import StatusView from './statusView';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    testData: 'Hello Word',
    testMethod: jest.fn(),
  };

  const enzymeWrapper = shallow(<Index {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('Test Todo Component', () => {
  it('Check Prop data', () => {
    const { props, enzymeWrapper } = setup();
    expect(
      enzymeWrapper
        .find('h1')
        .at(0)
        .text(),
    ).toBe(props.testData);
    enzymeWrapper
      .find('input[type="button"]')
      .at(0)
      .simulate('click');
    enzymeWrapper
      .find('input[type="button"]')
      .at(0)
      .simulate('click');
    expect(props.testMethod.mock.calls.length).toBe(2);
    expect(enzymeWrapper.state('todo')).toBe(defaultTodo);
    const Form = enzymeWrapper.find(TodoForm);
    Form.props().changeText({
      target: {
        value: 'My Test Todo',
      },
    });
    expect(enzymeWrapper.state('todo')).toEqual({
      id: '',
      text: 'My Test Todo',
    });
  });
});
