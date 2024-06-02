import './news.css'

import zont from "./1.jpg"
import meeting from "./2.jpg"

import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const News = () => {
    useEffect(() => {
        AOS.init({
        duration: 1000, // продолжительность анимации в миллисекундах
        });
    }, []);

    return ( 
        <>
            <section className='news'>
                <div className='t-container'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='news__card' data-aos="fade-up">
                                <img src={zont} alt='' className='news__card-img-top'/>
                                <div className='news__card-body'>
                                    <h5 className='news__card-title'>Thursday, May 17</h5>
                                    <p className='news__card-sub'>Как обеспечить вентиляцию в бассейне частного дома</p>
                                    <p className='news__card-subtext'>Чем грозит повышенная влажность Вашему бассейну и как это можно предотвратить - читайте в статье.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='news__card' data-aos="fade-up">
                                <img src={meeting} alt='' className='news__card-img-top'/>
                                <div className='news__card-body'>
                                    <h5 className='news__card-title'>Monday, May 7</h5>
                                    <p className='news__card-sub'>Кондиционер не альтернатива вентиляции</p>
                                    <p className='news__card-subtext'>Многие думают, что кондиционер в доме поставил - значит летом будет прохладно и комфортно. Но это далеко не так. Какие функции выполняет вентиляция и кондиционирование в коттедже и каковы их задачи, читайте в статье.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default News;