import React from "react";
import css from "./Finder.module.css";

export const Finder = React.memo((props) => {
  console.log("render FINDER");
  return (
    <div className={css.todo}>
      <h1 className={css.todo__title}>Поиск</h1>
      <div className={css.todo__input}>
        <input
          type="text"
          className={css.input__task}
          placeholder="find..."
          value={props.value}
          // onKeyPress={(e) => props.handleKeyDownEnter(e, props.currentValue)}
          onChange={(e) => props.onChange(e.currentTarget.value)}
        />
      </div>
    </div>
  );
});
