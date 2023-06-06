/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import style from './MovieCard.module.css';
import { useGetMovieByIdQuery } from '../../store/api/movieApi';
import { PLUG_IMAGE_MOVIE_CARD } from '../../store/CONSTANTS';
import { IsAuthContext } from '../../store/context';
import ShowButtonFavourite from '../UI/ButtonFavourite';
// import IconHeartFavourite from '../UI/IconHeartFavourite';

function MovieCard({ movieId }) {
    const { data, isLoading, error } = useGetMovieByIdQuery(movieId);
    const { isAuth } = useContext(IsAuthContext);

    if (error) {
        return <div className={style.smallCard}>Something error</div>;
    }
    if (isLoading) {
        return <div className={style.smallCard}>Loading...</div>;
    }
    return (
        <div className={style.smallCard}>
            <Link to={isAuth ? `/movie/${data.id}` : '/signin'}>
                <div className={style.rating}>{data.rating.kp} kp</div>
                {/* <div className={style.heart}>
                    <IconHeartFavourite id={data.id} />
                </div> */}
                <div className={style.description}>
                    <div className={style.title}>{data.name}</div>
                    <div className={style.release}>
                        {data.year} {data.genres[0].name}
                    </div>
                </div>
                <img
                    className={style.poster}
                    src={
                        data.poster
                            ? data.poster.previewUrl
                            : PLUG_IMAGE_MOVIE_CARD
                    }
                    alt={data.name}
                />
            </Link>
            <ShowButtonFavourite filmId={data.id} />
        </div>
    );
}

export default MovieCard;
