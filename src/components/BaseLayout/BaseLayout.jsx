import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './BaseLayout.module.css';
import film from '../../images/film.svg';


function BaseLayout() {
    return (
        <div className={style.header}>
            <nav className={style.navigationBar}>
                <NavLink to='/'>
                    <div className={style.imgWrapper}>
                        <img className={style.img} src={film} alt='movie-icon'/>
                        <div className={style.logoText}>фильмотека</div>
                    </div>
                </NavLink>
                <ul className={style.links}>
                    <li>
                        <NavLink to='/signin'>Войти</NavLink>
                    </li>
                    <li>
                        <NavLink to='/signup'>Регистрация</NavLink>
                    </li>
                </ul>
            </nav>
            
        </div>
        
    );
}

export default BaseLayout;