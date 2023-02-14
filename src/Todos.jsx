import React, { useState } from 'react';
import { useGetTodosQuery, USER_ID, useDeleteTodoMutation } from './features/api/apiSlice';
import cn from 'classnames';




export const Todos = () => {
  const [deleteTodo, {isError, isLoading: deleting}] = useDeleteTodoMutation();
  const { data, error, isLoading } = useGetTodosQuery(USER_ID);
  return (
    <>
      <div>

      </div>

      {error && (<div>
        can't load data
      </div>)}

      <div>
          <ul className='list'>
            {data.map(todo => ( 
              <li 
                className={cn('list-item mt-4 has-text-weight-medium', {
                  'has-text-success': todo.completed,
                  'has-text-warning-dark': !todo.completed
                })}
                key={todo.id}
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
                  onClick={() => {}}
                >
                  complete
                </button>
              </li>
            ))}
          </ul>
      </div>
    </>
  )
}
