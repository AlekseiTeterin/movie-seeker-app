import React from 'react';
import style from './FavouritePage.module.css';
import MovieCard from '../../components/MovieCard/MovieCard';
import useFavourite from '../../hooks/useFavourite';

function FavouritePage() {
    const favouriteArray = useFavourite();

    if (favouriteArray.length === 0) {
        return (
            <div className={style.favourite}>
                <h1>В избранном пока ничего нет</h1>
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
