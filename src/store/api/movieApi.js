import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const key = process.env.REACT_APP_X_API_KEY; 

export const movieApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.kinopoisk.dev" }),
    endpoints: (builder) => ({
        getMovieRandomTitle: builder.query({
            query: () => ({
                url: '/v1.3/movie/random',
                method: 'GET',
                headers: {
                    'X-API-KEY': key,
                    Accept: 'application/json',
                }
            })           
        }),
        getMoviesForHomePage: builder.query({
            query: (limit) => ({
                url: '/v1.3/movie',
                method: 'GET',                  
                headers: {
                    'X-API-KEY': key,
                    Accept: 'application/json',
                },
                params: {
                    limit,
                    page: 4
                },
            })           
        }),
    })
})

export const { useGetMovieRandomTitleQuery, useGetMoviesForHomePageQuery } = movieApi;