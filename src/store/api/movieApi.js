import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const key = process.env.REACT_APP_X_API_KEY;

export const movieApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.kinopoisk.dev/v1.3/movie',
        method: 'GET',
        headers: {
            'X-API-KEY': key,
            Accept: 'application/json',
        },
    }),
    endpoints: (builder) => ({
        getRandomMovie: builder.query({
            query: () => ({
                url: '/random',
            }),
        }),
        getMovies: builder.query({
            query: (limit) => ({
                params: {
                    limit,
                    page: 3,
                },
            }),
        }),
        getMovieById: builder.query({
            query: (id) => ({
                url: `/${id}`,
            })
        }),
        getMovieByName: builder.query({
            query: (name) => ({
                params: {
                    name,
                }
            })
        })
    }),
});

export const { useGetRandomMovieQuery, useGetMoviesQuery, useGetMovieByIdQuery, useGetMovieByNameQuery } = movieApi;
