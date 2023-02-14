import { useGetTodosQuery } from './features/api/apiSlice';
import { Form } from './Form';
import { Todo } from './Todo';

export const Todos = () => {
  const { data: todos = []} = useGetTodosQuery();
  return (
    <>
      <div>
       <Form/>
      </div>
      <div>
          <ul className='list'>
            {todos.map(todo => ( 
              <Todo 
                todo={todo} 
                key={todo.id}
              />
            ))}
          </ul>
      </div>
    </>
  )
}
