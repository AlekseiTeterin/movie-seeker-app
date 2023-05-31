/* eslint-disable no-undef */
/* eslint-disable no-const-assign */
import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import style from './BaseLayout.module.css';
import store from '../../store';
import { IsAuthContext } from '../../store/context';
import { removeCurrentUser } from '../../store/slices/currentUserSlice';

function IsAuth() {
    const dispatch = useDispatch();
    const { isAuth, toggleAuth } = useContext(IsAuthContext);
    const name = useSelector(state => state.currentUser.userName);
   
    const clickHandler = () => {
        dispatch(removeCurrentUser());
        localStorage.setItem(
             'currentUser',
             JSON.stringify(store.getState().currentUser)
        );
        toggleAuth();
    }

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
                {name}
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
                    onClick={clickHandler}
                >
                    Выйти
                </NavLink>
            </li>
        </ul>
    );
}

export default IsAuth;
