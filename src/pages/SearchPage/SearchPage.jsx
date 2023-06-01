import React from "react";
import { useParams } from "react-router-dom";
import style from './SearchPage.module.css'
import MovieCard from "../../components/MovieCard/MovieCard";
import { useGetMovieByNameQuery } from "../../store/api/movieApi";

function SearchPage() {
    const filmName = useParams();
    const { data, isLoading, error } = useGetMovieByNameQuery(filmName);
    return(
        <div className={style.SearchPage}>
            {isLoading && <div className={style.movie}>Loading...</div> }
            {error && <div className={style.movie}>Something error. Oops.</div>}
            {data && data.map(film => (
                <MovieCard key={film.id} movieData={film}/>
            ))}
        </div>
    )
}

export default SearchPage;