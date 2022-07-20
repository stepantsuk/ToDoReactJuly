import { useState, useEffect } from "react";
import s from "./Wrapper.module.css";
import ToDoInput from "../ToDoInput/ToDoInput";
import Select from "../Select/Select";

const Wrapper = (props) => {
  const [currentValue, setCurrentValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");

  const handleChangeInput = (inputText) => {
    setCurrentValue(inputText);
  };

  const handleAddTask = (inputValue) => {
    if (inputValue) {
      const newTodo = {
        id: Math.round(Math.random() * 100),
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

  const sortPosts = (sort) => {
    console.log(typeof(todos[0][sort]))
    setSelectedSort(sort);
    setTodos([...todos].sort((a, b) => {return a[sort].localeCompare(b[sort])}));
  };

  return (
    <div className={s.wrapper}>
      <Select
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="Sort..."
        options={[
          {
            value: "value",
            name: "by desc",
          },
        ]}
      />
      <ToDoInput
        currentValue={currentValue}
        todos={todos}
        handleChangeInput={handleChangeInput}
        handleAddTask={handleAddTask}
        handleKeyDownEnter={handleKeyDownEnter}
        handleDeleteTask={handleDeleteTask}
      />
    </div>
  );
};
export default Wrapper;
