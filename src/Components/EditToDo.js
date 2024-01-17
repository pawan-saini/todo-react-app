export const EditToDo = ({ todo, setTodo, updateTodo }) => {
  return (
    <div className="input-wrapper">
      <input
        type="text"
        name="todo"
        value={todo}
        placeholder="Create a new todo"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button className="add-button" onClick={updateTodo}>
        Update
      </button>
    </div>
  );
};
