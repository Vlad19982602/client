import './numbers.css'

import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Numbers = () => {
    useEffect(() => {
        AOS.init({
        duration: 1000, // продолжительность анимации в миллисекундах
        });
    }, []);

    return (
        <>
            <section className='numbers'>
                <div className='t-container'>
                    <div className='col-lg-5 col-md-6 col-sm-9 col-xs-12'>
                        <div className='title' data-aos="fade-up">
                            <strong>О НАС В ЦИФРАХ</strong>
                            <div className="tn-atom"></div>
                        </div>
                        <div className='subtitle' data-aos="fade-up">
                            Узкая специализация позволяет достигать высокий уровень профессионального мастерства в этом деле.
                        </div>
                    </div>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 numbers__wrapper'>
                        <div className='numbers__padding'></div>
                        <div className='col-lg-3 col-md-3 col-sm-3 col-xs-3'>
                            <div className='numbers__item' data-aos="fade-up">
                                <div className='numbers__item-title' data-aos="fade-up">
                                    <strong>Более 500</strong>
                                    <div className="green"></div>
                                </div>
                                <div className='numbers__item-subtitle' data-aos="fade-up">
                                    Выполненных объектов
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-3 col-xs-3'>
                            <div className='numbers__item' data-aos="fade-up">
                                <div className='numbers__item-title' data-aos="fade-up">
                                    <strong>10 лет</strong>
                                    <div className="green"></div>
                                </div>
                                <div className='numbers__item-subtitle' data-aos="fade-up">
                                    безупречной работы
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-3 col-xs-3'>
                            <div className='numbers__item' data-aos="fade-up">
                                <div className='numbers__item-title' data-aos="fade-up">
                                    <strong>от 10 лет</strong>
                                    <div className="green"></div>
                                </div>
                                <div className='numbers__item-subtitle' data-aos="fade-up">
                                    опыт работы ведущих сотрудников <br/> в сфере вентиляции
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-3 col-xs-3'>
                            <div className='numbers__item' data-aos="fade-up">
                                <div className='numbers__item-title' data-aos="fade-up">
                                    <strong>90%</strong>
                                    <div className="green"></div>
                                </div>
                                <div className='numbers__item-subtitle' data-aos="fade-up">
                                    клиентов гарантированно <br/> рекомендуют нас
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
      );
}
 
export default Numbers;