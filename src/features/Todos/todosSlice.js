import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createTodo, getTodos } from './todosApi';

export const getTodosAsync = createAsyncThunk(
  'todos/getTodos', 
  async() => {
  const response = await getTodos('5958');
  return response;
})

export const createTodoAsync = createAsyncThunk(
  'todos/createTodo',
  async (name) => {
    const response = await createTodo(name);
    return response;
  }
)

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  extraReducers: (builder) => {
    builder
    .addCase(getTodosAsync.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getTodosAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    })
    .addCase(getTodosAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase(createTodoAsync.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(createTodoAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
    })
    .addCase(createTodoAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;;
    })
  }
})

export default todosSlice.reducer;