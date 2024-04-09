import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 0,
  name: null,
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addUser: (state, action) => action.payload,
    removeUser: (state) => {
      state.id = 0;
      state.name = null;
      state.email = "";
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
