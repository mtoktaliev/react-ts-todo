export interface ITodo {
  id: string;
  title: string;
  complete: boolean;
}

export interface NewTodoFormProps {
  value: string;
  updateText: (str: string) => void;
  handleAction: () => void;
}

export interface ITododItem extends ITodo {}
