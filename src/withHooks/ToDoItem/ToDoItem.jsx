import React from "react";
import {shape, string, number, bool, func} from 'prop-types';
import css from "./ToDoItem.module.css";

export const ToDoItem = React.memo(({ task, handleDeleteTask, handleToggle }) => {
  console.log("renderToDoITEM");
  return (
    <li className={css.todo__item}>
      <div
        className={
          task.complete ? `${css.todo__text} ${css.active}` : css.todo__text
        }
      >
        {task.value}
      </div>
      <input
        type="checkbox"
        className={css.todo__complete}
        checked={task.complete}
        onChange={() => {
          handleToggle(task.id);
        }}
      />
      <button
        className={css.delete__task}
        onClick={() => handleDeleteTask(task.id)}
      >
        DELETE
      </button>
    </li>
  );
});

ToDoItem.propTypes ={
  task: shape({
    value: string.isRequired,
    id: number.isRequired,
    complete: bool,
  }).isRequired,
  handleDeleteTask: func.isRequired,
  handleToggle: func.isRequired, 
};

ToDoItem.defaultProps = {
  handleDeleteTask(){},
  handleToggle(){},
};


// export const ToDoItem = ({ task, handleDeleteTask, handleToggle }) => {
//   return useMemo(() => {
//     console.log("rerender ITEM =>", task.value);
//     return (
//       <li className={css.todo__item}>
//         <div
//           className={
//             task.complete ? `${css.todo__text} ${css.active}` : css.todo__text
//           }
//         >
//           {task.value}
//         </div>
//         <input
//           type="checkbox"
//           className={css.todo__complete}
//           checked={task.complete}
//           onChange={() => {
//             handleToggle(task.id);
//           }}
//         />
//         <button
//           className={css.delete__task}
//           onClick={() => handleDeleteTask(task.id)}
//         >
//           DELETE
//         </button>
//       </li>
//     );
//   }, [task]);
// };
