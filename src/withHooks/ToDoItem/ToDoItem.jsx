import css from "./ToDoItem.module.css";

export const ToDoItem = ({ task, handleDeleteTask, handleToggle }) => {
  return (
    <li className={css.todo__item}>
      <div
        className={task.complete ? `${css.todo__text} ${css.active}` : css.todo__text}
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
};
