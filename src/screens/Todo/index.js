import React, { PureComponent } from "react";
// import PropTypes from "prop-types";
import TodoList from "./todoList";
import TodoForm from "./todoForm";
import StatusView from "./statusView";

class index extends PureComponent {
  state = {
    todo: "",
    todoList: [],
    status: "all"
  };

  changeText = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addTodo = e => {
    e.preventDefault();
    const { todo, todoList } = this.state;
    this.setState({
      todoList: [
        {
          id: new Date().getMilliseconds(),
          text: todo,
          isDone: false
        },
        ...todoList
      ],
      todo: ""
    });
  };

  completeTask = id => {
    const { todoList } = this.state;
    const index = todoList.findIndex(x => x.id === id);
    this.setState({
      todoList: [
        ...todoList.slice(0, index),
        { ...todoList[index], isDone: !todoList[index].isDone },
        ...todoList.slice(index + 1)
      ]
    });
  };

  deleteTask = id => {
    const { todoList } = this.state;
    const index = todoList.findIndex(x => x.id === id);
    this.setState({
      todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)]
    });
  };

  changeStatus = status => {
    this.setState({ status });
  };

  render() {
    const { todo, todoList, status } = this.state;
    return (
      <div>
        <h1>My Todo Application</h1>
        <TodoForm
          todo={todo}
          addTodo={this.addTodo}
          changeText={this.changeText}
        />
        <StatusView changeStatus={this.changeStatus} />
        <TodoList
          todoList={todoList}
          status={status}
          completeTask={this.completeTask}
          deleteTask={this.deleteTask}
        />
      </div>
    );
  }
}

index.propTypes = {};

export default index;
