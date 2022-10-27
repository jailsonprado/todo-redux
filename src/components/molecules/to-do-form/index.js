import { useDispatch } from "react-redux";

export default function ToDoForm() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.todo.value.length) {
      dispatch({
        type: "todos/todoAdded",
        payload: e.target.todo.value
      });
    }
    e.target.todo.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="todo" type="text" />
      <button>Save</button>
    </form>
  );
}
