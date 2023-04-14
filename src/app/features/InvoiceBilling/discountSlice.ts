import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  discount: {
    discountLabel: localStorage.getItem("discountLabel") || "Discount",
    discountValue: localStorage.getItem("discountValue") || 0,
  },
  toggle: localStorage.getItem("toggle") === "true" || false,
};
const discountSlice = createSlice({
  name: "discount",
  initialState,
  reducers: {
    addItem: (state: any, action: any) => {
      state.discount.push(action.payload);
    },
    updateItem(state: any, action) {
      const { name, value } = action.payload;
      state.discount[name] = value;
    },
    setToggle(state: any, action) {
      const { toggleValue } = action.payload;
      state.toggle = toggleValue;
      localStorage.setItem("toggle", toggleValue);
    },
  },
});
export const { addItem, updateItem, setToggle } = discountSlice.actions;
export default discountSlice.reducer;
