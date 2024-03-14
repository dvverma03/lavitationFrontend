import { createSlice } from "@reduxjs/toolkit";

const invoiceSlice = createSlice({
  name: 'invoice',
  initialState: {
    invoice: [],
  },
  reducers: {
    addInvoice: (state, action) => {
        state.invoice.push(action.payload);
    },
    removeInvoice: (state) => {
      return {
          ...state,
          invoice: []  
      };
  },
  
  },
});

export const { addInvoice,removeInvoice } = invoiceSlice.actions;

export default invoiceSlice.reducer;
