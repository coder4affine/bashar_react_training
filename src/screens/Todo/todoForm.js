import React, { memo } from "react";
import PropTypes from "prop-types";

const todoForm = ({ todo, addTodo, changeText }) => {
  return (
    <form onSubmit={addTodo}>
      <input type="text" name="todo" value={todo} onChange={changeText} />
      <input type="submit" value="Add Todo" />
    </form>
  );
};

todoForm.propTypes = {
  todo: PropTypes.string.isRequired,
  addTodo: PropTypes.func.isRequired,
  changeText: PropTypes.func.isRequired
};

export default memo(todoForm);
