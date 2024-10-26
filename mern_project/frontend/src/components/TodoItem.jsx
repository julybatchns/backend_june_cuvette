/* eslint-disable react/prop-types */
const TodoItem = ({ todo, onDelete }) => {
  return (
    <>
      <div>
        <span>{todo.task}</span>
        <button onClick={() => onDelete(todo._id)}>Delete</button>
      </div>
    </>
  );
};

export default TodoItem;
