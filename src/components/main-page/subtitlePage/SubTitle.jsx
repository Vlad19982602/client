import React, { useState } from 'react';
import logoImg from './Airmaster_logo_horiz.png';
import phone from './phone.png';
import './subTitle.css';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function SubTitle() {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <>
            <div className="subTitle">
                <div className='container'>
                    <div className="subTitle__row">
                        <div className='subTitle__wrapper'>
                            <div className='col-md-4 col-sm-4 col-xs-10'>
                                <a href='/'>
                                    <div className='subTitle__logo'>
                                        <img src={logoImg} alt='logo' className='subTitle__logo-img' />
                                        <div>Системы вентиляции помещений в Челябинске и Челябинской области</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className='col-md-4 col-sm-4 col-xs-10'>
                            <div className='subTitle__wrapper'>
                                <div className='subTitle__descr'>
                                    <strong>vent@airmaster74.ru</strong>
                                    <br />
                                    <br />
                                    <strong>Челябинск, ул. Стартовая, д. 34, оф. 101</strong>
                                    <br />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 col-sm-4 col-xs-10'>
                            <div className='subTitle__wrapper'>
                                <Nav className="justify-content-center" activeKey="/">
                                    <Nav.Item>
                                        <Nav.Link className='subTitle__wrapper-phone-num' eventKey="link-1">
                                            <img src={phone} alt='phone' />
                                            <div>+7 (922) 630-21-03</div>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Button className='subTitle__btn' variant="success" onClick={handleShow}>Заказать услугу</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Заказать услугу</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formName">
                            <Form.Label>Имя</Form.Label>
                            <Form.Control type="text" placeholder="Введите ваше имя" />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Введите ваш email" />
                        </Form.Group>
                        <Form.Group controlId="formPhone">
                            <Form.Label>Телефон</Form.Label>
                            <Form.Control type="text" placeholder="Введите ваш телефон" />
                        </Form.Group>
                        <Form.Group controlId="formMessage">
                            <Form.Label>Сообщение</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Введите ваше сообщение" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Закрыть
                    </Button>
                    <Button variant="success" onClick={handleClose}>
                        Отправить
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default SubTitle;