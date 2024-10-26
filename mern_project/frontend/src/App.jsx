import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {
  const [updateFlag, setUpdateFlag] = useState(false);
  const refreshList = () => setUpdateFlag(!updateFlag);

  return (
    <>
      <div className="App">
        <h1>ToDo App</h1>
        <TodoForm onAdd={refreshList} />
        <TodoList key={updateFlag} onDelete={refreshList} />
      </div>
    </>
  );
};

export default App;
