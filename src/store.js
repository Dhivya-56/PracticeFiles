import { configureStore } from "@reduxjs/toolkit";
import CheckReducer from "./CheckoutReducers";
export const store=configureStore({

    reducer:{
checkout:CheckReducer,
    }
})