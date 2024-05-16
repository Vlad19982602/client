import './ventmain.css'

import Button from 'react-bootstrap/Button';

const VentMain = () => {
    return ( 
        <>
            <main className="ventmain">
                <div className='t-container'>
                    <div className='col-md-12'>
                        <div className='ventmain__title'><strong>Системы вентиляции производственных помещений в Челябинске и области</strong></div>
                        <ul className='ventmain__list'>
                            <li className='ventmain__item'>Гарантия по договору до 3-х лет на все виды работ.</li>
                            <li className='ventmain__item'>Успешные объекты на предприятиях химической, металлургической, обрабатывающей, сельскохозяйственной, пищевой промышленности.</li>
                            <li className='ventmain__item'>Сотрудники с опытом работы более 10 лет в сфере промышленной вентиляции.</li>
                            <li className='ventmain__item'>Работаем быстро, качественно, точно в срок.</li>
                        </ul>
                        <Button className='ventmain__btn' variant="success">ОТПРАВИТЬ ЗАЯВКУ</Button>{' '}
                    </div>
                </div>
            </main>
        </>
     );
}
 
export default VentMain;