import React from "react";
import { ACTIONS } from "../App.js";
import styles from "./Todo.module.css";

const Todo = ({ todo, dispatch }) => {
  let toggle;

  return (
    <div className={styles.listContainer}>
      <span
        className={styles.listContainerSpan}
        style={{ color: todo.complete ? "#AAA" : "#000" }}
      >
        {todo.task}
      </span>
      <div className={styles.listContainerBtns}>
        <button
          onClick={() =>
            dispatch({ type: ACTIONS.TOGGLE_TO_DO, payload: { id: todo.id } })
          }
        >
          {!todo.complete ? (toggle = "Done") : (toggle = "Undo")}
        </button>
        <button
          onClick={() =>
            dispatch({ type: ACTIONS.DELETE_TO_DO, payload: { id: todo.id } })
          }
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
