import { MdEdit, MdOutlineDeleteOutline } from "react-icons/md";
export const TodoList = ({ list, remove, editTodo }) => {
  return (
    <>
      {list?.length > 0 ? (
        <ul className="todo-list">
          {list.map((entry, index) => (
            <div className="todo">
              <li key={index}> {entry} </li>

              <button
                className="delete-button"
                onClick={() => {
                  remove(entry);
                }}
              >
                <MdOutlineDeleteOutline />
              </button>
              <button
                className="edit-button"
                onClick={() => {
                  editTodo(index);
                }}
              >
                <MdEdit />
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <div className="empty">
          <p>No task found</p>
        </div>
      )}
    </>
  );
};
