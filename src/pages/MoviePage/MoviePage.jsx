import React from 'react';
import { useParams, Link } from 'react-router-dom';
import style from './MoviePage.module.css';
import { useGetMovieByIdQuery } from '../../store/api/movieApi';

function MoviePage() {
    const params = useParams();
    const filmId = params.id;
    const { data, isLoading, error } = useGetMovieByIdQuery(filmId);

    if (error) {
        return <div className={style.movie}>Something error</div>;
    }
    if (isLoading) {
        return <div className={style.movie}>Loading...</div>;
    }
    return (
        <div className={style.movie}>
            <div className={style.image}>
                <img
                    className={style.poster}
                    src={data.poster.url}
                    alt={data.name}
                    height='100%'
                />
            </div>
            <div className={style.description}>
                <div className={style.name}>{data.name}</div>
                <div>
                    <Link to={data.videos.trailers[0].url} className={style.link}>
                        Смотреть трейлер
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default MoviePage;
