import { applyMiddleware, combineReducers, configureStore } from "@reduxjs/toolkit";
import { cashReducer } from "./cashReducer";
import { customerReducer } from "./customerReducer";

import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer
})

console.log(combineReducers({
    cash: cashReducer,
    customers: customerReducer
}))

export const store = configureStore({reducer: rootReducer}, composeWithDevTools(applyMiddleware));