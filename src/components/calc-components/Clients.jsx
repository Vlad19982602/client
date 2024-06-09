import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './clients.css';

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [newClient, setNewClient] = useState({ username: '', email: '', phone: '' });

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/clients');
      setClients(response.data);
    } catch (error) {
      console.error('Error fetching clients:', error);
    }
  };

  const handleAddClient = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/clients', newClient);
      setClients(...clients, response.data);
      setNewClient({ username: '', email: '', phone: '' });
    } catch (error) {
      console.error('Error adding client:', error);
    }
  };

  return (
    <div className="clients-container">
      <h2>Учет клиентов</h2>
      <input
        type="text"
        value={newClient.username}
        onChange={(e) => setNewClient({ ...newClient, username: e.target.value })}
        placeholder="Имя пользователя"
      />
      <input
        type="email"
        value={newClient.email}
        onChange={(e) => setNewClient({ ...newClient, email: e.target.value })}
        placeholder="Email"
      />
      <input
        type="text"
        value={newClient.phone}
        onChange={(e) => setNewClient({ ...newClient, phone: e.target.value })}
        placeholder="Телефон"
      />
      <button onClick={handleAddClient}>Добавить клиента</button>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>{client.username} - {client.email} - {client.phone}</li>
        ))}
      </ul>
    </div>
  );
};

export default Clients;