import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createTodoAsync, getTodosAsync } from './todosSlice';

export const Todos = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const todos = useSelector(state => state.todos.data);
  const state = useSelector(state => state)

  console.log(state)

  const addTodo = () => {
    dispatch(createTodoAsync(query));
    setQuery('');
  }

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch])

  return (
    <>
      <h2>Total: {todos.length}</h2>
      <div>
        <form onSubmit={addTodo}>
        <input 
          type="text" 
          value={query} 
          onChange={(event) => setQuery(event.target.value)}
          />
        <button
          type='submit'
        >
          Add Todo
        </button>
        </form>
      </div>

      <div>
        <ul>
          {todos.map(todo => ( 
            <li>
              {todo.title}
              <span style={{margin: '10px'}}>
              {todo.completed ? 'completed' : 'active'}
              </span>
              
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
