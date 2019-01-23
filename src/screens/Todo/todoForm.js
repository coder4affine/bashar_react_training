import React, { memo } from 'react';
import PropTypes from 'prop-types';

const todoForm = ({ todo, addTodo, changeText }) => (
  <form onSubmit={addTodo}>
    <input type="hidden" value={todo.id} name="id" />
    <input type="text" name="todo" value={todo.text} onChange={changeText} />
    <input type="submit" value="Add Todo" />
  </form>
);

todoForm.propTypes = {
  todo: PropTypes.object.isRequired,
  addTodo: PropTypes.func.isRequired,
  changeText: PropTypes.func.isRequired,
};

export default memo(todoForm);
