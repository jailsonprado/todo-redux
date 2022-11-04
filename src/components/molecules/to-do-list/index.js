import { useSelector, useDispatch } from "react-redux";

export default function ToDoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const handleRemove = (todo) => {
    dispatch({
      type: "todos/todoRemoved",
      payload: todo
    });
  };

  const handleToggle = (todo) => {
    dispatch({
      type: "todos/todoToggled",
      payload: todo,
    });
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <p
            style={{ cursor: "pointer" }}
            onClick={() => handleToggle(todo)}
            className={todo.completed ? "completed" : ""}
          >
            {todo.text} <button onClick={() => handleRemove(todo)}>Remove</button>
          </p>
        </li>
      ))}
    </ul>
  );
}
