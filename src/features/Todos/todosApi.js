import { client } from '../../utils/axiosClient';
const userId = '5958'

export const getTodos = (userId) => {
  return client.get(`/todos?userId=${userId}`)
}

export const createTodo = (title) => {
  return client.post('/todos', {
    title,
    userId,
    completed: false
  })
}