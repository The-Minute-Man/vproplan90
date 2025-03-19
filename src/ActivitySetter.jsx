import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './activitysetter.css';

function ActivitySetter() {
    const [activity, setActivity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (activity.trim()) {
            console.log("New Activity:", activity);
            setActivity('');
        }
    };

    return (
        <div className="activity-setter-page">
            <nav className="activity-nav">
                <Link to="/" className="activity-link">Home</Link>
                <Link to="/planner" className="activity-link">Planner</Link>
                <Link to="/activity-setter" className="activity-link">Activity Setter</Link>
            </nav>
            <div className="activity-setter">
                <h2 className="activity-title">Set Activities for Your Goal</h2>
                <form onSubmit={handleSubmit} className="activity-form">
                    <label htmlFor="activity" className="activity-label">Activity:</label>
                    <input 
                        type="text" 
                        id="activity" 
                        value={activity} 
                        onChange={(e) => setActivity(e.target.value)} 
                        placeholder="Enter an activity..."
                        className="activity-input"
                    />
                    <button type="submit" className="activity-button">Add Activity</button>
                </form>
            </div>
        </div>
    );
}

export default ActivitySetter;

// I’ve added the CSS classes to the JSX and linked a separate stylesheet called 'ActivitySetter.css'. Let me know if you want me to generate the CSS file content as well! 🚀
