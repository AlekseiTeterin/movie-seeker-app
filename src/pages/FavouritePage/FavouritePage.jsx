import React from 'react';
import { useSelector } from 'react-redux';
import style from './FavouritePage.module.css';
import MovieCard from '../../components/MovieCard/MovieCard';

function FavouritePage() {
    const favouriteArray = useSelector((state) => state.favourite.favourites);

    if (favouriteArray.length === 0) {
        return (
            <div className={style.favourite}>
                <h1>Здесь пока ничего нет</h1>
            </div>
        );
    }
    return (
        <div className={style.favourite}>
            <h1>Избранное:</h1>
            <div className={style.favList}>
                {favouriteArray.map((filmId) => (
                    <MovieCard key={filmId} movieId={filmId} />
                ))}
            </div>
        </div>
    );
}

export default FavouritePage;
