/* eslint-disable react/require-default-props */
import React, { useContext } from 'react';
import { TextField, Button } from '@mui/material';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IsAuthContext } from '../../store/context';

function Search({ searchValue, setSearchValue, addToHistoryHandler }) {
    const { isAuth } = useContext(IsAuthContext);
    return (
        <div style={{ marginTop: '20px' }}>
            <TextField
                sx={{ width: '70vw', height: '40px', mr: '40px' }}
                label='SearchField'
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <Button
                variant='outlined'
                color='secondary'
                sx={{ width: '10vw', height: '56px' }}
                onClick={addToHistoryHandler}
            >
                <Link to={isAuth ? `/search/${searchValue}` : '/signin'}>Поиск</Link>
            </Button>
        </div>
    );
}

Search.propTypes = {
    searchValue: propTypes.string,
    setSearchValue: propTypes.func,
    addToHistoryHandler: propTypes.func,
};

export default Search;
