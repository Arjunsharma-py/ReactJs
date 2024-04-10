import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import modalReducer from "./user/modalSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    modal: modalReducer,
  },
});
