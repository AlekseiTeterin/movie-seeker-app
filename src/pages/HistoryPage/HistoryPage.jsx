import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './HistoryPage.module.css';

function HistoryPage() {
    const historyArray = useSelector((state) => state.history.history);
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
        </div>
    );
}

export default HistoryPage;
