import React from "react";
import css from "./ToDoInput.module.css";

export const ToDoInput = React.memo((props) => {
  console.log("ToDoINPUT")
  return (
    <div className={css.todo}>
      <h1 className={css.todo__title}>Мой список дел</h1>
      <div className={css.todo__input}>
        <input
          type="text"
          className={css.input__task}
          value={props.currentValue}
          onKeyPress={props.handleKeyDownEnter}
          onChange={props.handleChangeInput}
        />
        <button className={css.add__task} onClick={props.handleAddTask}>
          Добавить
        </button>
      </div>
      <div></div>
    </div>
  );
});
