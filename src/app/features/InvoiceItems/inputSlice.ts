import { createSlice, configureStore } from "@reduxjs/toolkit";

const inputFieldsSlice = createSlice({
  name: "inputFields",
  initialState: [
    {
      itemname: "",
      rate: "",
      quantity: "",
      amount: "",
    },
  ],
  reducers: {
    addInputField: (state) => {
      state.push({
        itemname: "",
        rate: "",
        quantity: "",
        amount: "",
      });
    },
    removeInputField: (state, action) => {
      state.splice(action.payload, 1);
    },
    updateInputField: (state, action) => {
      const { index, name, value } = action.payload;
      const field: any = state[index];
      field[name] = value;
      field.amount = Number(field.rate) * Number(field.quantity);
    },
  },
});

export const { addInputField, removeInputField, updateInputField } =
  inputFieldsSlice.actions;
export default inputFieldsSlice.reducer;
