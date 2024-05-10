import './numbers.css'

const Numbers = () => {
    return (
        <>
            <section className='numbers'>
                <div className='t-container'>
                    <div className='col-lg-5 col-md-6 col-sm-9 col-xs-12'>
                        <div className='title'>
                            <strong>О НАС В ЦИФРАХ</strong>
                            <div className="tn-atom"></div>
                        </div>
                        <div className='subtitle'>
                            Узкая специализация позволяет достигать высокий уровень профессионального мастерства в этом деле.
                        </div>
                    </div>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 numbers__wrapper'>
                        <div className='numbers__padding'></div>
                        <div className='col-lg-3 col-md-3 col-sm-3 col-xs-3'>
                            <div className='numbers__item'>
                                <div className='numbers__item-title'>
                                    <strong>Более 500</strong>
                                    <div className="green"></div>
                                </div>
                                <div className='numbers__item-subtitle'>
                                    Выполненных объектов
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-3 col-xs-3'>
                            <div className='numbers__item'>
                                <div className='numbers__item-title'>
                                    <strong>10 лет</strong>
                                    <div className="green"></div>
                                </div>
                                <div className='numbers__item-subtitle'>
                                    безупречной работы
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-3 col-xs-3'>
                            <div className='numbers__item'>
                                <div className='numbers__item-title'>
                                    <strong>от 10 лет</strong>
                                    <div className="green"></div>
                                </div>
                                <div className='numbers__item-subtitle'>
                                    опыт работы ведущих сотрудников <br/> в сфере вентиляции
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-3 col-xs-3'>
                            <div className='numbers__item'>
                                <div className='numbers__item-title'>
                                    <strong>90%</strong>
                                    <div className="green"></div>
                                </div>
                                <div className='numbers__item-subtitle'>
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