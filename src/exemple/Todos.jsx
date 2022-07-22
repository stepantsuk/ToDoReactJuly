import { memo, useMemo } from "react";
import TodoItem from "./TodoItem";

const Todos = ({ todos, addTodo, togleComplete }) => {
  return useMemo(() => {
    console.log("child render");
    return (
      <>
        <h2>My Todos</h2>
        {todos.map((todo) => {
          console.log("todo render");
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              addTodo={addTodo}
              togleComplete={togleComplete}
            />
          );
        })}
        <button onClick={addTodo}>Add Todo</button>
      </>
    );
  }, [todos]);
};



// const Todos = ({ todos, addTodo, togleComplete }) => {
//   return useMemo(() => {
//     console.log("child render");
//     return (
//       <>
//         <h2>My Todos</h2>
//         {todos.map((todo) => {
//           console.log("todo render");
//           return (
//             <div key={todo.id}>
//               <div>
//                 {todo.value}
//                 {todo.complete ? "true" : "false"}
//               </div>
//               <div onClick={() => togleComplete(todo.id)}>onClick</div>
//             </div>
//           );
//         })}
//         <button onClick={addTodo}>Add Todo</button>
//       </>
//     );
//   }, [todos]);
// };

// const Todos = ({ todos, addTodo, togleComplete }) => {
//   console.log("child render");
//   return (
//     <>
//       <h2>My Todos</h2>
//       {todos.map((todo) => {
//         console.log("todo render");
//         return (
//           <div key={todo.id}>
//             <div>
//               {todo.value}
//               {todo.complete ? "true" : "false"}
//             </div>
//             <div onClick={() => togleComplete(todo.id)}>onClick</div>
//           </div>
//         );
//       })}
//       <button onClick={addTodo}>Add Todo</button>
//     </>
//   );
// };

export default Todos;
//export default memo(Todos);
