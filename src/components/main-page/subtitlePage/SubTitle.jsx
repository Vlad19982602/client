import logoImg from './Airmaster_logo_horiz.png'
import phone from './phone.png'
import './subTitle.css'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

function SubTitle () {
    return (
        <>
            <div className="subTitle">
                <div className='container'>
                    <div className="subTitle__row">
                        <div className='subTitle__wrapper'>
                            <div className='col-md-4 col-sm-4 col-xs-10'>
                                <a href='/'>
                                    <div className='subTitle__logo'>
                                    <img src={logoImg} alt='logo' className='subTitle__logo-img'/>
                                    <div>Системы вентиляции помещений в Челябинске и Челябинской области</div>
                                </div>
                                </a>
                            </div>
                        </div>
                        <div className='col-md-4 col-sm-4 col-xs-10'>
                            <div className='subTitle__wrapper'>
                                <div className='subTitle__descr'>
                                    <strong>vent@airmaster74.ru</strong>
                                    <br/>
                                    <br/>
                                    <strong>Челябинск, ул. Стартовая, д. 34, оф. 101</strong>
                                    <br/>    
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 col-sm-4 col-xs-10'>
                            <div className='subTitle__wrapper'>
                                <Nav className="justify-content-center" activeKey="/">
                                    <Nav.Item >
                                        <Nav.Link className='subTitle__wrapper-phone-num'eventKey="link-1" >
                                            <img src={phone} alt='phone'/>
                                            <div>
                                                +7 (922) 630-21-03
                                            </div>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Button className='subTitle__btn' variant="success">Заказать услугу</Button>{' '}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubTitle;