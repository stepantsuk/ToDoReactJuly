import { useState, useEffect } from "react";
import css from "./Wrapper.module.css";
import { ToDoItem } from "../ToDoItem/ToDoItem";

export const Wrapper = (props) => {
  const [currentValue, setCurrentValue] = useState("");
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  });

  // const toFilterTodos = () => {
  //   todos.length &&
  //     setTodos([
  //       ...todos.filter((item) => item.complete === false),
  //       ...todos.filter((item) => item.complete === true),
  //     ]);
  //   console.log("toFilterTodos", todos);
  // };

  const filterTasks = (arr) => {
    return [
      ...arr.filter((item) => item.complete === false),
      ...arr.filter((item) => item.complete === true),
    ];
  };

  const handleChangeInput = (e) => {
    setCurrentValue(e.currentTarget.value);
  };

  const handleAddTask = () => {
    if (currentValue) {
      const newTodo = {
        id: Math.round(Math.random() * 10000),
        value: currentValue,
        complete: false,
      };
      const doneTodos = todos.filter((item) => item.complete === true);
      const unDoneTodos = todos.filter((item) => item.complete === false);
      setTodos([...unDoneTodos, newTodo, ...doneTodos]);
    }
    setCurrentValue("");
  };

  const handleKeyDownEnter = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  const handleDeleteTask = (id) => {
    setTodos([...todos.filter((item) => id !== item.id)]);
  };

  const handleToggle = (id) => {
    setTodos(
      filterTasks(
        todos.map((item) =>
          item.id === id ? { ...item, complete: !item.complete } : item
        )
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className={css.wrapper}>
      <div className={css.todo}>
        <h1 className={css.todo__title}>Мой список дел</h1>
        <div className={css.todo__input}>
          <input
            type="text"
            className={css.input__task}
            value={currentValue}
            onKeyPress={(e) => handleKeyDownEnter(e, currentValue)}
            onChange={handleChangeInput}
          />
          <button className={css.add__task} onClick={handleAddTask}>
            Добавить
          </button>
        </div>
        <ul className={css.todo__list}>
          {todos.map((item) => (
            <ToDoItem
              key={item.id}
              task={item}
              handleDeleteTask={handleDeleteTask}
              handleToggle={handleToggle}
            />
          ))}
        </ul>
        <div>
          Итого: <span>{todos.length}</span>
        </div>
      </div>
    </div>
  );
};

