/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import style from './MovieCard.module.css';

function MovieCard({ movieData }) {
    return (
        <div className={style.smallCard}>
            <Link to={`/movie/${movieData.id}`}>
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
