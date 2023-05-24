import React from 'react';
import style from './HomePage.module.css';
import MovieCard from '../../components/MovieCard/MovieCard';
import { useGetMoviesForHomePageQuery } from '../../store/api/movieApi';


function HomePage() {
    const { data, isLoading, error } = useGetMoviesForHomePageQuery(6);

    if (error) {
        return <div className={style.home}>Something error</div>;
    }
    if (isLoading) {
        return <div className={style.home}>Loading...</div>;
    }
    return (
        <div className={style.home}>
            {data.docs.map((movie) => (
                <MovieCard key={movie.id} movieData={movie} />
            ))}
        </div>
    );
}

export default HomePage;
