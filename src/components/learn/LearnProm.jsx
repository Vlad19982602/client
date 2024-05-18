import './learn.css'

import Button from 'react-bootstrap/Button';

const LearnProm = ({title}) => {
    return ( 
        <>
            <section className="learn">
                <div className='t-container'>
                    <div className='learn__titled'><strong>Можете ознакомиться с нашими услугами</strong></div>
                    <div className='learn__block'>
                        <div className='col-lg-6 col-md-6'>
                            <div className='learn__item'>
                                <div className='learn__title'>{title}</div>
                                <Button className='learn__btn' variant="success">ПОДРОБНЕЕ</Button>{' '}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default LearnProm;