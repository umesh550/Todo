import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer, // Assigning the tasksReducer to the 'tasks' slice of the store
  },
});
