import React, { PureComponent } from "react";
// import PropTypes from "prop-types";
import TodoList from "./todoList";
import TodoForm from "./todoForm";
import StatusView from "./statusView";

const defaultTodo = {
  id: "",
  text: ""
};
class index extends PureComponent {
  state = {
    todo: defaultTodo,
    todoList: [],
    status: "all"
  };

  constructor(props) {
    super(props);
    this.getData();
  }

  getData = async () => {
    const res = await fetch("http://localhost:3004/todos");
    const json = await res.json();
    this.setState({ todoList: json });
  };

  deleteData = async id => {
    await fetch(`http://localhost:3004/todos/${id}`, {
      method: "DELETE"
    });
    const { todoList } = this.state;
    this.setState({
      todoList: todoList.filter(x => x.id !== id)
    });
  };

  saveData = async data => {
    let url = "http://localhost:3004/todos";
    let method = "POST";
    if (data.id) {
      url = `${url}/${data.id}`;
      method = "PUT";
    }
    const res = await fetch(url, {
      method: method,
      headers: {
        accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const json = await res.json();
    const { todoList } = this.state;
    if (data.id) {
      const index = todoList.findIndex(x => x.id === data.id);
      this.setState({
        todoList: [
          ...todoList.slice(0, index),
          json,
          ...todoList.slice(index + 1)
        ],
        todo: defaultTodo
      });
    } else {
      this.setState({ todoList: [json, ...todoList], todo: defaultTodo });
    }
  };

  changeText = e => {
    const { todo } = this.state;
    this.setState({ todo: { ...todo, text: e.target.value } });
  };

  addTodo = e => {
    e.preventDefault();
    const { todo } = this.state;
    this.saveData({
      id: todo.id,
      text: todo.text,
      isDone: false
    });
  };

  completeTask = id => {
    const { todoList } = this.state;
    const index = todoList.findIndex(x => x.id === id);
    this.saveData({ ...todoList[index], isDone: !todoList[index].isDone });
  };

  changeStatus = status => {
    this.setState({ status });
  };

  editTask = id => {
    const { todoList } = this.state;
    const todo = todoList.find(x => x.id === id);
    this.setState({ todo: { id: todo.id, text: todo.text } });
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
          deleteTask={this.deleteData}
          editTask={this.editTask}
        />
      </div>
    );
  }
}

index.propTypes = {};

export default index;
