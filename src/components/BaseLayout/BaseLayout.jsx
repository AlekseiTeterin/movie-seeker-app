import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './BaseLayout.module.css';
import IsAuth from './IsAuth';
import film from '../../images/film.svg';

function BaseLayout() {
    return (
        <div className={style.header}>
            <nav className={style.navigationBar}>
                <NavLink to='/'>
                    <div className={style.imgWrapper}>
                        <img
                            className={style.img}
                            src={film}
                            alt='movie-icon'
                        />
                        <div className={style.logoText}>фильмотека</div>
                    </div>
                </NavLink>
                <IsAuth />
            </nav>
        </div>
    );
}

export default BaseLayout;
