import './dmain.css'

import Button from 'react-bootstrap/Button';

const DMain = () => {
    return ( 
        <>
            <section className="dmain">
                <div className='t-container'>
                    <div className='col-lg-9 col-md-9'>
                        <div className='dmain__title'>
                            Надёжные, современные, бесшумные системы вентиляции для крытого бассейна частного 
                            <br/>
                            дома (коттеджа)!
                            <br/>
                        </div>
                        <div className='dmain__subtitle'>
                            <br/>
                            Эффективное осушение.
                            <br/>
                            Экономия энергии.
                            <br/>
                        </div>
                        <Button className='dmain__btn' variant="success">ПОЛУЧИТЬ БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ</Button>{' '}
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default DMain;