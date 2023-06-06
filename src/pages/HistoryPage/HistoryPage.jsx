import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './HistoryPage.module.css';
import useHistory from '../../hooks/useHistory';
import { removeHistory } from '../../store/slices/historySlice';

function HistoryPage() {
    const historyArray = useHistory();
    const dispatch = useDispatch();
    const reverseHistoryArray = JSON.parse(
        JSON.stringify(historyArray)
    ).reverse();

    return (
        <div className={style.history}>
            <h1>История поисковых запросов:</h1>
            <div className={style.queryList}>
                {reverseHistoryArray.map((elem) => (
                    <div key={reverseHistoryArray.indexOf(elem)}>
                        <Link to={`/search/${elem.query}`}>{elem.query}</Link>
                        <div>{elem.time}</div>
                    </div>
                ))}
            </div>
            <button
                type='button'
                onClick={() => {
                    dispatch(removeHistory());
                }}
            >
                Очистить историю запросов
            </button>
        </div>
    );
}

export default HistoryPage;
