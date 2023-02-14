import { createSlice } from "@reduxjs/toolkit";
import sliderService from "../services/slider";

const sliderSlice = createSlice({
    name: "slider",
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
        lastFetch: null
    },
    reducers: {
        sliderRequested: (state) => {
            state.isLoading = true;
        },
        sliderReceived: (state, action) => {
            state.entities = action.payload;
            state.lastFetch = Date.now();
            state.isLoading = false;
        },
        sliderRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

const { reducer: sliderReducer, actions } = sliderSlice;
const { sliderRequested, sliderReceived, sliderRequestFailed } = actions;

export function isOutdated(date) {
    if (Date.now() - date > 10 * 60 * 1000) {
        return true;
    }
    return false;
}

export const loadSliderList = () => async (dispatch, getState) => {
    const { lastFetch } = getState().booking;
    if (isOutdated(lastFetch)) {
        dispatch(sliderRequested());
        try {
            const { content } = await sliderService.get();
            dispatch(sliderReceived(content));
        } catch (error) {
            dispatch(sliderRequestFailed(error.message));
        }
    }
};

export const getSlider = () => (state) => state.slider.entities;
export const getSliderLoadingStatus = () => (state) => state.slider.isLoading;

export default sliderReducer;
