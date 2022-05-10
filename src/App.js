import React, { useState, useReducer } from "react";
import "./App.css";
import Todo from "./components/Todo";

export const ACTIONS = {
  ADD_TO_DO: "add-todo",
  TOGGLE_TO_DO: "toggle-todo",
  DELETE_TO_DO: "delete-todo",
};

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_DO:
      return [...todos, newTodo(action.payload.task)];
    case ACTIONS.TOGGLE_TO_DO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TO_DO:
      return todos.filter((todo) => todo.id !== action.payload.id);

    default:
      return todos;
  }
};

function newTodo(task) {
  return { id: Date.now(), task: task, complete: false };
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [task, setTask] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TO_DO, payload: { task: task } });
    setTask("");
  }

  console.log(todos);

  return (
    <div classtask="App">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </div>
  );
}

export default App;
