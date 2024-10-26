import Axios from "axios";

const API_URL = "http://localhost:5000/api/todos";

// Fetch all todos
export const fetchTodos = async () => {
  const response = await Axios.get(API_URL);
  return response.data;
};

// Create a new todo

export const createTodo = async (task) => {
  const response = await Axios.post(API_URL, { task });
  return response.data;
};

// Delete a todo

export const deleteTodo = async (id) => {
  await Axios.delete(`${API_URL}/${id}`);
};
