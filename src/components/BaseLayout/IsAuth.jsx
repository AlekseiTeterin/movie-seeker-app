/* eslint-disable no-undef */
/* eslint-disable no-const-assign */
import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import style from './BaseLayout.module.css';
import store from '../../store';
import { IsAuthContext } from '../../store/context';
import { removeCurrentUser } from '../../store/slices/currentUserSlice';

function IsAuth() {
    const dispatch = useDispatch();
    const { isAuth, toggleAuth } = useContext(IsAuthContext);

    return !isAuth ? (
        <ul className={style.links}>
            <li>
                <NavLink to='/signin'>Войти</NavLink>
            </li>
            <li>
                <NavLink to='/signup'>Регистрация</NavLink>
            </li>
        </ul>
    ) : (
        <ul className={style.links}>
            <li className={style.user}>
                {store.getState().currentUser.userName}
            </li>
            <li>
                <NavLink to='/favourite'>Избранное</NavLink>
            </li>
            <li>
                <NavLink to='/history'>История</NavLink>
            </li>
            <li>
                <NavLink
                    to='/'
                    onClick={() => {
                        dispatch(removeCurrentUser());
                        localStorage.setItem(
                            'currentUser',
                            JSON.stringify(store.getState().currentUser)
                        );
                        toggleAuth();
                    }}
                >
                    Выйти
                </NavLink>
            </li>
        </ul>
    );
}

export default IsAuth;
