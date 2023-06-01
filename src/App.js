import { React, lazy, Suspense } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import BaseLayout from './components/BaseLayout/BaseLayout';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const MoviePage = lazy(() => import('./pages/MoviePage/MoviePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const SearchPage = lazy(() => import('./pages/SearchPage/SearchPage'));

function App() {
    return (
        <div className='App'>
            <BaseLayout />
            <Suspense fallback={<div>Loading page. Wait a few seconds...</div>}>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/signin' element={<LoginPage />} />
                    <Route path='/signup' element={<RegisterPage />} />
                    <Route path='/movie/:id' element={<MoviePage />} />
                    <Route path='/search/:query' element={<SearchPage />} />
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
