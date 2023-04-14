import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  invoiceDetails: {
    invoiceUser: localStorage.getItem("invoiceUser") || "",
    billTolabel: localStorage.getItem("billTolabel") || "Bill To",
    billTo: localStorage.getItem("billTo") || "",
    shipTolabel: localStorage.getItem("shipTolabel") || "Ship To",
    shipTo: localStorage.getItem("shipTo") || "",
    invoiceTitle: localStorage.getItem("invoiceTitle") || "Invoice",
    serialNumber: localStorage.getItem("serialNumber") || "",
    dateLabel: localStorage.getItem("dateLabel") || "Date",
    dateValue: localStorage.getItem("dateValue") || "",
    termsLabel: localStorage.getItem("termsLabel") || "Payment Terms",
    termsValue: localStorage.getItem("termsValue") || "",
    dueDateLabel: localStorage.getItem("dueDateLabel") || "Due Date",
    dueDateValue: localStorage.getItem("dueDateValue") || "",
    ponumberLabel: localStorage.getItem("ponumberLabel") || "PO Number",
    ponumberValue: localStorage.getItem("ponumberValue") || "",
  },
};
const invoiceDetailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    addItem(state: any, action: any) {
      state.invoiceDetails.push(action.payload);
    },
    updateItem(state: any, action) {
      const { name, value } = action.payload;
      state.invoiceDetails[name] = value;
    },
  },
});
export const { addItem, updateItem } = invoiceDetailsSlice.actions;
export default invoiceDetailsSlice.reducer;
