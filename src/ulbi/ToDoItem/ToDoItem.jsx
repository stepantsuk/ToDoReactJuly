import s from "./ToDoItem.module.css";

export const ToDoItem = ({ task, handleDeleteTask }) => {
  return (
    <li className={s.todo__item}>
      <div
        className={s.todo__text}
      >
        ID: {task.id}. Desription:{task.value}
      </div>
      <button
        className={s.delete__task}
        onClick={() => handleDeleteTask(task.id)}
      >
        DELETE
      </button>
    </li>
  );
};
