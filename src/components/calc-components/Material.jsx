import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './material.css';

const Materials = () => {
  const [materials, setMaterials] = useState([]);
  const [newMaterial, setNewMaterial] = useState('');

  useEffect(() => {
    fetchMaterials();
  }, []);

  const fetchMaterials = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/materials');
      setMaterials(response.data);
    } catch (error) {
      console.error('Error fetching materials:', error);
    }
  };

  const handleAddMaterial = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/materials', { name: newMaterial });
      setMaterials([...materials, response.data]);
      setNewMaterial('');
    } catch (error) {
      console.error('Error adding material:', error);
    }
  };

  return (
    <div className="materials-container">
      <h2>Учет материалов</h2>
      <input
        type="text"
        value={newMaterial}
        onChange={(e) => setNewMaterial(e.target.value)}
        placeholder="Название материала"
      />
      <button onClick={handleAddMaterial}>Добавить материал</button>
      <ul>
        {materials.map((material) => (
          <li key={material.id}>{material.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Materials;