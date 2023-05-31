import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import store from '../../store';
import { IsAuthContext } from '../../store/context';
import { setCurrentUser } from '../../store/slices/currentUserSlice';
import { setFavourite } from '../../store/slices/favouriteSlice';
import localStorageKey from '../../utils/localStorageKey';
import SignInForm from '../Forms/SignInForm';

function SignIn() {
    const dispatch = useDispatch();
    const { toggleAuth } = useContext(IsAuthContext);
    const handleLogin = (name, password) => {
        const array = Array.from(
            JSON.parse(localStorage.getItem('users')) || {}
        );
        let isTruthParams = false;
        array.forEach((el) => {
            if (el.userName === name && el.userPassword === password) {
                isTruthParams = true;
                toggleAuth();
                dispatch(
                    setCurrentUser({
                        userName: name,
                        userPassword: password,
                    })
                );
                localStorage.setItem(
                    'currentUser',
                    JSON.stringify(store.getState().currentUser)
                );
                dispatch(
                    setFavourite(
                        JSON.parse(
                            localStorage.getItem(localStorageKey('favourite'))
                        ) || []
                    )
                );
            }
        });
        // позже не забыть добавить логику добавления в store избранного
        // и истории поиска при успешной авторизации пользователя
        return isTruthParams;
    };

    return <SignInForm handleSubmit={handleLogin} buttonName='Войти' />;
}

export default SignIn;
