import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
  modalType: "",
};

export const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    openModal: (state, action) => {
      state.showModal = true;
      state.modalType = action.payload;
    },
    closeModal: (state, action) => {
      state.showModal = false;
      state.modalType = "";
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
