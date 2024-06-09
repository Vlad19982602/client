import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './equipment.css';

const Equipment = () => {
  const [equipment, setEquipment] = useState([]);
  const [newEquipment, setNewEquipment] = useState({ name: '', quantity: '', projectId: '' });

  useEffect(() => {
    fetchEquipment();
  }, []);

  const fetchEquipment = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/equipment');
      setEquipment(response.data);
    } catch (error) {
      console.error('Error fetching equipment:', error);
    }
  };

  const handleAddEquipment = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/equipment', newEquipment);
      setEquipment([...equipment, response.data]);
      setNewEquipment({ name: '', quantity: '', projectId: '' });
    } catch (error) {
      console.error('Error adding equipment:', error);
    }
  };

  return (
    <div className="equipment-container">
      <h2>Учет оборудования</h2>
      <input
        type="text"
        value={newEquipment.name}
        onChange={(e) => setNewEquipment({ ...newEquipment, name: e.target.value })}
        placeholder="Название оборудования"
      />
      <input
        type="number"
        value={newEquipment.quantity}
        onChange={(e) => setNewEquipment({ ...newEquipment, quantity: e.target.value })}
        placeholder="Количество"
      />
      <input
        type="text"
        value={newEquipment.projectId}
        onChange={(e) => setNewEquipment({ ...newEquipment, projectId: e.target.value })}
        placeholder="ID проекта"
      />
      <button onClick={handleAddEquipment}>Добавить оборудование</button>
      <ul>
        {equipment.length > 0 ? (
          equipment.map((equip) => (
            <li key={equip.id}>{equip.name} - {equip.quantity}</li>
          ))
        ) : (
          <p>Нет доступного оборудования</p>
        )}
      </ul>
    </div>
  );
};

export default Equipment;