import './main.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Main () {
    return (
        <main className='main'>
            <div className='main__shadow'></div>
            <div className='container'>
                <div className='col-lg-6 col-md-6'>
                    <div className='main__text'>Свежий воздух без пыли, запахов, дыма в Вашем доме и на производстве с гарантией 3 года</div>
                    <div className="main__wrapper">
                        <div className="col-sm-3 col-xs-6 main__reg">
                            <div className="main_features_block">
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="110.000000px" height="123.000000px" viewBox="0 0 110.000000 133.000000" preserveAspectRatio="xMidYMid meet">

                                <g transform="translate(0.000000,133.000000) scale(0.100000,-0.100000)" fill="#76b82a" stroke="none">
                                <path d="M696 1098 c-3 -7 -7 -26 -11 -43 -15 -71 -99 -116 -176 -95 -34 10
                                -44 9 -57 -3 -8 -9 -12 -23 -8 -32 6 -18 7 -18 99 2 16 3 39 0 51 -7 37 -19
                                58 -9 70 35 9 31 20 44 51 60 48 26 53 40 24 71 -25 27 -38 30 -43 12z"></path>
                                <path d="M622 1063 c-17 -8 -32 -20 -32 -25 0 -5 -4 -7 -9 -4 -5 3 -14 -1 -21
                                -9 -7 -8 -19 -15 -26 -15 -8 0 -14 -4 -14 -10 0 -18 67 -11 94 11 26 20 51 57
                                44 64 -2 2 -18 -3 -36 -12z"></path>
                                <path d="M255 996 c-243 -163 -312 -491 -156 -735 39 -60 121 -138 181 -173
                                125 -73 295 -92 431 -49 119 38 239 134 301 241 95 164 95 376 0 540 -34 60
                                -106 135 -167 176 -49 33 -50 34 -65 15 -8 -11 -27 -25 -43 -30 -40 -15 -42
                                -33 -12 -96 15 -32 23 -64 20 -75 -7 -21 -39 -35 -56 -25 -6 4 -17 -2 -25 -14
                                -9 -12 -26 -21 -40 -21 -19 0 -29 10 -46 45 -12 25 -25 45 -28 45 -3 0 -14
                                -19 -25 -42 -24 -51 -65 -65 -85 -29 -8 16 -17 20 -34 15 -31 -7 -59 20 -50
                                50 4 11 15 38 25 58 27 53 24 76 -8 89 -16 6 -37 19 -48 29 -21 19 -21 19 -70
                                -14z"></path>
                                <path d="M585 871 c8 -17 20 -43 26 -57 l10 -27 23 22 c17 16 31 21 45 16 25
                                -8 26 -3 6 35 -14 26 -17 28 -44 17 -24 -9 -34 -7 -56 7 l-26 17 16 -30z"></path>
                                <path d="M409 863 c-5 -14 -12 -30 -15 -35 -3 -5 5 -6 19 -3 18 5 30 1 45 -15
                                l21 -22 25 51 26 51 -26 -12 c-19 -9 -33 -9 -55 -1 -28 11 -31 10 -40 -14z"></path>
                                </g>
                                </svg><p>Высокое <br/> качество</p>
                            </div>
                        </div>

                        <div className="col-sm-3 col-xs-6 main__reg">
                            <div className="main_features_block">
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="110.000000px" height="123.000000px" viewBox="0 0 110.000000 133.000000" preserveAspectRatio="xMidYMid meet">

                                <g transform="translate(0.000000,133.000000) scale(0.100000,-0.100000)" fill="#76b82a" stroke="none">
                                <path d="M599 1088 c-15 -10 -13 -14 14 -27 18 -9 42 -32 55 -51 59 -87 -25
                                -206 -132 -186 -57 11 -114 92 -101 144 5 21 4 22 -15 12 -40 -21 -15 -121 41
                                -162 91 -67 229 -20 258 88 18 69 -14 150 -70 180 -32 16 -29 16 -50 2z"></path>
                                <path d="M295 1018 c-120 -62 -230 -205 -264 -343 -16 -64 -16 -186 0 -250 46
                                -187 207 -348 394 -394 64 -16 186 -16 250 0 187 46 348 207 394 394 16 64 16
                                186 0 250 -34 140 -145 282 -268 345 -53 26 -62 28 -56 13 13 -28 18 -100 10
                                -139 -7 -42 -67 -112 -112 -131 -42 -17 -125 -17 -166 1 -41 17 -91 74 -107
                                121 -12 37 -10 113 5 148 10 25 -10 21 -80 -15z"></path>
                                <path d="M515 1028 c-32 -18 -44 -40 -45 -80 0 -85 97 -126 157 -65 39 38 39
                                100 0 133 -31 26 -78 31 -112 12z m53 -51 c2 -19 9 -27 23 -27 11 0 19 -7 19
                                -16 0 -12 -9 -14 -37 -12 -33 3 -38 7 -41 31 -2 16 -1 35 2 44 9 23 31 10 34
                                -20z"></path>
                                </g>
                                </svg><p>Быстрый <br/> монтаж</p>
                            
                            </div>
                        </div>

                        <div className="col-sm-3 col-xs-6 main__reg">
                            <div className="main_features_block">
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="110.000000px" height="123.000000px" viewBox="0 0 110.000000 123.000000" preserveAspectRatio="xMidYMid meet">

                                <g transform="translate(0.000000,123.000000) scale(0.100000,-0.100000)" fill="#76b82a" stroke="none">
                                <path d="M676 1068 c-3 -13 -6 -60 -6 -105 l0 -83 -133 0 c-79 0 -137 4 -143
                                10 -8 8 -14 6 -23 -4 -9 -11 -8 -17 4 -30 14 -13 42 -16 160 -16 183 0 177 -5
                                173 138 -2 67 -7 107 -14 109 -6 2 -14 -6 -18 -19z"></path>
                                <path d="M740 947 c0 -143 8 -137 -207 -137 -210 0 -203 -4 -203 128 0 51 -2
                                92 -5 92 -24 0 -101 -54 -155 -109 -69 -70 -118 -157 -140 -246 -15 -64 -15
                                -186 0 -250 45 -184 199 -341 385 -392 64 -17 206 -17 270 0 186 51 340 208
                                385 392 15 64 15 186 0 250 -34 139 -145 282 -267 344 l-63 31 0 -103z"></path>
                                <path d="M521 981 c-17 -16 -31 -33 -31 -38 0 -5 20 -10 45 -10 38 0 44 3 40
                                17 -3 10 1 23 10 30 22 18 18 30 -9 30 -13 0 -38 -13 -55 -29z"></path>
                                <path d="M440 946 c0 -31 6 -34 13 -6 3 11 1 23 -4 26 -5 3 -9 -6 -9 -20z"></path>
                                <path d="M617 963 c-3 -5 -1 -17 4 -28 7 -17 8 -17 8 8 1 27 -4 34 -12 20z"></path>
                                </g>
                                </svg><p>Гарантия <br/> 3 года</p>
                            
                            </div>
                        </div>

                        <div className="col-sm-3 col-xs-6 main__reg">
                            <div className="main_features_block">
                                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="110.000000px" height="120.000000px" viewBox="0 0 110.000000 120.000000" preserveAspectRatio="xMidYMid meet">

                                <g transform="translate(0.000000,120.000000) scale(0.100000,-0.100000)" fill="#76b82a" stroke="yellowgreen">
                                <path d="M676 1072 c-3 -5 3 -17 14 -27 11 -10 20 -22 20 -27 0 -11 -97 -10
                                -105 2 -3 5 -31 -7 -63 -27 -31 -19 -67 -42 -79 -49 -19 -12 -21 -17 -11 -33
                                9 -15 9 -23 -1 -35 -19 -22 -52 -20 -58 4 -3 11 -9 17 -14 14 -16 -10 -9 -33
                                15 -49 30 -20 72 -6 86 30 8 21 16 25 54 25 34 0 45 -4 49 -19 7 -27 48 -51
                                75 -44 13 3 29 18 38 34 9 19 22 29 36 29 17 0 19 3 10 12 -7 7 -12 37 -12 68
                                0 47 -4 60 -24 79 -13 12 -27 18 -30 13z m-12 -158 c22 -21 3 -56 -27 -52 -25
                                3 -34 32 -17 53 16 19 25 19 44 -1z"></path>
                                <path d="M772 954 c3 -66 0 -78 -16 -88 -10 -6 -31 -23 -46 -38 -41 -40 -101
                                -39 -140 2 -15 17 -33 30 -38 30 -6 0 -24 -13 -40 -30 -23 -23 -40 -30 -69
                                -30 -32 0 -45 7 -81 44 -41 42 -42 45 -42 110 l0 67 -32 -17 c-57 -29 -160
                                -144 -194 -214 -41 -85 -56 -148 -56 -240 0 -151 49 -268 157 -375 109 -109
                                222 -156 375 -156 153 0 266 47 375 156 108 107 157 224 157 375 0 147 -49
                                267 -152 371 -55 56 -131 109 -156 109 -3 0 -4 -34 -2 -76z"></path>
                                </g>
                                </svg><p>Вывоз <br/> мусора</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-lg-offset-1 col-md-5 col-md-offset-1 col-sm-8 col-sm-offset-2 col-xs-12'>
                    <div
                        className="modal show"
                        style={{ display: 'block', position: 'initial' }}
                        >
                        <Modal.Dialog>
                            <Modal.Title className='main__modal-title'><h2>Оставьте заявку</h2></Modal.Title>

                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='mb-444'>Адрес электронной почты</Form.Label>
                                    <Form.Control type="email" placeholder="Введите адрес электронной почты" />
                                    <Form.Text className="text-muted">
                                    Мы никогда не передадим ваш адрес электронной почты кому-либо еще.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className='mb-444'>Пароль</Form.Label>
                                    <Form.Control type="password" placeholder="Пароль" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Проверить меня" />
                                </Form.Group>
                                <Button className='main__btn' variant="primary" type="submit">
                                    Оставить заявку
                                </Button>
                                </Form>
                        </Modal.Dialog>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;