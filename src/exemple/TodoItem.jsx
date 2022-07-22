import React from "react";
import { memo, useMemo } from "react";

// const TodoItem = ({ todo, togleComplete }) => {
//   return (
//     <div key={todo.id}>
//       <div>
//         {todo.value}
//         {todo.complete ? "true" : "false"}
//       </div>
//       <div onClick={() => togleComplete(todo.id)}>onClick</div>
//     </div>
//   );
// };

// export default memo(TodoItem);

const TodoItem = ({ todo, togleComplete }) => {
  return useMemo(() => {
    return (
      <div key={todo.id}>
        <div>
          {todo.value}
          {todo.complete ? "true" : "false"}
        </div>
        <div onClick={() => togleComplete(todo.id)}>onClick</div>
      </div>
    );
  }, [todo]);
};

export default TodoItem;

//export default memo(TodoItem);
