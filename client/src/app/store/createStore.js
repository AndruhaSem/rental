import { configureStore, combineReducers } from "@reduxjs/toolkit";
import bookingReducer from "./booking";
import moneyReducer from "./money";
import statisticsReducer from "./statistics";
import usersReducer from "./users";
import sliderReducer from "./slider";

const rootReducer = combineReducers({
    money: moneyReducer,
    statistics: statisticsReducer,
    users: usersReducer,
    booking: bookingReducer,
    slider: sliderReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
