import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import userReducer from "./features/user/userSlice";
import modalReducer from "./features/user/modalSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    modal: modalReducer,
  },
});
