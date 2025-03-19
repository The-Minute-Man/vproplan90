import React, { useState } from 'react';

function Planner() {
    const [isOpen, setIsOpen] = useState(false);
    const [goal, setGoal] = useState('');
    const [priority, setPriority] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [schedule, setSchedule] = useState({});
    const [status, setStatus] = useState('Not Started');
    const [goalsList, setGoalsList] = useState([]);

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const togglePopup = () => setIsOpen(!isOpen);

    const handleScheduleChange = (day, field, value) => {
        setSchedule((prev) => ({
            ...prev,
            [day]: { ...prev[day], [field]: value },
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (goal && priority && startDate && endDate && status && Object.keys(schedule).length) {
            const newGoal = {
                goal,
                priority: parseInt(priority, 10),
                startDate,
                endDate,
                schedule,
                status,
            };
            setGoalsList([...goalsList, newGoal]);
            setGoal('');
            setPriority('');
            setStartDate('');
            setEndDate('');
            setSchedule({});
            setStatus('Not Started');
            setIsOpen(false);
        }
    };

    return (
        <div className="planner">
            <section>
                <h2>Welcome to Planner</h2>
                <h3>Where you can write your path down for Success</h3>
            </section>
            <section>
                <h2>Planner Table</h2>
                <div className="goalenterer">
                    <button onClick={togglePopup}>Enter Goal</button>
                    {isOpen && (
                        <div className="popup-overlay">
                            <div className="popup-content">
                                <form id="myform" onSubmit={handleSubmit} className="form-grid">
                                    <div>
                                        <label htmlFor="goal">What is your goal?</label>
                                        <input
                                            type="text"
                                            id="goal"
                                            value={goal}
                                            onChange={(e) => setGoal(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="priority">Priority (Number):</label>
                                        <input
                                            type="number"
                                            id="priority"
                                            value={priority}
                                            onChange={(e) => setPriority(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="start-date">Start Date:</label>
                                        <input
                                            type="date"
                                            id="start-date"
                                            value={startDate}
                                            onChange={(e) => setStartDate(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="end-date">End Date:</label>
                                        <input
                                            type="date"
                                            id="end-date"
                                            value={endDate}
                                            onChange={(e) => setEndDate(e.target.value)}
                                        />
                                    </div>
                                    <div className="schedule-section">
                                        <h3>Work Schedule:</h3>
                                        {daysOfWeek.map((day) => (
                                            <div key={day} className="day-schedule">
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        checked={!!schedule[day]?.active}
                                                        onChange={(e) => handleScheduleChange(day, 'active', e.target.checked)}
                                                    />
                                                    {day}
                                                </label>
                                                {schedule[day]?.active && (
                                                    <div className="time-inputs">
                                                        <input
                                                            type="time"
                                                            placeholder="Start Time"
                                                            value={schedule[day]?.startTime || ''}
                                                            onChange={(e) => handleScheduleChange(day, 'startTime', e.target.value)}
                                                        />
                                                        <input
                                                            type="time"
                                                            placeholder="End Time"
                                                            value={schedule[day]?.endTime || ''}
                                                            onChange={(e) => handleScheduleChange(day, 'endTime', e.target.value)}
                                                        />
                                                        <div>
                                                            <label>
                                                                <input
                                                                    type="checkbox"
                                                                    checked={!!schedule[day]?.hasBreak}
                                                                    onChange={(e) => handleScheduleChange(day, 'hasBreak', e.target.checked)}
                                                                />
                                                                Add Break Times
                                                            </label>
                                                            {schedule[day]?.hasBreak && (
                                                                <div>
                                                                    <input
                                                                        type="time"
                                                                        placeholder="Break Start"
                                                                        value={schedule[day]?.breakStart || ''}
                                                                        onChange={(e) => handleScheduleChange(day, 'breakStart', e.target.value)}
                                                                    />
                                                                    <input
                                                                        type="time"
                                                                        placeholder="Break End"
                                                                        value={schedule[day]?.breakEnd || ''}
                                                                        onChange={(e) => handleScheduleChange(day, 'breakEnd', e.target.value)}
                                                                    />
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <label htmlFor="status">Status:</label>
                                        <select
                                            id="status"
                                            value={status}
                                            onChange={(e) => setStatus(e.target.value)}
                                        >
                                            <option value="Not Started">Not Started</option>
                                            <option value="In Progress">In Progress</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Paused">Paused</option>
                                        </select>
                                    </div>
                                    <div className="form-actions">
                                        <input type="submit" id="gsubmit" value="Submit" />
                                        <button onClick={togglePopup}>Close</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
                <table className="use" cellPadding="5">
                    <thead>
                        <tr>
                            <th>Priority</th>
                            <th>Goals</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Schedule</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {goalsList.map((goalItem, index) => (
                            <tr key={index}>
                                <td>{goalItem.priority}</td>
                                <td>{goalItem.goal}</td>
                                <td>{goalItem.startDate}</td>
                                <td>{goalItem.endDate}</td>
                                <td>
                                    {Object.entries(goalItem.schedule).map(([day, details]) => (
                                        details.active ? (
                                            <div key={day}>
                                                {day}: {details.startTime || 'N/A'} - {details.endTime || 'N/A'}
                                                {details.hasBreak && details.breakStart && details.breakEnd && (
                                                    <> (Break: {details.breakStart} - {details.breakEnd})</>
                                                )}
                                            </div>
                                        ) : null
                                    ))}
                                </td>
                                <td>{goalItem.status}</td>
                                <td><button>Complete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default Planner;
