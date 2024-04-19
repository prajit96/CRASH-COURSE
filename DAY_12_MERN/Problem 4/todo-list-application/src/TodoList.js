

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from './actions';

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    const text = prompt('Enter todo:');
    if (text) {
      dispatch(addTodo(text));
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            <button onClick={() => handleToggleTodo(todo.id)}>
              {todo.completed ? 'Undo' : 'Complete'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
