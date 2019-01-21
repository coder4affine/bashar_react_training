import React, { Component } from "react";
import PropTypes from "prop-types";

class index extends Component {
  state = {
    todo: "",
    todoList: []
  };

  changeText = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addTodo = () => {
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

  render() {
    const { todo, todoList } = this.state;
    return (
      <div>
        <h1>My Todo Application</h1>
        <div>
          <input
            type="text"
            name="todo"
            value={todo}
            onChange={this.changeText}
          />
          <input type="button" value="Add Todo" onClick={this.addTodo} />
        </div>
        <div>
          {todoList.map(item => (
            <div
              key={item.id}
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                margin: "10px 0"
              }}
            >
              <input
                type="checkbox"
                value={item.isDone}
                onChange={() => this.completeTask(item.id)}
              />
              <span
                style={{
                  textDecoration: item.isDone ? "line-through" : "none",
                  display: "flex",
                  flex: 1
                }}
              >
                {item.text}
              </span>
              <input
                type="button"
                value="Delete"
                onClick={() => this.deleteTask(item.id)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

index.propTypes = {};

export default index;
