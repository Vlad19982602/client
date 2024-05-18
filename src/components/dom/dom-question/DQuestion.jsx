import './dquestion.css'

const DQuestion = () => {
    return ( 
        <>
            <section className="dquestion">
                <div className='t-container'>
                    <div className='col-lg-12 col-md-12'>
                        <div className='dquestion__title'><strong>Зачем нужна вентиляция в бассейне частного дома?</strong></div>
                        <div className='dquestion__flex'>
                            <div className='dquestion__box'>
                                <div className='dquestion__descr'><strong>Вентиляция удалит влажный воздух<br/></strong></div>
                                <ul className='dquestion__list'><strong>Исключит:</strong>
                                    <li> образование и скопление конденсата на окнах и стенах; </li>
                                    <li> разрушение строения и порчу отделки;</li>
                                    <li>размножение грибка и плесени.</li>
                                </ul>
                            </div>
                            <div className='dquestion__box'>
                                <div className='dquestion__descr'><strong>Вентиляция создаст комфортный микроклимат для людей</strong></div>
                                <ul className='dquestion__list'><strong>Обеспечит:</strong>
                                    <li> отсутствие сквозняков;  </li>
                                    <li> комфортную температуру (по нормам СанПин на 2-3 градуса выше температуры воды); </li>
                                    <li> требуемую СанПин относительную влажность 50-60;</li>
                                    <li>отсутствие вредных запахов реагентов. </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default DQuestion;