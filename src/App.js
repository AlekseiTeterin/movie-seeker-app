import { React, lazy, Suspense } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import BaseLayout from './components/BaseLayout/BaseLayout';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';

const HomePage = lazy(() => import('./pages/HomePage/HomePage')) ;

function App() {
    return (
        <div className='App'>
            <BaseLayout />
            <Suspense fallback={<div>Loading page. Wait a few seconds...</div>}>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='signin' element={<LoginPage />} />
                    <Route path='signup' element={<RegisterPage />} />
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
