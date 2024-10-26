/* eslint-disable react/prop-types */
import { useState } from "react";
import { createTodo } from "../api/api";

const TodoForm = ({ onAdd }) => {
  const [task, setTask] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    await createTodo(task);
    setTask("");
    onAdd();
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button type="submit">Add Task</button>
        </form>
      </div>
    </>
  );
};

export default TodoForm;
