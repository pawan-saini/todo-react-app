import { useState } from "react";
import "./App.css";
import { AddToDo } from "./Components/AddToDo";
import { TodoList } from "./Components/ToDoList";
import { EditToDo } from "./Components/EditToDo";

function App() {
  const [list, setList] = useState([]);
  const [todo, setTodo] = useState("");
  const [todoIndex, setTodoIndex] = useState("");

  const addTodo = () => {
    if (todo) {
      setList([...list, todo]);
      setTodo("");
    }
  };
  const deleteTodo = (todo) => {
    const remainingItem = list.filter((item) => item !== todo);
    setList(remainingItem);
  };

  const editTodo = (index) => {
    setTodoIndex(index);
    setTodo(list[index]);
  };

  const updateTodo = (index) => {
    const updateList = (list[todoIndex] = todo);

    setTodo(updateList);
    setTodo("");
    setTodoIndex("");
  };
  return (
    <div className="App">
      <h1>React Todo App</h1>
      {todoIndex !== "" ? (
        <EditToDo todo={todo} setTodo={setTodo} updateTodo={updateTodo} />
      ) : (
        <AddToDo todo={todo} setTodo={setTodo} addTodo={addTodo} />
      )}

      <TodoList list={list} remove={deleteTodo} editTodo={editTodo} />
    </div>
  );
}

export default App;
