/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { deleteTodo, fetchTodos } from "../api/api";

const TodoList = ({ onDelete }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      const data = await fetchTodos();
      setTodos(data);
    };
    getTodos();
  }, []);

  const handleDelete = async (id) => {
    await deleteTodo(id);
    onDelete();
  };

  return (
    <div>
      <h2>Todo List</h2>
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default TodoList;
