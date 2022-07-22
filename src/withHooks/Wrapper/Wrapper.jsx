import { useState, useEffect, useMemo, useCallback } from "react";
import css from "./Wrapper.module.css";
import { ToDoInput } from "./../ToDoInput";
import { ToDoList } from "./../ToDoList";
import { Finder } from "./../Finder";
import { Sorter } from "./../Sorter";

export const Wrapper = (props) => {
  const [currentValue, setCurrentValue] = useState("");
  //const [todos, setTodos] = useState([]);
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  });
  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // const toFilterTodos = () => {
  //   todos.length &&
  //     setTodos([
  //       ...todos.filter((item) => item.complete === false),
  //       ...todos.filter((item) => item.complete === true),
  //     ]);
  //   console.log("toFilterTodos", todos);
  // };

  const sortedTodos = useMemo(() => {
    console.log("sortedTodos");
    switch (selectedSort) {
      case "value":
        return [...todos].sort((a, b) => {
          return a[selectedSort].localeCompare(b[selectedSort]);
        });
      case "id":
        return [...todos].sort((a, b) => {
          return a[selectedSort] - b[selectedSort];
        });
      case "complete":
        return [
          ...todos.filter((item) => item.complete === false),
          ...todos.filter((item) => item.complete === true),
        ];
      default:
        return todos;
    }
  }, [todos, selectedSort]);

  const sortedAndSearchedTodos = useMemo(() => {
    console.log("sortedAndSearchedTodos");
    return sortedTodos.filter((elem) =>
      elem.value.toLowerCase().includes(searchQuery)
    );
  }, [searchQuery, sortedTodos]);

  // const filterTasks = (arr) => {
  //   return [
  //     ...arr.filter((item) => item.complete === false),
  //     ...arr.filter((item) => item.complete === true),
  //   ];
  // };

  const handleChangeInput = useCallback((e) => {
    setCurrentValue(e.currentTarget.value);
  }, []);

  const addTask = () => {
    if (currentValue) {
      const newTodo = {
        id: Math.round(Math.random() * 10000),
        value: currentValue,
        complete: false,
      };
      setTodos((t) => [newTodo, ...t]);
    }
    setCurrentValue("");
  };

  const handleAddTask = useCallback(
    () => {
      console.log("handleAddTask", currentValue);
      addTask();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentValue]
  );

  const handleKeyDownEnter = useCallback(
    (e) => {
      if (e.key === "Enter") {
        console.log("Enter", currentValue);
        addTask();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentValue]
  );

  const handleDeleteTask = useCallback(
    (id) => {
      setTodos([...todos.filter((item) => id !== item.id)]);
    },
    [todos]
  );

  const handleToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((item) =>
          item.id === id ? { ...item, complete: !item.complete } : item
        )
      );
    },
    [todos]
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className={css.wrapper}>
      <div className={css.wrapper__inner}>
        <Sorter value={selectedSort} onChange={setSelectedSort} />
        <Finder value={searchQuery} onChange={setSearchQuery} />
        <ToDoInput
          currentValue={currentValue}
          handleKeyDownEnter={handleKeyDownEnter}
          handleChangeInput={handleChangeInput}
          handleAddTask={handleAddTask}
        />
        <ToDoList
          todos={sortedAndSearchedTodos}
          handleDeleteTask={handleDeleteTask}
          handleToggle={handleToggle}
        />
      </div>
    </div>
  );
};
