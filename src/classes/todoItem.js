export const ToDoItem = ({ task, handleDeleteTask, handleToggle }) => {
  //const  = onChange;
  return (
    <li className="todo__item">
      <div className={task.complete ? "todo__text active" : "todo__text"}>
        {task.value}
      </div>
      <input
        type="checkbox"
        className="todo__complete"
        checked={task.complete}
        onChange={() => {
          handleToggle(task.id);
        }}
      />
      <button
        className="delete__task"
        onClick={() => handleDeleteTask(task.id)}
      >
        DELETE
      </button>
    </li>
  );
};
