/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Container, TextField, Button, InputAdornment, IconButton } from '@mui/material';
import propTypes from 'prop-types';
import style from './RegisterForm.module.css';
import formValidator from '../../utils/formValidator';

function RegisterForm({ handleSubmit, buttonName }) {
   
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [altText, setAltText] = useState('');
    const [altTextPassword, setAltTextPassword] = useState('');
    const [isConfirmed, setIsConfirmed] = useState(true);
    const [showPassword, setShowPassword] = useState(false);    

    const nameFieldText = 'только латинские буквы, цифры и _';
    const passwordFieldText = 'пароль должен состоять из латинских букв, минимум одной заглавной буквы и спецсимвола';

    return (
        <Container component='main' maxWidth='xs'>
            <TextField
                className={style.nick}
                label='Введите Nick-Name'
                value={name}
                margin='normal'
                required
                fullWidth
                autoFocus
                onChange={(e) => {
                    setName(e.target.value);
                    setAltText(formValidator(e.target.value, false));   
                }}
                helperText={(altText !== '') ? altText : nameFieldText }
                error={Boolean(altText)}
            />
            <TextField
                label='Введите пароль'
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                fullWidth
                margin='normal'
                onChange={(e) => {
                    setPassword(e.target.value);
                    setAltTextPassword(formValidator(e.target.value, true))
                }}
                helperText={(altTextPassword !== '') ? altTextPassword : passwordFieldText }
                error={Boolean(altTextPassword)}
                InputProps={{
                    endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                        >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                )}}
            />
            <TextField
                label='Повторите пароль'
                type={showPassword ? 'text' : 'password'}
                required
                value={confirmPassword}
                fullWidth
                margin='normal'
                onChange={(e) => {
                    setConfirmPassword(e.target.value)
                    setTimeout(() => {
                        if(e.target.value !== password) {
                            setIsConfirmed(false)
                        } else {
                            setIsConfirmed(true) 
                        }      
                    }, 0) 
                }}
                helperText={(isConfirmed) ? '' : 'Значения паролей не совпадают!'}
                error = {!isConfirmed}
                InputProps={{
                    endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                        >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                )}}
            />
            <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
                onClick={() => {
                    if(isConfirmed && altText === '' && altTextPassword === '') {
                        handleSubmit(name, password);
                    }
                }}
            >
                {buttonName}
            </Button>
        </Container>
    );
}

RegisterForm.propTypes = {
    handleSubmit: propTypes.func,
    buttonName: propTypes.string,
};

export default RegisterForm;
