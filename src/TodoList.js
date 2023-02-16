import TodoListItem from "./TodoListItem";

const TodoList = ({ list, remove, update }) => {
  debugger
  return (
    <>
      {list?.length > 0 ? (
        <div className="todo-list">
          {list.map((entry, index) => (
            <TodoListItem
              entry={entry}
              key={index}
              onUpdate={update}
              onDelete={remove}
            />
          ))}
        </div>
      ) : (
        <div className="empty">
          <p>No task found</p>
        </div>
      )}
    </>
  );
};

export default TodoList;
