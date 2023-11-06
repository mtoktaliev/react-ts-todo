import { NewTodoFormProps } from "../types/data";

const NewTodoForm: React.FC<NewTodoFormProps> = ({
  value,
  updateText,
  handleAction,
}) => {
  return (
    <label>
      <input
        type="text"
        placeholder="new todo"
        value={value}
        onChange={(e) => updateText(e.target.value)}
      />
      <button onClick={handleAction}>Add Todo</button>
    </label>
  );
};

export default NewTodoForm;
