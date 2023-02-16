import {useState} from "react";

const TodoListItem = ({
  entry,
  onDelete,
  onUpdate
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [input, setInput] = useState(entry.text);
  const [status, setStatus] = useState(entry.status);

  const todoEditor = (
    <>
      <input
        type='text'
        value={input}
        className="todo-edit"
        onChange={(e) => setInput(e.currentTarget.value)}
      />
      <button
      className="confirm-button"
      onClick={() => {
        setIsEditing(!isEditing)
        onUpdate(input, entry);
      }}
      >
        Confirm
      </button>
    </>
  )

  return(
    <div className="todo">
        <input
          type='checkbox'
          checked={status}
          onChange={() => {
            setStatus(!status);
          }}
          className='status-checkbox todo-text'
        />
        {isEditing ? todoEditor : (
        <div
          className={`todo-text ${status ? 'todo-done' : 'todo-undone'}`}
          onClick={() => {
            setIsEditing(!isEditing)
          }}
          >{entry.text}</div>
        )}
      <div className="action-buttons">
        <button
          className="delete-button"
          onClick={() => {
            onDelete(entry.text);
          }}
        >
          Delete
        </button>
        {/* <button
          className="edit-button"
          onClick={() => {
            setIsEditing(!isEditing)
          }}
        >
          Edit
        </button> */}
      </div>
    </div>
  )
}

export default TodoListItem;
