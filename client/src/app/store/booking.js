import { createSlice } from "@reduxjs/toolkit";
import bookingService from "../services/productBooking";

const bookingSlice = createSlice({
    name: "booking",
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
        lastFetch: null
    },
    reducers: {
        bookingRequested: (state) => {
            state.isLoading = true;
        },
        bookingReceived: (state, action) => {
            state.entities = action.payload;
            state.lastFetch = Date.now();
            state.isLoading = false;
        },
        bookingRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

const { reducer: bookingReducer, actions } = bookingSlice;
const { bookingRequested, bookingReceived, bookingRequestFailed } = actions;

export function isOutdated(date) {
    if (Date.now() - date > 10 * 60 * 1000) {
        return true;
    }
    return false;
}

export const loadBookingList = () => async (dispatch, getState) => {
    const { lastFetch } = getState().booking;
    if (isOutdated(lastFetch)) {
        dispatch(bookingRequested());
        try {
            const { content } = await bookingService.get();
            dispatch(bookingReceived(content));
        } catch (error) {
            dispatch(bookingRequestFailed(error.message));
        }
    }
};

export const getBooking = () => (state) => state.booking.entities;
export const getBookingLoadingStatus = () => (state) => state.booking.isLoading;
export const getBookingById = (id) => (state) => {
    if (state.booking.entities) {
        return state.booking.entities.find((p) => p._id === id);
    }
};

export default bookingReducer;
