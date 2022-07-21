import React from "react";
import s from "./ToDoList.module.css";
import { ToDoItem } from "../ToDoItem/ToDoItem";

export const ToDoList = (props) => {
  return (
    <div className={s.todo}>
      <ul className={s.todo__list}>
        {props.todos.map((item) => {
          return (
            <ToDoItem
              key={item.id}
              task={item}
              handleDeleteTask={props.handleDeleteTask}
            />
          );
        })}
      </ul>
      {props.todos.length ? (
        <span>Итого: {props.todos.length}</span>
      ) : (
        "Делов нет"
      )}
    </div>
  );
};
