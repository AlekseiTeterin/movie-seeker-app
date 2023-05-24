import React from 'react';
import style from './HomePage.module.css';
import MovieCard from '../../components/MovieCard/MovieCard';
import movieArr from '../../utils/MovieApi';


function HomePage() {
    return (movieArr.length === 6) ? (
        <div className={style.home}>
           {movieArr.map((movie) => 
                    <MovieCard key={movie.id} movieData={movie}/>
        )}
        </div>
    ) : (
        <div>Loading info from server...</div>
    )
}

export default HomePage;
