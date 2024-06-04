import { black } from 'colors'
import "./header.css";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <nav className="header__menu">
            <ul>
              <li className="header__menu-item">
                <a className="header__menu__link-item" href="/">
                  Главная
                </a>
              </li>
              <li className="header__menu-item">
                <a className="header__menu__link-item" href="/about-us">
                  О нас
                </a>
              </li>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Услуги
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/vent-prom">
                    Вентиляция на производстве
                  </Dropdown.Item>
                  <Dropdown.Item href="/dom">
                    Вентиляция в коттедже
                  </Dropdown.Item>
                  <Dropdown.Item href="/groceries">
                    Вентиляция в кафе, ресторане, баре
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Портфолио
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/private-house">
                    В частном доме
                  </Dropdown.Item>
                  <Dropdown.Item href="/inter-house">
                    Климатические системы в интерьере
                  </Dropdown.Item>
                  <Dropdown.Item href="/prom-house">
                    На производстве
                  </Dropdown.Item>
                  <Dropdown.Item href="/asp-house">
                    Системы аспирации
                  </Dropdown.Item>
                  <Dropdown.Item href="/job-house">
                    Монтаж вентиляции
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <li className="header__menu-item">
                <a className="header__menu__link-item" href="/how-work">
                  Как работаем
                </a>
              </li>
              <li className="header__menu-item">
                <a className="header__menu__link-item" href="/contact">
                  Контакты
                </a>
              </li>
              <li className="header__menu-item">
                <a className="header__menu__link-item" href="/blog">
                  Блог
                </a>
              </li>
              <li className="header__menu-item">
                <a className="header__menu__link-item" href="/resume">
                  Вакансии
                </a>
              </li>
            </ul>
            <Link style={{black}} to="/register">Регистрация</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
