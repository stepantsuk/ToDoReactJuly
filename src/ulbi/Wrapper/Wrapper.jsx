import { useState, useMemo } from "react";
import s from "./Wrapper.module.css";
import ToDoInput from "../ToDoInput/ToDoInput";
import Select from "../Select/Select";
import { Finder } from "./../Finder/Finder";
import { ToDoList } from "./../ToDoList/ToDoList";

const Wrapper = (props) => {
  const [currentValue, setCurrentValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleChangeInput = (inputText) => {
    setCurrentValue(inputText);
  };

  const sortedTodos = useMemo(() => {
    console.log("sortedTodos");
    if (selectedSort) {
      return [...todos].sort((a, b) => {
        return a[selectedSort].localeCompare(b[selectedSort]);
      });
    }
    return todos;
  }, [todos, selectedSort]);

  const sortedAndSearchedTodos = useMemo(() => {
    console.log("sortedAndSearchedTodos");
    return sortedTodos.filter((elem) =>
      elem.value.toLowerCase().includes(searchQuery)
    );
  }, [searchQuery, sortedTodos]);

  const handleAddTask = (inputValue) => {
    if (inputValue) {
      const newTodo = {
        id: Math.round(Math.random() * 1000000),
        value: inputValue,
      };
      setTodos([...todos, newTodo]);
    }
    setCurrentValue("");
  };

  const handleKeyDownEnter = (e, value) => {
    if (e.key === "Enter") {
      console.log("Enter", value);
      handleAddTask(value);
    }
  };

  const handleDeleteTask = (id) => {
    setTodos([...todos.filter((item) => id !== item.id)]);
  };

  console.log(sortedAndSearchedTodos);

  return (
    <div className={s.wrapper}>
      <div className={s.wrapper__inner}>
        <Select
          value={selectedSort}
          onChange={setSelectedSort}
          defaultValue="Sort..."
          options={[
            {
              value: "value",
              name: "by desc",
            },
          ]}
        />
        <Finder value={searchQuery} onChange={setSearchQuery} />
        <ToDoInput
          currentValue={currentValue}
          handleChangeInput={handleChangeInput}
          handleAddTask={handleAddTask}
          handleKeyDownEnter={handleKeyDownEnter}
        />
        <ToDoList
          todos={sortedAndSearchedTodos}
          handleDeleteTask={handleDeleteTask}
        />
      </div>
    </div>
  );
};
export default Wrapper;
