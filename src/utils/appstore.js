import { configureStore } from "@reduxjs/toolkit";
import invoiceReducer from "./invoiceslice"; // Check the correct path and file name
import userReducer from "./userslice"
import userIdReducer from "./idSlice"
import cookieReducer from "./cookieSlice"

const appStore = configureStore({
  reducer: {
    invoice: invoiceReducer,
    user:userReducer,
    userId:userIdReducer,
    cookie:cookieReducer
  },
});

export default appStore;
