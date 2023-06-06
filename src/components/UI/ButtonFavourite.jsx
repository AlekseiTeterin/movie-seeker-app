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
    return !isFavourite ? (
        <div className={style.buttonDiv}>
            <button
                className={style.btnAdd}
                type='button'
                onClick={() => {
                    dispatch(addToFavourite(id));
                    setIsFavourite(!isFavourite);
                }}
            >
                Добавить в избранное
            </button>
        </div>
    ) : (
        <div className={style.buttonDiv}>
            <button
                className={style.btnDel}
                type='button'
                onClick={() => {
                    dispatch(deleteFromFavourite(id));
                    setIsFavourite(!isFavourite);
                }}
            >
                Удалить из избранного
            </button>
        </div>
    );
}

export default ButtonFavourite;
