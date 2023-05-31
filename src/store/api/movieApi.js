import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const key = process.env.REACT_APP_X_API_KEY;

export const movieApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.kinopoisk.dev',
        method: 'GET',
        headers: {
            'X-API-KEY': key,
            Accept: 'application/json',
        },
    }),
    endpoints: (builder) => ({
        getRandomMovie: builder.query({
            query: () => ({
                url: '/v1.3/movie/random',
            }),
        }),
        getMovies: builder.query({
            query: (limit) => ({
                url: '/v1.3/movie',
                params: {
                    limit,
                    page: 3,
                },
            }),
        }),
        getMovieById: builder.query({
            query: (id) => ({
                url: `/v1.3/movie/${id}`,
            })
        })
    }),
});

export const { useGetRandomMovieQuery, useGetMoviesQuery, useGetMovieByIdQuery } = movieApi;
