import { useState, useCallback, useMemo } from "react";
import Todos from "./Todos";

export const Wrapper = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  // const addTodo = useCallback(() => {
  //   setTodos((t) => [...t, "New Todo"]);
  // }, [todos]);

  // const addTodo = () => {
  //   setTodos((t) => [
  //     ...t,
  //     {
  //       id: Math.round(Math.random() * 10000),
  //       value: "New Todo",
  //       complete: false,
  //     },
  //   ]);
  // };

  // const togleComplete = (id) => {
  //   setTodos([
  //     ...todos.map((todo) =>
  //       todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
  //     )
  //   ]);
  // };

  const addTodo = useCallback(() => {
    setTodos((t) => [
      ...t,
      {
        id: Math.round(Math.random() * 10000),
        value: "New Todo",
        complete: false,
      },
    ]);
  }, [todos]);

  const togleComplete = useCallback(
    (id) => {
      setTodos([
        ...todos.map((todo) =>
          todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
        ),
      ]);
    },
    [todos]
  );

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} togleComplete={togleComplete} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};
