import React from "react";
import s from "./Finder.module.css";

export const Finder = (props) => {
  return (
    <div className={s.todo}>
      <h1 className={s.todo__title}>Поиск</h1>
      <div className={s.todo__input}>
        <input
          type="text"
          className={s.input__task}
          placeholder="find..."
          value={props.value}
          // onKeyPress={(e) => props.handleKeyDownEnter(e, props.currentValue)}
          onChange={(e) => props.onChange(e.currentTarget.value)}
        />
      </div>
    </div>
  );
};

