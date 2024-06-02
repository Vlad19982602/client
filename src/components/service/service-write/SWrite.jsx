import './swrite.css'

import vers from "./vers.svg"
import worker from "./worker.svg"
import trker from "./trker.svg"
import tools from "./tools.svg"

import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const SWrite = () => {
    useEffect(() => {
        AOS.init({
        duration: 1000, // продолжительность анимации в миллисекундах
        });
    }, []);
    return ( 
        <>
            <section className="swrite">
                <div className='t-container'>
                    <div className='col-md-12'>
                        <div className='swrite__item' data-aos="fade-up">
                            <div className='swrite__img'>
                                <img src={vers} alt='swrite-img' />
                            </div>
                            <div className='swrite__wrapper'>
                                <div className='swrite__title' data-aos="fade-up"><strong> Проектирование и расчет</strong></div>
                                <div className='swrite__subtitle'data-aos="fade-up">Многолетний опыт работы дает возможность браться за проекты любой сложности.</div>                                
                            </div>
                        </div>
                        <div className='swrite__item' data-aos="fade-up">
                            <div className='swrite__img'>
                                <img src={worker} alt='swrite-img' />
                            </div>
                            <div className='swrite__wrapper' data-aos="fade-up">
                                <div className='swrite__title' data-aos="fade-up"><strong> Монтаж</strong></div>
                                <div className='swrite__subtitle'data-aos="fade-up">Постоянный штат монтажников позволяет нам выстраивать удобный для Вас график работ, при необходимости готовы работать в выходные и праздничные дни.</div>                                
                            </div>
                        </div>
                        <div className='swrite__item' data-aos="fade-up">
                            <div className='swrite__img swrite__three'>
                                <img src={trker} alt='swrite-img' />
                            </div>
                            <div className='swrite__wrapper' data-aos="fade-up">
                                <div className='swrite__title' data-aos="fade-up"><strong>Поставка оборудования</strong></div>
                                <div className='swrite__subtitle'data-aos="fade-up">Благодаря проверенным производителям оборудования и продуманным техническим решениям, Вы можете быть уверены в надежности и гарантированной бесперебойной работе системы при любых погодных условиях.</div>                                
                            </div>
                        </div>
                        <div className='swrite__item' data-aos="fade-up">
                            <div className='swrite__img'>
                                <img src={tools} alt='swrite-img' />
                            </div>
                            <div className='swrite__wrapper' data-aos="fade-up">
                                <div className='swrite__title' data-aos="fade-up"><strong>Ремонт и техническое обслуживание</strong></div>
                                <div className='swrite__subtitle'data-aos="fade-up">Многолетний опыт работы дает возможность браться за проекты любой сложности.</div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default SWrite;