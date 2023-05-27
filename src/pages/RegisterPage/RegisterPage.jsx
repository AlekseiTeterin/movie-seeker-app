import React from 'react';
import { Link } from 'react-router-dom';
import style from './RegisterPage.module.css';
import SignUp from '../../components/SignUp/SignUp';


function RegisterPage() {
    return (
        <div className={style.register}>
            <h2 className={style.text}>Регистрация нового пользователя</h2>
            <SignUp />
            <h3 className={style.altAction}>
                Уже регистрировались в системе? 
                <Link to='/signin' className={style.loginLink}>Войти</Link> 
            </h3>
        </div>
    );
}

export default RegisterPage;
