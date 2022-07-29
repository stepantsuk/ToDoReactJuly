import React, { useCallback } from "react";
import { shape, string, number, bool, func } from "prop-types";
import classNames from "classnames";
import css from "./ToDoItem.module.css";

export const ToDoItem = React.memo(
  ({ task, handleDeleteTask, handleToggle }) => {

    const handleRemoveTask = useCallback(() => {
      handleDeleteTask(task.id);
    },[handleDeleteTask, task.id]);

    console.log("renderToDoITEM");
    return (
      <li className={css.todo__item}>
        <div
          className={classNames(
            css.todo__text, {
              [css.active]: task.complete,
          })}
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
        <button className={css.delete__task} onClick={handleRemoveTask}>
          DELETE
        </button>
      </li>
    );
  }
);

ToDoItem.propTypes = {
  task: shape({
    value: string.isRequired,
    id: number.isRequired,
    complete: bool,
  }).isRequired,
  handleDeleteTask: func.isRequired,
  handleToggle: func.isRequired,
};

ToDoItem.defaultProps = {
  handleDeleteTask: () => void 0,
  handleToggle: () => void 0,
};
