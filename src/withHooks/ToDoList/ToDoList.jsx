import React from "react";
import css from "./ToDoList.module.css";
import { ToDoItem } from "../ToDoItem";

// export const ToDoList = (props) => {

//   return useMemo(() => {
//     console.log("rerender LIST =>");
//     return (
//       <div className={css.todo}>
//         <ul className={css.todo__list}>
//           {props.todos.map((item) => (
//             <ToDoItem
//               key={item.id}
//               task={item}
//               handleToggle={props.handleToggle}
//               handleDeleteTask={props.handleDeleteTask}
//             />
//           ))}
//         </ul>
//         {props.todos.length ? (
//           <span>Итого:{props.todos.length}</span>
//         ) : (
//           "Делов нет"
//         )}
//       </div>
//     );
//   }, [props.todos]);
// };

export const ToDoList = React.memo((props) => {
  const innerItems = props.todos.map((item) => {
    console.log("innerItems");
    return (
      <ToDoItem
        key={item.id}
        task={item}
        handleToggle={props.handleToggle}
        handleDeleteTask={props.handleDeleteTask}
      />
    );
  });
  console.log("renderToDoLIST");
  return (
    <div className={css.todo}>
      <ul className={css.todo__list}>{innerItems}</ul>
      {props.todos.length ? (
        <span>Итого:{props.todos.length}</span>
      ) : (
        "Делов нет"
      )}
    </div>
  );
});

// export const ToDoList = (props) => {
//   return useMemo(() => {
//     return (
//       <div className={css.todo}>
//         <ul className={css.todo__list}>
//           {props.todos.map((item) => {
//             return (
//               <ToDoItem
//                 key={item.id}
//                 task={item}
//                 handleToggle={props.handleToggle}
//                 handleDeleteTask={props.handleDeleteTask}
//               />
//             );
//           })}
//         </ul>
//         {props.todos.length ? (
//           <span>Итого:{props.todos.length}</span>
//         ) : (
//           "Делов нет"
//         )}
//       </div>
//     );
//   }, [props.todos]);
// };
