import './features.css'

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const GrocFeatures = () => {
    return ( 
        <>
            <section className='features'>
                <div className='t-container'>
                    <div className='col-lg-12 col-md-12'>
                        <div className='features__wrapper'>
                            <div className='features__title'><strong>Особенности вентиляции, когда заведение <br/>находится в жилом доме</strong></div>
                            <div className='features__subtitle'>Ничего сложного, просто важно учесть нюансы.</div>
                            <div className='features__text'>
                                По нормам вытяжные воздуховоды монтируются выше кровли. Это делается для того, чтобы жильцы не испытывали дискомфорт от посторонних запахов. <br/>
                                Так же при подборе оборудования необходимо отдать предпочтение малошумным установкам с пониженным уровнем вибрации. <br/>
                            </div>
                        </div>
                        <div className='features__block'>
                            <strong>Важно помнить, что для эффективной и безотказной работы систем вентиляции и кондиционирования нужно систематически обслуживать оборудование!</strong>
                        </div>
                        <div className='features__wrapper'>
                            <div className='features__title'><strong>Предлагаем типовые технические решения по климатизации кафе, бара, ресторана, столовой</strong></div>
                        </div>
                    </div>
                    <div className='features__flex'>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                            <Card style={{ width: '30rem' }}>
                                <Card.Body>
                                    <Card.Title><strong>Для небольших заведений<br/><br/></strong></Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted"><strong>1. Приточно-вытяжная система вентиляции (наборная или моноблочная).</strong></Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted"><strong>2. Сплит-системы.</strong></Card.Subtitle>
                                    <Card.Text>
                                        <ul className='features__list'>
                                            <li>
                                                Приточная вентиляция служит для подачи свежего воздуха. Вытяжная - для
                                                удаления загрязнённого.
                                            </li>
                                            <li>
                                                Рестораны и кафе, рассчитанные менее чем на 50 мест, можно оборудовать
                                                единой для гостевого зала и кухни приточной вентиляцией.
                                            </li>
                                            <li>
                                                Вытяжная вентиляция устанавливается обязательно отдельно для кухни и
                                                гостевого зала.{" "}
                                            </li>
                                            <li>
                                                Кондиционирование с помощью сплит-систем будет поддерживать заданную
                                                температуру воздуха. Особо актуально в летнее время года
                                            </li>
                                        </ul>
                                    </Card.Text>
                                    <Button className="g__btn" variant="outline-secondary">ПОДРОБНЕЕ</Button>{' '}
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                            <Card style={{ width: '30rem' }}>
                                <Card.Body>
                                    <Card.Title><strong>Для заведений площадью более 100-120 м2</strong><br/><br/></Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted"><strong>1. Канальные или кассетные кондиционеры с притоком.</strong></Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted"><strong>2. Вытяжная система вентиляции.</strong></Card.Subtitle>
                                    <Card.Text>
                                        <ul className='features__list'><strong>Особенности:</strong>
                                            <li>
                                                Приточная вентиляция служит для подачи свежего воздуха. Вытяжная - для
                                                удаления загрязнённого.
                                            </li>
                                            <li>
                                                Рестораны и кафе, рассчитанные менее чем на 50 мест, можно оборудовать
                                                единой для гостевого зала и кухни приточной вентиляцией.
                                            </li>
                                            <li>
                                                Вытяжная вентиляция устанавливается обязательно отдельно для кухни и
                                                гостевого зала.{" "}
                                            </li>
                                            <li>
                                                Кондиционирование с помощью сплит-систем будет поддерживать заданную
                                                температуру воздуха. Особо актуально в летнее время года
                                            </li>
                                        </ul>
                                    </Card.Text>
                                    <Button className="g__btn" variant="outline-secondary">ПОДРОБНЕЕ</Button>{' '}
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className='col-lg-12 col-md-12'>
                        <div className='features__wrapper'>
                            <div className='features__text'>
                                Выбор решения индивидуален для каждого объекта, зависит от многих параметров (кол-во сотрудников, расчетное кол-во гостей, план кафе, данные тепловых поступлений, хар-ки орудования кухни и др.). Базовые документы, которые мы обязательно учитываем при расчетах: СНиП 31-06-2009 «Общественные здания и сооружения», СНиП 41-01-2003 «Отопление, вентиляция и кондиционирование».
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default GrocFeatures;