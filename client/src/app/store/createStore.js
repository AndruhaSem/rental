import { configureStore, combineReducers } from "@reduxjs/toolkit";
import bookingReducer from "./booking";
import moneyReducer from "./money";
import ordersReducer from "./orders";
import usersReducer from "./users";
import sliderReducer from "./slider";

const rootReducer = combineReducers({
    money: moneyReducer,
    orders: ordersReducer,
    users: usersReducer,
    booking: bookingReducer,
    slider: sliderReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
