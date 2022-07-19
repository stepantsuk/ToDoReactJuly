import s from "./ToDoItem.module.css";

export const ToDoItem = ({ task, handleDeleteTask, handleToggle }) => {
  return (
    <li className={s.todo__item}>
      <div
        className={task.complete ? s.todo__text + " " + s.active : s.todo__text}
      >
        {task.value}
      </div>
      <input
        type="checkbox"
        className={s.todo__complete}
        checked={task.complete}
        onChange={() => {
          handleToggle(task.id);
        }}
      />
      <button
        className={s.delete__task}
        onClick={() => handleDeleteTask(task.id)}
      >
        DELETE
      </button>
    </li>
  );
};
