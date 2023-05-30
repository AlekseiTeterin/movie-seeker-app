import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const key = process.env.REACT_APP_X_API_KEY;

export const movieApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.kinopoisk.dev',
        headers: {
            'X-API-KEY': key,
            Accept: 'application/json',
        },
    }),
    endpoints: (builder) => ({
        getRandomMovie: builder.query({
            query: () => ({
                url: '/v1.3/movie/random',
                method: 'GET',
            }),
        }),
        getMovies: builder.query({
            query: (limit) => ({
                url: '/v1.3/movie',
                method: 'GET',
                params: {
                    limit,
                    page: 3,
                },
            }),
        }),
    }),
});

export const { useGetRandomMovieQuery, useGetMoviesQuery } = movieApi;
