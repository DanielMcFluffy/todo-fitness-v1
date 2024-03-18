import { configureStore } from "@reduxjs/toolkit";
import todosReducer from './features/slices/todosSlice';

const store = configureStore({
  reducer: {
    todos: todosReducer
  }
})

export default store;