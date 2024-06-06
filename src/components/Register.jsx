import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const { username, email, password } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/register', formData);
      console.log(response.data);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button style={{color:'#000'}} type="submit">Регистрация</button>
    </form>
  );
};

export default Register;