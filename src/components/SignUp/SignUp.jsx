/* eslint-disable no-const-assign */
import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import store from '../../store';
import { IsAuthContext } from '../../store/context';
import { setCurrentUser } from '../../store/slices/currentUserSlice';
import RegisterForm from '../Forms/RegisterForm';

function SignUp() {
    const dispatch = useDispatch();
    const { toggleAuth } = useContext(IsAuthContext);

    const register = (name, password) => {
        dispatch(
            setCurrentUser({
                userName: name,
                userPassword: password,
            })
        );
        toggleAuth();
        const array = Array.from(
            JSON.parse(localStorage.getItem('users')) || {
                name: 'Andrew',
                password: 'rdfs',
            }
        );
        array.push(store.getState().currentUser);
        localStorage.setItem('users', JSON.stringify(array));
    };

    return (
        <RegisterForm handleSubmit={register} buttonName='Отправить данные' />
    );
}

export default SignUp;
