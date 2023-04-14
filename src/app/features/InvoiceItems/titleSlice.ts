import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemTitles: {
    item: localStorage.getItem("item") || "Item",
    quantity: localStorage.getItem("quantity") || "Quantity",
    rate: localStorage.getItem("rate") || "Rate",
    amount: localStorage.getItem("amount") || "Amount",
  },
};
const titleSlice = createSlice({
  name: "itemTitles",
  initialState,
  reducers: {
    setItemTitles: (state: any, action) => {
      const { name, value } = action.payload;
      state.itemTitles[name] = value;
    },
  },
});
export const { setItemTitles } = titleSlice.actions;
export default titleSlice.reducer;
