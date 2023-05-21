import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import BaseLayout from './components/BaseLayout/BaseLayout';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';

function App() {
    return (
        <div className='App'>
            <BaseLayout />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='signin' element={<LoginPage />} />
                <Route path='signup' element={<RegisterPage />} />
            </Routes>
        </div>
    );
}

export default App;
