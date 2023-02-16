import { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [todo, setTodo] = useState({ text: '', status: false });

  const handleAdd = () => {
    addTodo(todo)
    setTodo({ text: '', status: false })
  }

  return (
    <div className="input-wrapper">
      <input
        type="text"
        name="todo"
        value={todo.text}
        placeholder="Create a new todo"
        onChange={(e) => {
          setTodo({ text: e.target.value, status: false });
        }}
      />
      <button className="add-button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default TodoInput;
