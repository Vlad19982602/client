import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './reports.css';

const Reports = () => {
  const [reports, setReports] = useState([]);
  const [newReport, setNewReport] = useState({
    date: '',
    description: '',
    projectId: '',
    materialCost: '',
    laborCost: '',
    totalCost: ''
  });

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/reports');
      setReports(response.data);
    } catch (error) {
      console.error('Error fetching reports:', error);
    }
  };

  const handleAddReport = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/reports', newReport);
      setReports([...reports, response.data]);
      setNewReport({
        date: '',
        description: '',
        projectId: '',
        materialCost: '',
        laborCost: '',
        totalCost: ''
      });
    } catch (error) {
      console.error('Error adding report:', error);
    }
  };

  const handleChange = (e) => {
    setNewReport({ ...newReport, [e.target.name]: e.target.value });
  };

  return (
    <div className="reports-container">
      <h2>Учет отчетов</h2>
      <input
        type="date"
        name="date"
        value={newReport.date}
        onChange={handleChange}
        placeholder="Дата"
        required
      />
      <input
        type="text"
        name="description"
        value={newReport.description}
        onChange={handleChange}
        placeholder="Описание"
        required
      />
      <input
        type="text"
        name="projectId"
        value={newReport.projectId}
        onChange={handleChange}
        placeholder="ID проекта"
        required
      />
      <input
        type="number"
        name="materialCost"
        value={newReport.materialCost}
        onChange={handleChange}
        placeholder="Стоимость материалов"
        required
      />
      <input
        type="number"
        name="laborCost"
        value={newReport.laborCost}
        onChange={handleChange}
        placeholder="Стоимость труда"
        required
      />
      <input
        type="number"
        name="totalCost"
        value={newReport.totalCost}
        onChange={handleChange}
        placeholder="Полная стоимость"
        required
      />
      <button onClick={handleAddReport}>Добавить отчет</button>
      <ul>
        {reports.length > 0 ? (
          reports.map((report) => (
            <li key={report.id}>
              {report.date}: {report.description} - Материалы: {report.materialCost}, Труд: {report.laborCost}, Всего: {report.totalCost}
            </li>
          ))
        ) : (
          <p>Нет доступных отчетов</p>
        )}
      </ul>
    </div>
  );
};

export default Reports;