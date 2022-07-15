import { useState } from "react";
import { ToDoItem } from "./ToDoItem";

const Wrapper = (props) => {
  const [currentValue, setCurrentValue] = useState("");
  const [todos, setTodos] = useState([]);

  // const toFilterTodos = () => {
  //   todos.length &&
  //     setTodos([
  //       ...todos.filter((item) => item.complete === false),
  //       ...todos.filter((item) => item.complete === true),
  //     ]);
  //   console.log("toFilterTodos", todos);
  // };

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
      setTodos([...todos, newTodo]);
    }
    setCurrentValue("");
  };

  const handleDeleteTask = (id) => {
    setTodos([...todos.filter((item) => id !== item.id)]);
  };

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((item) =>
        item.id === id ? { ...item, complete: !item.complete } : { ...item }
      ),
    ]);
  };

  console.log("todos", todos);

  return (
    <div className="wrapper">
      <div className="todo">
        <h1 className="todo__title">Мой список дел</h1>
        <div className="todo__input">
          <input
            type="text"
            className="input__task"
            value={currentValue}
            onChange={(e) => handleChangeInput(e.currentTarget.value)}
          />
          <button
            className="add__task"
            onClick={() => handleAddTask(currentValue)}
          >
            Добавить
          </button>
        </div>
        <ul className="todo__list">
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
        <div className="counter">
          Итого:
          <span className="counter__value">{" " + todos.length}</span>
        </div>
      </div>
    </div>
  );
};
export default Wrapper;
