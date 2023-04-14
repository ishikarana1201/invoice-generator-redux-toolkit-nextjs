import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  imagePath: localStorage.getItem("filePath") || "",
};

const logoImageSlice = createSlice({
  name: "logoimage",
  initialState,
  reducers: {
    addImage: (state: any, action: any) => {
      state.imagePath = action.payload;
    },
    removeImage: (state: any) => {
      state.imagePath = "";
    },
  },
});
export const { addImage, removeImage } = logoImageSlice.actions;
export default logoImageSlice.reducer;
