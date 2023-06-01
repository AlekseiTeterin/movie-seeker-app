import React from 'react';
import { useParams, Link } from 'react-router-dom';
import style from './MoviePage.module.css';
import ButtonFavourite from '../../components/UI/ButtonFavourite';
import { useGetMovieByIdQuery } from '../../store/api/movieApi';
import { PLUG_IMAGE_MOVIE_CARD } from '../../store/CONSTANTS';

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
                    src={
                        data.poster
                            ? data.poster.url
                            : PLUG_IMAGE_MOVIE_CARD
                    }
                    alt={data.name}
                    height='100%'
                />
            </div>
            <div className={style.description}>
                <div className={style.name}>{data.name}</div>
                <div className={style.andButton}>
                    <div className={style.list}>
                        <div className={style.tabex}>Жанр:</div>
                        <div>
                            {data.genres.map((genre) => (
                                <div key={data.genres.indexOf(genre)}>
                                    {' '}
                                    {genre.name}
                                </div>
                            ))}
                        </div>
                    </div>
                    <ButtonFavourite id={filmId} />
                </div>

                <div>Описание: {data.description}</div>
                <div>Год выхода картины: {data.year}</div>
                <div>
                    Рейтинг: Кинопоиск - {data.rating.kp}, IMDB -{' '}
                    {data.rating.imdb}, FilmCritics - {data.rating.filmCritics}
                </div>
                <div className={style.list}>
                    <div className={style.tabex}>В ролях: </div>
                    <div>
                        {data.persons.slice(0, 5).map((actor) => (
                            <div key={actor.id}> {actor?.name}</div>
                        ))}
                    </div>
                </div>

                <div>
                    <Link
                        to={data.videos?.trailers[0]?.url}
                        className={style.link}
                    >
                        Смотреть трейлер
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default MoviePage;
