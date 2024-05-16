import './style.css'

import plaining from './planing.svg';
import furniture from './furniture.svg';
import tool from './tool.svg';

const GOffer = () => {
    return ( 
        <>
            <section className="goffer">
                <div className='t-container'>
                    <div className='col-md-12'>
                        <div className='goffer__title'><strong>Создадим долговечную и удобную вентиляцию для предприятия общественного питания</strong></div>
                        <div className='goffer__question'>Что предлагаем?</div>
                    </div>
                    <div className='goffer__wrapper'>
                        <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                            <div className='goffer__item'>
                                <img src={plaining} alt='placeholder' />
                                <div className='goffer__text'>Разработаем эффективное и экономически выгодное решение. </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                            <div className='goffer__item'>
                                <img src={furniture} alt='placeholder' />
                                <div className='goffer__text'>Подберем такую систему, чтобы она гармонично вписывалась в дизайн интерьера.  </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                            <div className='goffer__item'>
                                <img src={tool} alt='placeholder' />
                                <div className='goffer__text'>Оперативно и качественно смонтируем вентиляционную систему.  </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default GOffer;