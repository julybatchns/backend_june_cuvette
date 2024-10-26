const Todo = require("../model/Todo");

// Get all the tasks
const getTodos = async (req, res) => {
  const todos = await Todo.find({});
  res.json(todos);
};

// Create a task

const createTodo = async (req, res) => {
  const { task } = req.body;
  const todo = new Todo({
    task,
  });
  await todo.save();
  res.json(todo);
};

// Delete a task

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.json({ message: "Task deleted" });
};

module.exports = {
  getTodos,
  createTodo,
  deleteTodo,
};
