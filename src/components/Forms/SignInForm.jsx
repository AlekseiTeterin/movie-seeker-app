/* eslint-disable react/require-default-props */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
    Container,
    TextField,
    Button,
    InputAdornment,
    IconButton,
} from '@mui/material';
import propTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import style from './FormsStyle.module.css';
import * as constants from '../../store/CONSTANTS';
import formValidator from '../../utils/formValidator';

function SignInForm({ handleSubmit, buttonName }) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [altText, setAltText] = useState('');
    const [altTextPassword, setAltTextPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    return (
        <Container className={style.container} component='main'>
            <TextField
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
                helperText={
                    altText !== '' ? altText : constants.NAME_FIELD_TEXT
                }
                error={Boolean(altText)}
            />
            <TextField
                label='Введите пароль 8 - 20 символов'
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                fullWidth
                margin='normal'
                onChange={(e) => {
                    setPassword(e.target.value);
                    setAltTextPassword(formValidator(e.target.value, true));
                }}
                helperText={
                    altTextPassword !== ''
                        ? altTextPassword
                        : constants.PASSWORD_FIELD_TEXT
                }
                error={Boolean(altTextPassword)}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position='end'>
                            <IconButton
                                aria-label='toggle password visibility'
                                onClick={() => setShowPassword(!showPassword)}
                                edge='end'
                            >
                                {showPassword ? (
                                    <Visibility />
                                ) : (
                                    <VisibilityOff />
                                )}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
            <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
                onClick={() => {
                    if (handleSubmit(name, password)) {
                        navigate('/');
                    } else {
                        alert('Вы ввели неверный логин или пароль :(');
                    }
                }}
            >
                {buttonName}
            </Button>
        </Container>
    );
}

SignInForm.propTypes = {
    handleSubmit: propTypes.func,
    buttonName: propTypes.string,
};

export default SignInForm;
