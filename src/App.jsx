import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <div className="app">
            <nav>
                <Link to="/" className="app-link">Home</Link>
                <Link to="/planner" className="app-link">Planner</Link>
                <Link to="/activitysetter" className="activity-setter">Activity Setter</Link>
            </nav>
            <div className="app-main">
                <h1 className="app-title">ProPlan</h1>
                <p className="app-description">Your ultimate tool for organizing tasks and planning your day with ease.</p>
            </div>
        </div>
    );
}

export default App;
