import { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [todo, setTodo] = useState({ text: '', status: false });

  const handleAdd = () => {
    addTodo(todo)
    setTodo('')
  }

  return (
    <div className="input-wrapper">
      <input
        type="text"
        name="todo"
        value={todo.text}
        placeholder="Create a new todo"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button className="add-button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default TodoInput;
