import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subTotal: {
    subTotalLabel: localStorage.getItem("subTotalLabel") || "Subtotal",
    subTotalValue: 0,
  },
};
const subTotalSlice = createSlice({
  name: "subTotal",
  initialState,
  reducers: {
    addItem: (state: any, action: any) => {
      const { subTotalLabel = "Subtotal", subTotalValue = 0 } = action.payload;
      state.subTotal = { subTotalLabel, subTotalValue };
    },
    updateItem: (state: any, action) => {
      const { name, value } = action.payload;
      state.subTotal[name] = value;
    },
  },
});
export const { addItem, updateItem } = subTotalSlice.actions;
export default subTotalSlice.reducer;
