import React from "react";
import {arrayOf, object, func} from 'prop-types';
import css from "./ToDoList.module.css";
import {ToDoItem} from "../ToDoItem";

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

export const ToDoList = React.memo(({todos, handleDeleteTask, handleToggle}) => {
  const innerItems = todos.map((item) => {
    console.log("innerItems");
    return (
      <ToDoItem
        key={item.id}
        task={item}
        handleToggle={handleToggle}
        handleDeleteTask={handleDeleteTask}
      />
    );
  });
  console.log("renderToDoLIST");
  return (
    <div className={css.todo}>
      <ul className={css.todo__list}>{innerItems}</ul>
      {todos.length ? (
        <span>Итого:{todos.length}</span>
      ) : (
        "Делов нет"
      )}
    </div>
  );
});

ToDoList.propTypes = {
  todos: arrayOf(object).isRequired,
  handleDeleteTask: func.isRequired,
  handleToggle: func.isRequired, 
};

ToDoList.defaultProps = {
  handleDeleteTask(){},
  handleToggle(){},
};

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
