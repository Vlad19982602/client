import './learn.css'

import Button from 'react-bootstrap/Button';

const LearnJob = () => {
    return ( 
        <>
            <section className="learn">
                <div className='t-container'>
                    <div className='learn__titled'><strong>Можете ознакомиться с нашими услугами</strong></div>
                    <div className='learn__wrapper'>
                        <div className='col-lg-6 col-md-6'>
                            <div className='learn__item'>
                                <div className='learn__title'>Вентиляция в коттедже</div>
                                <Button className='learn__btn' variant="success">ПОДРОБНЕЕ</Button>{' '}
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6'>
                            <div className='learn__item'>
                                <div className='learn__title'>Вентиляция в бассейне частного дома</div>
                                <Button className='learn__btn' variant="success">ПОДРОБНЕЕ</Button>{' '}
                            </div>
                        </div>
                    </div>
                    <div className='learn__wrapper'>
                        <div className='col-lg-6 col-md-6'>
                            <div className='learn__item'>
                                <div className='learn__title'>Вентиляция производственных помещений</div>
                                <Button className='learn__btn' variant="success">ПОДРОБНЕЕ</Button>{' '}
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6'>
                            <div className='learn__item'>
                                <div className='learn__title'>Вентиляция в квартире</div>
                                <Button className='learn__btn' variant="success">ПОДРОБНЕЕ</Button>{' '}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default LearnJob;