import logoImg from '../../img/Airmaster_logo_horiz.png'
import phone from '../../img/phone.png'
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
                            <div className='col-md-4 col-sm-3 col-xs-10'>
                                <div className='subTitle__logo'>
                                    <img src={logoImg} alt='logo' className='subTitle__logo-img'/>
                                    <div>Системы вентиляции помещений в Челябинске и Челябинской области</div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 col-sm-3 col-xs-10'>
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
                        <div className='col-md-4 col-sm-3 col-xs-10'>
                            <div className='subTitle__wrapper'>
                                <Nav className="justify-content-center" activeKey="/home">
                                    <Nav.Item>
                                        <Nav.Link eventKey="link-1" className='subTitle__wrapper-phone'>
                                            <img src={phone} alt='phone'/>
                                            +7 (922) 630-21-03</Nav.Link>
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