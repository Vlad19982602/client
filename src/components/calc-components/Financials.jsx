import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './financials.css';

const Financials = () => {
  const [financialEntries, setFinancialEntries] = useState([]);
  const [newEntry, setNewEntry] = useState({ date: '', amount: '' });

  useEffect(() => {
    fetchFinancialEntries();
  }, []);

  const fetchFinancialEntries = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/financials');
      setFinancialEntries(response.data);
    } catch (error) {
      console.error('Error fetching financial entries:', error);
    }
  };

  const handleAddEntry = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/financials', newEntry);
      setFinancialEntries(...financialEntries, response.data);
      setNewEntry({ date: '', amount: '' });
    } catch (error) {
      console.error('Error adding financial entry:', error);
    }
  };

  return (
    <div className="financials-container">
      <h2>Учет финансовых затрат</h2>
      <input
        type="date"
        value={newEntry.date}
        onChange={(e) => setNewEntry({ ...newEntry, date: e.target.value })}
        placeholder="Дата"
      />
      <input
        type="number"
        value={newEntry.amount}
        onChange={(e) => setNewEntry({ ...newEntry, amount: e.target.value })}
        placeholder="Сумма"
      />
      <button onClick={handleAddEntry}>Добавить запись</button>
      <ul>
        {financialEntries.map((entry) => (
          <li key={entry.id}>{entry.date}: {entry.amount} рублей</li>
        ))}
      </ul>
    </div>
  );
};

export default Financials;