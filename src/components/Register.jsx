import React, { useState } from 'react';
import axios from 'axios';
import './register.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  const { username, email, password } = formData;
  const navigate = useNavigate();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      console.log('Sending registration request:', formData);
      const response = await axios.post('http://localhost:5000/api/register', formData);
      console.log('Registration successful:', response.data);
      // Сохранение токена аутентификации в локальном хранилище
      localStorage.setItem('token', response.data.token);
      // Перенаправление на главную страницу после успешной регистрации
      navigate('/');
    } catch (error) {
      console.error('There was an error!', error);
      if (error.response && error.response.data && error.response.data.error) {
        setErrorMessage(error.response.data.error);
      } else {
        setErrorMessage('Произошла ошибка при регистрации'
          );
      }
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Регистрация</h2>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          placeholder="Имя"
          required
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Пароль"
          required
        />
        <button type="submit">Регистрация</button>
      </form>
    </div>
  );
};

export default Register;