import { useState } from 'react';
import { useAddTodoMutation } from './features/api/apiSlice';

export const Form = () => {
  const [addTodo] = useAddTodoMutation()
  const [query, setQuery] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if(query) {
      addTodo(query)
      setQuery('');
    }
  }
  return (
    <form onSubmit={handleSubmit}>
    <input 
      type="text"
      className='input'
      value={query} 
      onChange={(event) => setQuery(event.target.value)}
      />
    <button
      type='submit'
      className='button is-primary'
    >
      Add Todo
    </button>
    </form>
  )
}
