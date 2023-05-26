import { createSlice } from "@reduxjs/toolkit";
import moneyService from "../services/money.statistics";

const moneySlice = createSlice({
    name: "money",
    initialState: {
        entities: null,
        isLoading: true,
        error: null
    },
    reducers: {
        moneyRequested: (state) => {
            state.isLoading = true;
        },
        moneyReceived: (state, action) => {
            state.entities = action.payload;

            state.isLoading = false;
        },
        moneyRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

const { reducer: moneyReducer, actions } = moneySlice;
const { moneyRequested, moneyReceived, moneyRequestFailed } =
    actions;

export const loadmoneyList = () => async (dispatch) => {
    dispatch(moneyRequested());
    try {
        const { content } = await moneyService.get();
        dispatch(moneyReceived(content));
    } catch (error) {
        dispatch(moneyRequestFailed(error.message));
    }
};

export const getMoney = () => (state) => state.money.entities;
export const getMoneyLoadingStatus = () => (state) => state.money.isLoading;

export default moneyReducer;
