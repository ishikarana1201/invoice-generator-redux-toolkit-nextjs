import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  invoiceBilling: {
    notesLabel: localStorage.getItem("notesLabel") || "Notes",
    notesValue: localStorage.getItem("notesValue") || "",
    termsLabel: localStorage.getItem("termsLabel") || "Terms",
    termsValue: localStorage.getItem("termsValue") || "",
  },
};
const invoiceBillingSlice = createSlice({
  name: "invoiceBilling",
  initialState,
  reducers: {
    addItem: (state: any, action: any) => {
      state.invoiceBilling.push(action.payload);
    },
    updateItem(state: any, action) {
      const { name, value } = action.payload;
      state.invoiceBilling[name] = value;
    },
  },
});
export const { addItem, updateItem } = invoiceBillingSlice.actions;
export default invoiceBillingSlice.reducer;
