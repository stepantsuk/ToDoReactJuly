import React, { useState, useCallback } from "react";
import css from "./ToDoInput.module.css";
import { func } from "prop-types";

export const ToDoInput = React.memo(({ setTodos }) => {
  const [currentValue, setCurrentValue] = useState("");
  const handleChangeInput = useCallback((e) => {
    setCurrentValue(e.currentTarget.value);
  }, []);

  const addTask = useCallback(
    () => {
      if (currentValue) {
        const newTodo = {
          id: Math.round(Math.random() * 10000),
          value: currentValue,
          complete: false,
        };
        setTodos((t) => [newTodo, ...t]);
      }
      setCurrentValue("");
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentValue]
  );

  const handleAddTask = useCallback(
    (e) => {
      e.preventDefault();
      addTask();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [addTask]
  );

  console.log("ToDoINPUT");
  return (
    <div className={css.todo}>
      <h1 className={css.todo__title}>Мой список дел</h1>
      <form className={css.todo__input}>
        <input
          type="text"
          className={css.input__task}
          value={currentValue}
          onChange={handleChangeInput}
          onSubmit={handleAddTask}
        />
        <button className={css.add__task} onClick={handleAddTask}>
          Добавить
        </button>
      </form>
    </div>
  );
});

ToDoInput.propTypes = {
  setTodos: func.isRequired,
};
