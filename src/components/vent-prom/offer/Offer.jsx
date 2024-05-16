import './offer.css'

import calculation from './calculation.svg'
import truck from './truck.svg'
import speed from './speed.svg'
import auto from './automatization.svg'

const Offer = () => {
    return ( 
        <>
            <section className="offer">
                <div className='t-container'>
                    <div className='col-md-12'>
                        <div className='offer__title'><strong>Создаём надёжные системы вентиляции производственных помещений, отвечающие всем нормам и требованиям</strong></div>
                        <div className='offer__question'>Что предлагаем?</div>
                    </div>
                    <div className='offer__wrapper'>
                        <div className='col-md-3'>
                            <div className='offer__img'>
                                <img src={calculation} alt='img1'/>
                            </div>
                            <div className='offer__box'>
                                <div className='offer_descr'>РАСЧЁТ И ПРОЕКТИРОВАНИЕ</div>
                            </div>
                            <div className='offer__text'>Разработаем эффективное и экономически выгодное решение со строгим учетом СП 56.13330.2011, СНиП 31-03-2010, ГОСТ Р ЕН 13779-2007, СанПиН 2.2.4.548-96.</div>
                        </div>
                                                <div className='col-md-3'>
                            <div className='offer__img'>
                                <img src={truck} alt='img1'/>
                            </div>
                            <div className='offer__box'>
                                <div className='offer_descr'>ПОСТАВКУ ОБОРУДОВАНИЯ</div>
                            </div>
                            <div className='offer__text'>Наши технические специалисты помогут подобрать оборудование нужной производительности, которое будет оптимальным в плане цены и качества.</div>
                        </div>
                                                <div className='col-md-3'>
                            <div className='offer__img'>
                                <img src={speed} alt='img1'/>
                            </div>
                            <div className='offer__box'>
                                <div className='offer_descr'>МОНТАЖ И ПУСКОНАЛАДКУ</div>
                            </div>
                            <div className='offer__text'>Качественно смонтируем систему в короткие сроки. В нашем распоряжении более 5 опытных монтажных бригад, с опытом работы на производственных объектах.</div>
                        </div>
                                                <div className='col-md-3'>
                            <div className='offer__img'>
                                <img src={auto} alt='img1'/>
                            </div>
                            <div className='offer__box'>
                                <div className='offer_descr'>АВТОМАТИЗАЦИЮ</div>
                            </div>
                            <div className='offer__text'>Автоматизируем вентиляцию, что позволит достичь стабильной, максимально эффективной работы, легкого и удобного управления системой вентиляции круглый год.</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Offer;