import { configureStore } from '@reduxjs/toolkit';
import { movieApi } from './api/movieApi';
import { currentUser } from './slices/currentUserSlice'

const store = configureStore({
    reducer: {
        [movieApi.reducerPath]: movieApi.reducer,
        currentUser,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(movieApi.middleware),
});

export default store;
