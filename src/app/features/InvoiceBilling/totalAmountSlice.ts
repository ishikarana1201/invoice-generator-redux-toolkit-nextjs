import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalAmount: {
    totalLabel: localStorage.getItem("totalLabel") || "Total",
    totalAmountValue: 0,
    amoutPaidLabel: localStorage.getItem("amoutPaidLabel") || "Amount Paid",
    amoutPaidValue: localStorage.getItem("amoutPaidValue") || 0,
    balanceDueLabel: localStorage.getItem("balanceDueLabel") || "Balance Due",
    balanceDueValue: 0,
  },
};
const totalAmountSlice = createSlice({
  name: "totalAmountSlice",
  initialState,
  reducers: {
    addItem: (state: any, action: any) => {
      const {
        totalLabel = "Total",
        totalAmountValue = 0,
        amoutPaidLabel = "Amount Paid",
        amoutPaidValue = 0,
        balanceDueLabel = "Balance Due",
        balanceDueValue = 0,
      } = action.payload;
      state.totalAmount = {
        totalLabel,
        totalAmountValue,
        amoutPaidLabel,
        amoutPaidValue,
        balanceDueLabel,
        balanceDueValue,
      };
    },
    updateItem(state: any, action) {
      const { name, value } = action.payload;
      state.totalAmount[name] = value;
    },
  },
});
export const { addItem, updateItem } = totalAmountSlice.actions;
export default totalAmountSlice.reducer;
