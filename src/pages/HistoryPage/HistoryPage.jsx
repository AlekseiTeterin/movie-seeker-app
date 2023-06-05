import React from 'react';
import { Link } from 'react-router-dom';
import style from './HistoryPage.module.css';
import useHistory from '../../hooks/useHistory';

function HistoryPage() {
    const historyArray = useHistory();
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
