import "./header.css";
import React, { useEffect, useState } from 'react';
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (token) {
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
      }
    };

    fetchUserData();
  }, []);

  return (
    <header>
      <div className="header">
        <div className="header__container">
          <nav className="header__menu">
            <ul className="header__menu-list">
              <li className="header__menu-item">
                <Link to="/" className='header__menu__link-item'>
                  Главная
                </Link>
              </li>
              <li className="header__menu-item">
                <Link to="/about-us" className='header__menu__link-item'>
                  О нас
                </Link>
              </li>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Услуги
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/vent-prom">
                    Вентиляция на производстве
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/dom">
                    Вентиляция в коттедже
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/groceries">
                    Вентиляция в кафе, ресторане, баре
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Портфолио
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/private-house">
                    В частном доме
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/inter-house">
                    Климатические системы в интерьере
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/prom-house">
                    На производстве
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/asp-house">
                    Системы аспирации
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/job-house">
                    Монтаж вентиляции
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <li className="header__menu-item">
                <Link to="/how-work" className='header__menu__link-item'>
                  Как работаем
                </Link>
              </li>
              <li className="header__menu-item">
                <Link className='header__menu__link-item' to="/contact">
                  Контакты
                </Link>
              </li>
              <li className='header__menu-reg'>
                <Button>
                    <Link variant="success" className="header__menu__link-reg" to='/register'>
                      Регистрация
                    </Link>
                </Button>
              </li>
              <li className='header__menu-reg'>
                <Button variant="primary">
                  <Link className="header__menu__link-reg" to='/login'>
                    Войти
                  </Link>
                </Button>
              </li>
              <li className="header__menu-item">
                <Link className='header__menu__link-item' to="/blog">
                  Блог
                </Link>
              </li>
              <li className="header__menu-item">
                <Link className='header__menu__link-item' to="/resume">
                  Вакансии
                </Link>
              </li>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Уголок клиента
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/users">
                    Пользователи
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/clients">
                    Клиенты
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/projects">
                    Проекты
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/materials">
                    Материалы
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/equipment">
                    Оборудование
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/employees">
                    Сотрудники
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/contractors">
                    Подрядчики
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/worktime">
                    Рабочее время
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/financials">
                    Финансовые затраты
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              {user && (
                <li className="header__menu-item">
                  <img src={user.avatar} alt="User Avatar" className="header__avatar" />
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
