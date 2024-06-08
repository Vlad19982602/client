import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get('http://localhost:5000/api/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  if (!user) {
    return <p>Загрузка...</p>;
  }

  return (
    <div className="profile-container">
      <h1>Профиль пользователя</h1>
      <div className="profile-details">
        <img src={user.avatar} alt="User Avatar" className="profile-avatar" />
        <p>Имя: {user.username}</p>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
};

export default Profile;