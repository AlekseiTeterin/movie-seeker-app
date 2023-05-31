import { configureStore } from '@reduxjs/toolkit';
import { movieApi } from './api/movieApi';
import localStorageMiddleware from './localStorageMiddleware';
import { currentUser } from './slices/currentUserSlice';
import { favourite } from './slices/favouriteSlice';

const store = configureStore({
    reducer: {
        [movieApi.reducerPath]: movieApi.reducer,
        currentUser,
        favourite,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(movieApi.middleware, localStorageMiddleware),
});

export default store;
