export interface ITodo {
  id: number;
  title: string;
  complete: boolean;
}

export interface ITodoListProps {
  items: ITodo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

export interface ITododItem extends ITodo {
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}
