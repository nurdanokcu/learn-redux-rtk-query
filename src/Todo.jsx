import cn from 'classnames';
import { useDeleteTodoMutation } from './features/api/apiSlice';

export const Todo = ({todo}) => {
  const [deleteTodo, {isError, isLoading}] = useDeleteTodoMutation();
  return (
    <li 
    className={cn('list-item mt-4 has-text-weight-medium', {
      'has-text-success': todo.completed,
      'has-text-warning-dark': !todo.completed
    })}
  >
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
    <button 
      type='button'
      className='button is-light'
      onClick={() => deleteTodo(todo.id)}
    >
      Edit
    </button>
  </li>
  )
}
