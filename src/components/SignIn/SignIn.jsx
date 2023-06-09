import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import store from '../../store';
import { IsAuthContext } from '../../store/IsAuthContext';
import { setCurrentUser } from '../../store/slices/currentUserSlice';
import { setFavourite } from '../../store/slices/favouriteSlice';
import { setHistory } from '../../store/slices/historySlice';
import LSKeyBuilder from '../../utils/LSKeyBuilder';
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
                            localStorage.getItem(LSKeyBuilder('favourite'))
                        ) || []
                    )
                );
                dispatch(
                    setHistory(
                        JSON.parse(
                            localStorage.getItem(LSKeyBuilder('history'))
                        ) || []
                    )
                );
            }
        });

        return isTruthParams;
    };

    return <SignInForm handleSubmit={handleLogin} buttonName='Войти' />;
}

export default SignIn;
