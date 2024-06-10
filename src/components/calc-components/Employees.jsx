import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './employees.css';

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({ firstName: '', lastName: '', email: '', phone: '' });

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/employees');
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const handleAddEmployee = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/employees', newEmployee);
      setEmployees([...employees, response.data]);
      setNewEmployee({ firstName: '', lastName: '', email: '', phone: '' });
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  return (
    <div className="employees-container">
      <h2>Учет сотрудников</h2>
      <input
        type="text"
        value={newEmployee.firstName}
        onChange={(e) => setNewEmployee({ ...newEmployee, firstName: e.target.value })}
        placeholder="Имя"
      />
      <input
        type="text"
        value={newEmployee.lastName}
        onChange={(e) => setNewEmployee({ ...newEmployee, lastName: e.target.value })}
        placeholder="Фамилия"
      />
      <input
        type="email"
        value={newEmployee.email}
        onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })}
        placeholder="Email"
      />
      <input
        type="text"
        value={newEmployee.phone}
        onChange={(e) => setNewEmployee({ ...newEmployee, phone: e.target.value })}
        placeholder="Телефон"
      />
      <button onClick={handleAddEmployee}>Добавить сотрудника</button>
      <ul>
        {employees && employees.length > 0 ? (
          employees.map((employee) => (
            <li key={employee.id}>{employee.firstName} {employee.lastName} - {employee.email} - {employee.phone}</li>
          ))
        ) : (
          <p>Нет доступных сотрудников</p>
        )}
      </ul>
    </div>
  );
};

export default Employees;