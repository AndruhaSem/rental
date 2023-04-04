import { createSlice, createAction } from "@reduxjs/toolkit";
import orderService from "../services/order.service";
import history from "../utils/history";

const ordersSlice = createSlice({
    name: "orders",
    initialState: {
        entities: null,
        isLoading: true,
        error: null
    },
    reducers: {
        ordersRequested: (state) => {
            state.isLoading = true;
        },
        ordersReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        ordersRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        ordersCreated: (state, action) => {
            state.entities.push(action.payload);
        },
        ordersRemove: (state, action) => {
            state.entities = state.entities.filter(
                (el) => el.id !== action.payload
            );
        },
        ordersUpdateSuccessed: (state, action) => {
            state.entities[
                state.entities.findIndex((u) => u.id === action.payload.id)
            ] = action.payload;
        }
    }
});

const { reducer: ordersReducer, actions } = ordersSlice;
const {
    ordersRequested,
    ordersReceived,
    ordersRequestFailed,
    ordersCreated,
    ordersRemove,
    ordersUpdateSuccessed
} = actions;

const ordersUpdateRequested = createAction(
    "orders/ordersUpdateRequested"
);

export const loadOrdersList = () => async (dispatch) => {
    dispatch(ordersRequested());
    try {
        const { content } = await orderService.getOrders();
        dispatch(ordersReceived(content));
    } catch (error) {
        dispatch(ordersRequestFailed(error.message));
    }
};

export const deleteOrder = (userId) => async (dispatch) => {
    try {
        const { content } = await orderService.removeOrder(userId);
        if (!content) {
            dispatch(ordersRemove(userId));
        }
    } catch (error) {
        dispatch(ordersRequestFailed(error.message));
    }
};

export const createOrder = (data) => async (dispatch) => {
    try {
        const { content } = await orderService.createOrder(data);
        dispatch(ordersCreated(content));
    } catch (error) {
        dispatch(ordersRequestFailed(error.message));
    }
};
export const updateOrder = (payload) => async (dispatch) => {
    dispatch(ordersUpdateRequested());
    try {
        const { content } = await orderService.updateOrder(payload);
        dispatch(ordersUpdateSuccessed(content));
        history.push("/statistic");
    } catch (error) {
        dispatch(ordersRequestFailed(error.message));
    }
};

export const getOrdersById = (id) => (state) => {
    if (state.orders.entities) {
        return state.orders.entities.find((p) => p.id === id);
    }
};

export const getStatistics = () => (state) => state.orders.entities;
export const getOrdersLoadingStatus = () => (state) =>
    state.orders.isLoading;

export default ordersReducer;
