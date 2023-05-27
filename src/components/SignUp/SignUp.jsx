
import React from "react";
// import style from './SignUp.module.css';
import { useDispatch } from 'react-redux'
import store from "../../store";
import { setCurrentUser } from "../../store/slices/currentUserSlice";
import RegisterForm from "../RegisterForm/RegisterForm";


function SignUp() {
    const dispatch = useDispatch()

    const register = (name, password) => {
        dispatch(setCurrentUser({
            userName: name,
            userPassword: password,
        }))
        
        // тестовый кусок по работе LS. вынести в отдельную логику
        if(localStorage.getItem('users') === null) {
            localStorage.setItem('users', JSON.stringify({name: 'Andrew', password: 'rdfs'}));
        }

        let array = [{name: 'Petr', password: 'vfcfQ234'}];
        array = [...array, JSON.parse(localStorage.getItem('users'))];
        array= [...array, (store.getState().currentUser)]; // получение состояния текущего пользователя и добавление в массив
        localStorage.setItem('users', JSON.stringify(array))
        //
    }

    return(
        <RegisterForm handleSubmit={register} buttonName='Отправить данные' />
    )
}

export default SignUp;