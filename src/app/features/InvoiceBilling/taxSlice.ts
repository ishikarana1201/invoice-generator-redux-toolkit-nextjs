import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tax: {
    taxLabel: localStorage.getItem("taxLabel") || "Tax",
    taxValue: localStorage.getItem("taxValue") || 0,
  },
  toggle: localStorage.getItem("taxToggle") === "true" || false,
};
const taxSlice = createSlice({
  name: "tax",
  initialState,
  reducers: {
    addItem: (state: any, action: any) => {
      state.tax.push(action.payload);
    },
    updateItem(state: any, action) {
      const { name, value } = action.payload;
      state.tax[name] = value;
    },
    setToggle(state: any, action) {
      const { toggleValue } = action.payload;
      state.toggle = toggleValue;
      localStorage.setItem("taxToggle", toggleValue);
    },
  },
});
export const { addItem, updateItem, setToggle } = taxSlice.actions;
export default taxSlice.reducer;
