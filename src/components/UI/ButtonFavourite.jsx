/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './ButtonFavourite.module.css';
import {
    addToFavourite,
    deleteFromFavourite,
} from '../../store/slices/favouriteSlice';

function ButtonFavourite({ id }) {
    const fav = useSelector((state) => state.favourite.favourites);
    const [isFavourite, setIsFavourite] = useState(fav.includes(id));
    const dispatch = useDispatch();

    const addToFavouriteHandler = () => {
        dispatch(addToFavourite(id));
        setIsFavourite(!isFavourite);
    };

    const deleteFromFavouriteHandler = () => {
        dispatch(deleteFromFavourite(id));
        setIsFavourite(!isFavourite);
    };

    return !isFavourite ? (
        <div className={style.buttonDiv}>
            <button
                className={style.btnAdd}
                type='button'
                onClick={addToFavouriteHandler}
            >
                Добавить в избранное
            </button>
        </div>
    ) : (
        <div className={style.buttonDiv}>
            <button
                className={style.btnDel}
                type='button'
                onClick={deleteFromFavouriteHandler}
            >
                Удалить из избранного
            </button>
        </div>
    );
}

export default ButtonFavourite;
