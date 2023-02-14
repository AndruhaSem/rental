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
        },
        moneyCreated: (state, action) => {
            state.entities.push(action.payload);
        }
    }
});

const { reducer: moneyReducer, actions } = moneySlice;
const { moneyRequested, moneyReceived, moneyRequestFailed, moneyCreated } =
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

export const createMoney =
    ({ кentalСhoice, quantity, timeRental, payment }) =>
    async (dispatch) => {
        const money = {
            quantity,
            timeRental,
            payment,
            кentalСhoice
        };
        try {
            const { content } = await moneyService.createMoney(money);
            dispatch(moneyCreated(content));
        } catch (error) {
            dispatch(moneyRequestFailed(error.message));
        }
    };

export const getMoney = () => (state) => state.money.entities;
export const getMoneyLoadingStatus = () => (state) => state.money.isLoading;

export default moneyReducer;
