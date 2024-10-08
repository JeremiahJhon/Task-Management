import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';
import './styles/App.css';

function App() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Router>
    );
}

export default App;
