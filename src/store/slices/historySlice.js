/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import LSKeyBuilder from '../../utils/LSKeyBuilder';

const initialState = {
    history: JSON.parse(localStorage.getItem(LSKeyBuilder('history'))) || []
};

const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        setHistory(state, action) {
            state.history = action.payload;
        },
        removeHistory(state) {
            state.favourites = [];
        },
        addToHistory(state, action) {
            state.favourites.push(action.payload);
        },
    },
});

export const { setHistory, removeHistory, addToHistory } = historySlice.actions;
export const history = historySlice.reducer;
