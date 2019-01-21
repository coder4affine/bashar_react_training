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
        ]
      });
    } else {
      this.setState({ todoList: [json, ...todoList] });
    }
  };

  changeText = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addTodo = e => {
    e.preventDefault();
    const { todo } = this.state;
    this.saveData({
      text: todo,
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
        />
      </div>
    );
  }
}

index.propTypes = {};

export default index;
