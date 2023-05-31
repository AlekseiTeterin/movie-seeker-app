/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import style from './MovieCard.module.css';
import { IsAuthContext } from '../../store/context';

function MovieCard({ movieData }) {
    const { isAuth } = useContext(IsAuthContext);
    return (
        <div className={style.smallCard}>
            <Link to={isAuth ? `/movie/${movieData.id}` : '/signin'}>
                <div className={style.rating}>{movieData.rating.kp} kp</div>
                <div className={style.description}>
                    <div className={style.title}>{movieData.name}</div>
                    <div className={style.release}>
                        {movieData.year} {movieData.genres[0].name}
                    </div>
                </div>
                <img
                    className={style.poster}
                    src={movieData.poster.previewUrl}
                    alt={movieData.name}
                />
            </Link>
        </div>
    );
}

export default MovieCard;
