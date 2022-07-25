import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import css from "./Wrapper.module.css";
import { ToDoInput } from "./../ToDoInput";
import { ToDoList } from "./../ToDoList";
import { Finder } from "./../Finder";
import { Sorter } from "./../Sorter";
import { sortTodos} from "./../units/sortTodos"

export const Wrapper = (props) => {
  const [currentValue, setCurrentValue] = useState("");
  const [todos, setTodos] = useState([]);
  // const [todos, setTodos] = useState(() => {
  //   return JSON.parse(localStorage.getItem("todos")) || [];
  // });
  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const isInitialMount = useRef(true);

  // const toFilterTodos = () => {
  //   todos.length &&
  //     setTodos([
  //       ...todos.filter((item) => item.complete === false),
  //       ...todos.filter((item) => item.complete === true),
  //     ]);
  //   console.log("toFilterTodos", todos);
  // };

  const sortedTodos = useMemo(() => {
    //console.log("sortedTodos");
    return sortTodos(selectedSort, todos);
  }, [todos, selectedSort]);

  const sortedAndSearchedTodos = useMemo(() => {
    //console.log("sortedAndSearchedTodos");
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
      //console.log("handleAddTask", currentValue);
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

  const handleDeleteTask = useCallback((id) => {
    setTodos((prevTodos) => [...prevTodos.filter((item) => id !== item.id)]);
  }, []);

  const handleToggle = useCallback((id) => {
    setTodos((prevTodos) =>
      prevTodos.map((item) =>
        item.id === id ? { ...item, complete: !item.complete } : item
      )
    );
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      setTodos(JSON.parse(localStorage.getItem("todos")) || []);
    } else {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  // useEffect(() => {
  //   setTodos(JSON.parse(localStorage.getItem("todos")));
  // }, []);

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
