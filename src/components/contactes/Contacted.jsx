import './contactes.css'

import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contacted = () => {
    useEffect(() => {
        AOS.init({
        duration: 1000, // продолжительность анимации в миллисекундах
        });
    }, []);
    return ( 
        <>
            <main className="contact-ex">
                <div className="t-container" data-aos="fade-up">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="contact-ex__wrapper">
                                <strong>КОНТАКТЫ</strong>
                                <div className="main-ex__text">
                                    Свяжитесь с нами любым удобным способом.
                                </div>
                            </div>
                        </div>
                        <div className='contact-ex__item'>
                            <div className='contact-ex__text'>
                                <strong></strong>
                                <strong>Телефон:</strong>
                                <br/>
                                 +7 (922) 630-21-03
                                 <br/><br/>
                                 <strong>E-mail:</strong>
                                 <br/>
                                 vent@airmaster74.ru
                                 <br/><br/>
                                 <strong>Адрес:</strong>
                                 <br/>
                                 г. Челябинск, ул. Стартовая, д. 34, оф. 101
                                 <br/><br/>
                                 <strong>Реквизиты:</strong>
                                 <br/>
                                 ИНН 7448156910
                                 <br/>
                                 ОГРН 1137448003384 
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <div className='contact-ex__idrame'>
                <iframe
                    title='Contacts'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10835.376411756039!2d61.352529624241654!3d55.18576596483909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c59327f26c8c67%3A0xfab74bf39558460d!2zItCQ0LjRgNCc0LDRgdGC0LXRgCIgLSDQstC10L3RgtC40LvRj9GG0LjQvtC90L3QsNGPINC60L7QvNC_0LDQvdC40Y8!5e0!3m2!1sru!2sde!4v1715496878120!5m2!1sru!2sde"
                    style={{
                        width: "100%",
                        position: "relative",
                        height: 700,
                        top: 0,
                        left: 0,
                        border: "none",
                        opacity: 1
                    }}
                />
            </div>
        </>
     );
}
 
export default Contacted