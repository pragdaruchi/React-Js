import { configureStore } from "@reduxjs/toolkit";
import  Counter  from "../Features/CounterSlice";
import  todo  from "../Features/TodoSlice";
import api  from "../Features/ApiSlice";

export const store = configureStore({
  reducer: {
    CounterKey : Counter,
    TodoKey :todo,
    Apikey :api
  }
})


