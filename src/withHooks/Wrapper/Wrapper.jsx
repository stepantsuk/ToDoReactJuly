import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import css from "./Wrapper.module.css";
import { ToDoInput } from "./../ToDoInput";
import { ToDoList } from "./../ToDoList";
import { Finder } from "./../Finder";
import { Sorter } from "./../Sorter";
import { sortTodos } from "./utils/sortTodos";

export const Wrapper = (props) => {
  const [todos, setTodos] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const isInitialMount = useRef(true);

  const sortedTodos = useMemo(() => {
    return sortTodos(selectedSort, todos);
  }, [todos, selectedSort]);

  const sortedAndSearchedTodos = useMemo(() => {
    return sortedTodos.filter((elem) =>
      elem.value.toLowerCase().includes(searchQuery)
    );
  }, [searchQuery, sortedTodos]);

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

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      setTodos(JSON.parse(localStorage.getItem("todos")) || []);
    } else {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  return (
    <div className={css.wrapper}>
      <div className={css.wrapper__inner}>
        <Sorter value={selectedSort} onChange={setSelectedSort} />
        <Finder value={searchQuery} onChange={setSearchQuery} />
        <ToDoInput
          setTodos={setTodos}
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
