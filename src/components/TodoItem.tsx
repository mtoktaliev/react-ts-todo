import React from "react";
import { ITododItem } from "../types/data";

const TodoItem: React.FC<ITododItem> = (props) => {
  return (
    <div className="flex gap-5">
      <input
        type="checkbox"
        checked={props.complete}
        onChange={() => props.toggleTodo(props.id)}
      />
      <p>{props.title}</p>
      <button onClick={() => props.removeTodo(props.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
