import React from "react";
import s from "./ToDoInput.module.css";
import { ToDoList } from "../ToDoList/ToDoList";

const ToDoInput = (props) => {
  return (
    <div className={s.todo}>
      <h1 className={s.todo__title}>Мой список дел</h1>
      <div className={s.todo__input}>
        <input
          type="text"
          className={s.input__task}
          value={props.currentValue}
          onKeyPress={(e) => props.handleKeyDownEnter(e, props.currentValue)}
          onChange={(e) => props.handleChangeInput(e.currentTarget.value)}
        />
        <button
          className={s.add__task}
          onClick={() => props.handleAddTask(props.currentValue)}
        >
          Добавить
        </button>
      </div>
      <div>
      </div>
    </div>
  );
};

export default ToDoInput;
