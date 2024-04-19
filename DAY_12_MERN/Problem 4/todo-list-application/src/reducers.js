
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from './actions';
import initialState from './initialState';

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;
