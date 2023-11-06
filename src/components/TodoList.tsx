import React from "react";
import { ITodoListProps } from "../types/data";
import TodoItem from "./TodoItem";

const TodoList: React.FC<ITodoListProps> = (props) => {
  return (
    <div>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          {...item}
          toggleTodo={props.toggleTodo}
          removeTodo={props.removeTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
