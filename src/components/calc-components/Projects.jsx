import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ name: '', description: '', clientId: '' });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/projects');
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const handleAddProject = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/projects', newProject);
      setProjects([...projects, response.data]);
      setNewProject({ name: '', description: '', clientId: '' });
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };

  return (
    <div className="projects-container">
      <h2>Учет проектов</h2>
      <input
        type="text"
        value={newProject.name}
        onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
        placeholder="Название проекта"
      />
      <input
        type="text"
        value={newProject.description}
        onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
        placeholder="Описание"
      />
      <input
        type="text"
        value={newProject.clientId}
        onChange={(e) => setNewProject({ ...newProject, clientId: e.target.value })}
        placeholder="ID клиента"
      />
      <button onClick={handleAddProject}>Добавить проект</button>
      <ul>
        {projects.length > 0 ? (
          projects.map((project) => (
            <li key={project.id}>{project.name} - {project.description}</li>
          ))
        ) : (
          <p>Нет доступных проектов</p>
        )}
      </ul>
    </div>
  );
};

export default Projects;