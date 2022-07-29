import React from "react";
import {
  arrayOf,
  shape,
  oneOfType,
  bool,
  func,
  number,
  string,
} from "prop-types";
import css from "./ToDoList.module.css";
import { ToDoItem } from "../ToDoItem";

export const ToDoList = React.memo(
  ({ todos, handleDeleteTask, handleToggle }) => {
    return (
      <div className={css.todo}>
        <ul className={css.todo__list}>
          {todos.map((item) => {
            console.log("innerItems");
            return (
              <ToDoItem
                key={item.id}
                task={item}
                handleToggle={handleToggle}
                handleDeleteTask={handleDeleteTask}
              />
            );
          })}
        </ul>
        {todos.length ? <span>Итого:{todos.length}</span> : "Делов нет"}
      </div>
    );
  }
);

ToDoList.propTypes = {
  todos: arrayOf(
    shape({ id: number, value: oneOfType([string, number]), complete: bool })
  ).isRequired,
  handleDeleteTask: func.isRequired,
  handleToggle: func.isRequired,
};

ToDoList.defaultProps = {
  handleDeleteTask: () => void 0,
  handleToggle: () => void 0,
};
