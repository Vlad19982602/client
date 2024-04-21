import './header.css'
import Dropdown from 'react-bootstrap/Dropdown';


function Header () {
    return (
        <header className='header'>
            <div className='container'>
                <nav className="header__menu">
                    <ul>
                        <li className="header__menu-item" >
                            <a className="header__menu__link-item" href="/home">Главная</a>
                        </li>
                        <li className="header__menu-item" >
                            <a className="header__menu__link-item" href="/komanda">О нас</a>
                        </li>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Услуги
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Вентиляция на производстве</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Вентиляция в коттедже</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Вентиляция в частном бассейне</Dropdown.Item>
                                <Dropdown.Item href="#/action-4">Вентиляция в кафе, ресторане, баре</Dropdown.Item>
                                
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Портфолио
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">В частном доме</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Климатические системы в интерьере</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">На производстве</Dropdown.Item>
                                <Dropdown.Item href="#/action-4">Системы аспирации</Dropdown.Item>
                                <Dropdown.Item href="#/action-5">Монтаж вентиляции</Dropdown.Item>
                                
                            </Dropdown.Menu>
                        </Dropdown>
                        <li className="header__menu-item">
                            <a className="header__menu__link-item" href="/kak_rabotaem">Как работаем</a>
                        </li>
                        <li className="header__menu-item">
                            <a className="header__menu__link-item" href="/contact">Контакты</a>
                        </li>
                        <li className="header__menu-item">
                            <a className="header__menu__link-item" href="/blog" >Блог</a>
                        </li>
                        <li className="header__menu-item">
                            <a className="header__menu__link-item" href="/resume" >Вакансии</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;