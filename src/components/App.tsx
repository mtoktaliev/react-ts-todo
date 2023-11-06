import React, { useState } from "react";
import { useAppDispatch } from "../hooks/hooks";
import { addTodo } from "../store/todoSlise";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

const App: React.FC = () => {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();

  const handleAction = () => {
    if (text.length) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <div className="container p-10 mx-auto">
      <NewTodoForm
        value={text}
        updateText={setText}
        handleAction={handleAction}
      />

      <TodoList />
    </div>
  );
};

export default App;
