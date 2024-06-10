import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './contractors.css';

const Contractors = () => {
  const [contractors, setContractors] = useState([]);
  const [newContractor, setNewContractor] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    fetchContractors();
  }, []);

  const fetchContractors = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/contractors');
      setContractors(response.data);
    } catch (error) {
      console.error('Error fetching contractors:', error);
    }
  };

  const handleAddContractor = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/contractors', newContractor);
      setContractors([...contractors, response.data]);
      setNewContractor({ name: '', email: '', phone: '' });
    } catch (error) {
      console.error('Error adding contractor:', error);
    }
  };

  return (
    <div className="contractors-container">
      <h2>Учет подрядчиков</h2>
      <input
        type="text"
        value={newContractor.name}
        onChange={(e) => setNewContractor({ ...newContractor, name: e.target.value })}
        placeholder="Имя"
      />
      <input
        type="email"
        value={newContractor.email}
        onChange={(e) => setNewContractor({ ...newContractor, email: e.target.value })}
        placeholder="Email"
      />
      <input
        type="text"
        value={newContractor.phone}
        onChange={(e) => setNewContractor({ ...newContractor, phone: e.target.value })}
        placeholder="Телефон"
      />
      <button onClick={handleAddContractor}>Добавить подрядчика</button>
      <ul>
        {contractors && contractors.length > 0 ? (
          contractors.map((contractor) => (
            <li key={contractor.id}>{contractor.name} - {contractor.email} - {contractor.phone}</li>
          ))
        ) : (
          <p>Нет доступных подрядчиков</p>
        )}
      </ul>
    </div>
  );
};

export default Contractors;