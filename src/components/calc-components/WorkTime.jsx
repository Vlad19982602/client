import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './worktime.css';

const WorkTime = () => {
  const [timeEntries, setTimeEntries] = useState([]);
  const [newEntry, setNewEntry] = useState({ date: '', hours: '' });

  useEffect(() => {
    fetchTimeEntries();
  }, []);

  const fetchTimeEntries = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/timeEntries');
      setTimeEntries(response.data);
    } catch (error) {
      console.error('Error fetching time entries:', error);
    }
  };

  const handleAddEntry = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/timeEntries', newEntry);
      setTimeEntries([...timeEntries, response.data]);
      setNewEntry({ date: '', hours: '' });
    } catch (error) {
      console.error('Error adding time entry:', error);
    }
  };

  return (
    <div className="worktime-container">
      <h2>Учет рабочего времени</h2>
      <input
        type="date"
        value={newEntry.date}
        onChange={(e) => setNewEntry({ ...newEntry, date: e.target.value })}
        placeholder="Дата"
      />
      <input
        type="number"
        value={newEntry.hours}
        onChange={(e) => setNewEntry({ ...newEntry, hours: e.target.value })}
        placeholder="Часы"
      />
      <button onClick={handleAddEntry}>Добавить запись</button>
      <ul>
        {timeEntries.map((entry) => (
          <li key={entry.id}>{entry.date}: {entry.hours} часов</li>
        ))}
      </ul>
    </div>
  );
};

export default WorkTime;