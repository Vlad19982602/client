import './swrite.css'

import vers from "./vers.svg"
import worker from "./worker.svg"
import trker from "./trker.svg"
import tools from "./tools.svg"

const SWrite = () => {
    return ( 
        <>
            <section className="swrite">
                <div className='t-container'>
                    <div className='col-md-12'>
                        <div className='swrite__item'>
                            <div className='swrite__img'>
                                <img src={vers} alt='swrite-img' />
                            </div>
                            <div className='swrite__wrapper'>
                                <div className='swrite__title'><strong> Проектирование и расчет</strong></div>
                                <div className='swrite__subtitle'>Многолетний опыт работы дает возможность браться за проекты любой сложности.</div>                                
                            </div>
                        </div>
                        <div className='swrite__item'>
                            <div className='swrite__img'>
                                <img src={worker} alt='swrite-img' />
                            </div>
                            <div className='swrite__wrapper'>
                                <div className='swrite__title'><strong> Монтаж</strong></div>
                                <div className='swrite__subtitle'>Постоянный штат монтажников позволяет нам выстраивать удобный для Вас график работ, при необходимости готовы работать в выходные и праздничные дни.</div>                                
                            </div>
                        </div>
                        <div className='swrite__item'>
                            <div className='swrite__img swrite__three'>
                                <img src={trker} alt='swrite-img' />
                            </div>
                            <div className='swrite__wrapper'>
                                <div className='swrite__title'><strong>Поставка оборудования</strong></div>
                                <div className='swrite__subtitle'>Благодаря проверенным производителям оборудования и продуманным техническим решениям, Вы можете быть уверены в надежности и гарантированной бесперебойной работе системы при любых погодных условиях.</div>                                
                            </div>
                        </div>
                        <div className='swrite__item'>
                            <div className='swrite__img'>
                                <img src={tools} alt='swrite-img' />
                            </div>
                            <div className='swrite__wrapper'>
                                <div className='swrite__title'><strong>Ремонт и техническое обслуживание</strong></div>
                                <div className='swrite__subtitle'>Многолетний опыт работы дает возможность браться за проекты любой сложности.</div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default SWrite;