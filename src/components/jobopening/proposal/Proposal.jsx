import './proposal.css'

import couple from './couple.svg'
import check from './check.jpg'
import doc from './doc.svg'

const Proposal = () => {
    return ( 
        <>
            <section className="proposal">
                <div className='t-container'>
                    <div className='row'>
                        <div className='proposal__wrapper'>
                            <div className='col-md-12'>
                                <div className='proposal__title'>Что предлагаем?</div>
                            </div>
                            <div className='proposal__items'>

                            </div>
                            <div className='col-md-6'>
                                <div className='proposal__block'>
                                    <div className='proposal__descr'><strong>Дружественную атмосферу в команде</strong></div>
                                    <div className='proposal__text'>Мы - молодой, дружный, сплоченный коллектив.</div>
                                    <img className='proposal__img' src={couple} alt="icon"/>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='proposal__block'>
                                    <div className='proposal__descr'><strong><strong>Стабильный доход от 45 000 руб.</strong></strong></div>
                                    <div className='proposal__text'>Обсуждается на собеседовании. Своевременная выплата заработной платы два раза в месяц.</div>
                                    <img className='proposal__img' src={check} alt="icon"/>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='proposal__block'>
                                    <div className='proposal__descr'><strong>Заботу о труде</strong></div>
                                    <div className='proposal__text'>Официальное трудоустройство согласно ТК РФ. Пятидневная рабочая неделя.</div>
                                    <img className='proposal__img' src={doc} alt="icon"/>
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div className='proposal__box'>
                                    <p><strong>Продуктивные сотрудники, достигающие плановых результатов, всегда поддерживаются руководством и продвигаются на более ответственные и высокие должности.</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Proposal;