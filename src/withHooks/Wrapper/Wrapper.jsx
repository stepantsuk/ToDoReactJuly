import { useState, useEffect } from "react";
import s from "./Wrapper.module.css"
import { ToDoItem } from "../ToDoItem/ToDoItem";

const Wrapper = (props) => {
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

  const handleChangeInput = (inputText) => {
    setCurrentValue(inputText);
  };

  const handleAddTask = (inputValue) => {
    if (inputValue) {
      const newTodo = {
        id: Math.round(Math.random() * 10000),
        value: inputValue,
        complete: false,
      };
      setTodos(()=>{
        const doneTodos = todos.filter((item) => item.complete === true);
        const unDoneTodos = todos.filter((item) => item.complete === false);
        return [...unDoneTodos, newTodo, ...doneTodos]
      });
    }
    setCurrentValue("");
  };

  const handleKeyDownEnter = (e, value) => {
    if (e.key === "Enter") {
      console.log("Enter", value)
      handleAddTask(value);
    }
  };

  const handleDeleteTask = (id) => {
    setTodos([...todos.filter((item) => id !== item.id)]);
  };

  const handleToggle = (id) => {
    setTodos(() => {
      const changedTodos = [
        ...todos.map((item) =>
          item.id === id ? { ...item, complete: !item.complete } : { ...item }
        ),
      ];
      return filterTasks(changedTodos);
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className={s.wrapper}>
      <div className={s.todo}>
        <h1 className={s.todo__title}>Мой список дел</h1>
        <div className={s.todo__input}>
          <input
            type="text"
            className={s.input__task}
            value={currentValue}
            onKeyPress={(e) =>
              handleKeyDownEnter(e, currentValue)
            }
            onChange={(e) => handleChangeInput(e.currentTarget.value)}
          />
          <button
            className={s.add__task}
            onClick={() => handleAddTask(currentValue)}
          >
            Добавить
          </button>
        </div>
        <ul className={s.todo__list}>
          {todos.map((item) => {
            return (
              <ToDoItem
                key={item.id}
                task={item}
                handleDeleteTask={handleDeleteTask}
                handleToggle={handleToggle}
              />
            );
          })}
        </ul>
        <div>
          Итого:
          <span>{" " + todos.length}</span>
        </div>
      </div>
    </div>
  );
};
export default Wrapper;
