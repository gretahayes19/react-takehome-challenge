import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (todo.text !== "") {

      setTodos([...todos, todo]);
    }
  };

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo.text !== text;
    });

    setTodos(newTodos);
  };

  const updateTodo = (input, oldEntry) => {
    const newTodos = todos.map((todo) => {
      if (todo.text === oldEntry.text) {
        return { text: input, status: oldEntry.status }
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
