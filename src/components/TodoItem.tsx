import React from "react";
import { ITododItem } from "../types/data";
import { useAppDispatch } from "../hooks/hooks";
import { toggleComplete, removeTodo } from "../store/todoSlise";

const TodoItem: React.FC<ITododItem> = ({ id, title, complete }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex gap-5">
      <input
        type="checkbox"
        checked={complete}
        onChange={() => dispatch(toggleComplete(id))}
      />
      <p>{title}</p>
      <button onClick={() => dispatch(removeTodo(id))}>Delete</button>
    </div>
  );
};

export default TodoItem;
