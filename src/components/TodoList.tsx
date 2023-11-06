import React from "react";
import TodoItem from "./TodoItem";
import { useAppSelector } from "../hooks/hooks";

const TodoList: React.FC = () => {
  const todos = useAppSelector((state) => state.todos.list);
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default TodoList;
