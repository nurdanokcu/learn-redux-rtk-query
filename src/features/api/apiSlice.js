
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const USER_ID = 5958

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: 'https://mate.academy/students-api'}),
  tagTypes: ['Todos'],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (userId) => `/todos?userId=${userId}`,
      providesTags: ['Todos']
    }),
    addTodo: builder.mutation({
      query: (title) => ({
        url: '/todos',
        method: 'POST',
        body: {
          title,
          completed: false,
          userId: USER_ID,
        }
      }),
      invalidatesTags: ['Todos']
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/todos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todos']
    }),
    editTodo: builder.mutation({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: 'PATCH',
        body: todo
      }),
      invalidatesTags: ['Todos'],
    })
  })
})


export const { 
  useGetTodosQuery, 
  useAddTodoMutation,
  useDeleteTodoMutation, 
  useEditTodoMutation } = apiSlice