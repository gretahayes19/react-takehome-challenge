import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoText) => {
    const newTodo = {
      id: Math.random().toString(36).substr(2, 9),
      text: todoText,
      status: false,
    }

    setTodos([...todos, newTodo]);

  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(newTodos);
  };

  const updateTodo = (input, oldEntry) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === oldEntry.id) {
        return { ...oldEntry, text: input }
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>React Todo App</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList
        list={todos}
        remove={deleteTodo}
        update={updateTodo}
      />
    </div>
  );
};

export default App;
