/* eslint-disable react/require-default-props */
import React, { useContext, useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './Search.module.css';
import { useGetMovieByNameQuery } from '../../store/api/movieApi';
import { IsAuthContext } from '../../store/context';
import { addToHistory } from '../../store/slices/historySlice';
import useDebounce from '../../utils/useDebounce';

function Search() {
    const { isAuth } = useContext(IsAuthContext);
    const [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch();
    const debounce = useDebounce(searchValue);
    const addToHistoryHandler = () => {
        if (searchValue !== '') {
            dispatch(addToHistory(searchValue));
        }
    };
    const { data } = useGetMovieByNameQuery(debounce, {
        skip: debounce.length < 3,
    });

    return (
        <div>
            <div className={style.searchField}>
                <div className={style.searchAndButton}>
                    <TextField
                        className={style.textField}
                        label='Введите поисковый запрос'
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <Button
                        className={style.btn}
                        variant='outlined'
                        color='secondary'
                        onClick={addToHistoryHandler}
                    >
                        <Link
                            to={isAuth ? `/search/${searchValue}` : '/signin'}
                        >
                            Поиск
                        </Link>
                    </Button>
                </div>
            </div>
            <div className={style.dropList}>
                <ul>
                    {data?.slice(0, 8).map((film) => (
                        <Link
                            key={film.id}
                            to={`/search/${film.name}`}
                            onClick={() => dispatch(addToHistory(film.name))}
                        >
                            <li className={style.listItems}>{film.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Search;
