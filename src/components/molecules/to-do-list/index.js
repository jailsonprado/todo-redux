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

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text} <button onClick={() => handleRemove(todo)}>remove</button>
        </li>
      ))}
    </ul>
  );
}
