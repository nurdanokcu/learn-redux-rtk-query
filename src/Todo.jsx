import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useDeleteTodoMutation, useEditTodoMutation } from './features/api/apiSlice';

export const Todo = ({todo}) => {
  const [deleteTodo, {isError, isLoading}] = useDeleteTodoMutation();
  const [editTodo] = useEditTodoMutation();

  const handleStatus = (todo) => {
    // Check that todo object has an `id` property
    if (todo.id) {
      editTodo({
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      });
    }
  };

  return (
    <li 
    className={cn('list-item mt-4 has-text-weight-medium', {
      'has-text-success': todo.completed,
      'has-text-warning-dark': !todo.completed
    })}
  >
    <span className='m-5'>
     <button
        type='button'
        className='button is-light'
        onClick={() => handleStatus(todo)}
      >
       {todo.completed ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faCheck} />}
      </button>
    </span>
    {todo.title}

    <span 
      className='m-5'
    >
      {todo.completed ? 'completed' : 'active'}
    </span>

    <button 
      type='button'
      className='button is-danger is-light mr-4'
      onClick={() => deleteTodo(todo.id)}
    >
      Delete
    </button>
  </li>
  )
}
