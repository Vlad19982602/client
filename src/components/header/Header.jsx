import './header.css'

function Header () {
    return (
        <header className='header'>
            <div className="row">
                <nav className="header__menu">
                    <ul>
                        <li className="header__menu-item" >
                            <a className="header__menu__link-item" href="/home">Главная</a>
                        </li>
                        <li className="header__menu-item" >
                            <a className="header__menu__link-item" href="/komanda">О нас</a>
                        </li>
                        <li className="header__menu-item">
                            <a className="header__menu__link-item header__menu__tm-link" href="#header__menu:more">Услуги</a>
                            <ul className="sub-header__menu">
                                <li className="header__menu-item sub__header__menu">
                                <a className="header__menu-i"  href="/uslugi" >Услуги</a>
                                </li>
                                <li className="header__menu-item sub__header__menu">
                                <a className="header__menu-i"  href="/proizvodstvo" >Вентиляция на производстве</a>
                                </li>
                                <li className="header__menu-item sub__header__menu">
                                <a className="header__menu-i"  href="/dom" >Вентиляция в коттедже</a>
                                </li>
                                <li className="header__menu-item sub__header__menu">
                                <a className="header__menu-i"  href="/basseyn_chastnyy" >Вентиляция в частном бассейне</a>
                                </li>
                                <li className= "header__menu-item sub__header__menu">
                                <a className="header__menu-i"  href="/restoran_kafe_bar" >Вентиляция в кафе, ресторане, баре</a>
                                </li>
                            </ul>
                        </li>
                        <li className="header__menu-item">
                            <a className="header__menu__link-item header__menu__tm-link" href="#header__menu:more1">Портфолио</a>
                            <ul className="sub-header__menu">
                                <li className="header__menu-item sub__header__menu">
                                <a className="header__menu-i"  href="/portfolio">Портфолио</a>
                                </li>
                                <li className="header__menu-item sub__header__menu">
                                <a className="header__menu-i" href="/dom_photo">В частном доме</a>
                                </li>
                                <li className="header__menu-item sub__header__menu">
                                <a className="header__menu-i" href="/ventilyatsiya_interior_photo">Климатические системы в интерьере</a>
                                </li>
                                <li className="header__menu-item sub__header__menu">
                                <a className="header__menu-i" href="/na_proizvodstve_photo" >На производстве</a>
                                </li>
                                <li className="header__menu-item sub__header__menu">
                                <a className="header__menu-i" href="/aspiration_photo">Системы аспирации</a>
                                </li>
                                <li className="header__menu-item sub__header__menu">
                                <a className="header__menu-i" href="/montazh_photo">Монтаж вентиляции</a>
                                </li>
                            </ul>
                        </li>
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