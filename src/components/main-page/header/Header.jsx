import "./header.css";
import React, { useEffect, useState } from 'react';
import Dropdown from "react-bootstrap/Dropdown";
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom'; 

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <header>
      <div className="header">
        <div className="header__container">
          <nav className="header__menu">
            <ul className="header__menu-list">
              {isAuthenticated ? (
                <>
                  <li>
                    <Button variant="primary" onClick={handleLogout}>
                      Выйти
                    </Button>
                  </li>
                  <li>
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic" className="header__menu__dropdown-toggle">
                        Меню
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="header__menu__dropdown-menu">
                        <Dropdown.Item as={Link} to="/users" className="header__menu__dropdown-item">
                          Пользователи
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="/clients" className="header__menu__dropdown-item">
                          Клиенты
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="/projects" className="header__menu__dropdown-item">
                          Проекты
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="/materials" className="header__menu__dropdown-item">
                          Материалы
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="/equipment" className="header__menu__dropdown-item">
                          Оборудование
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="/employees" className="header__menu__dropdown-item">
                          Сотрудники
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="/contractors" className="header__menu__dropdown-item">
                          Подрядчики
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="/worktime" className="header__menu__dropdown-item">
                          Рабочее время
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="/financials" className="header__menu__dropdown-item">
                          Финансовые затраты
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Button variant="success">
                      <Link className="header__menu__link-reg" to='/register'>
                        Регистрация
                      </Link>
                    </Button>
                  </li>
                  <li>
                    <Button variant="primary">
                      <Link className="header__menu__link-reg" to='/login'>
                        Войти
                      </Link>
                    </Button>
                  </li>
                </>
              )}
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
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
