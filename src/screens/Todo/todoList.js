import React, { memo } from "react";
import PropTypes from "prop-types";

const todoList = ({ todoList, status, completeTask, deleteTask, editTask }) => {
  return (
    <div>
      {todoList
        .filter(x => {
          switch (status) {
            case "pending":
              return !x.isDone;
            case "completed":
              return x.isDone;

            default:
              return true;
          }
        })
        .map(item => (
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
              onChange={() => completeTask(item.id)}
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
              onClick={() => deleteTask(item.id)}
            />
            <input
              type="button"
              value="Edit"
              onClick={() => editTask(item.id)}
            />
          </div>
        ))}
    </div>
  );
};

todoList.propTypes = {
  todoList: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
  completeTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired
};

export default memo(todoList);
