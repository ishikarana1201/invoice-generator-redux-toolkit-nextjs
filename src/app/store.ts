import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import titleReducer from "./features/InvoiceItems/titleSlice";
import invoiceDetailsReducer from "./features/InvoiceDetails/invoiceDetailsSlice";
import invoiceBillingReducer from "./features/InvoiceBilling/invoiceBillingSlice";
import logoImageReducer from "./features/InvoiceDetails/logoImageSlice";
import discountReducer from "./features/InvoiceBilling/discountSlice";
import taxReducer from "./features/InvoiceBilling/taxSlice";
import shippingReducer from "./features/InvoiceBilling/shippingSlice";
import totalAmountReducer from "./features/InvoiceBilling/totalAmountSlice";
import subTotalReducer from "./features/InvoiceBilling/subTotalSlice";
import InputReducer from "./features/InvoiceItems/inputSlice";
import storage from "redux-persist/es/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["input"], // persist only the counterReducer
};
const rootReducer = combineReducers({
  itemTitles: titleReducer,
  invoiceDetails: invoiceDetailsReducer,
  invoiceBilling: invoiceBillingReducer,
  logoImage: logoImageReducer,
  discount: discountReducer,
  tax: taxReducer,
  shipping: shippingReducer,
  totalAmount: totalAmountReducer,
  subTotal: subTotalReducer,
  input: InputReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE", "REGISTER"],
      },
    }),
  ],
});
const persistor = persistStore(store);

export { store, persistor };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
