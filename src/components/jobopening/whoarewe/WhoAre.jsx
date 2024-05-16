import './who.css'

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const WhoAre = () => {
    return ( 
        <>
            <section className="who">
                <div className='t-container'>
                    <div className='col-md-12'>
                        <div className='who__title'>Кто мы такие?</div>
                        <ul className='who_list'>
                            <li className='who__item'>"АИРМАСТЕР" - компания по монтажу систем вентиляции и кондиционирования на объектах различного назначения. В компетенцию компании входит: проектирование, комплектация и пусконаладочные работы, техническое обслуживание инженерных систем. </li>
                            <li className='who__item'>Работаем с 2013 года. </li>
                            <li className='who__item'>В команде "АИРМАСТЕР" на сегодняшний день трудится более 20 специалистов своего дела. </li>
                            <li className='who__item'>В 2022 году реализовали 201 объект. Это рестораны, офисы, производство. "Frank by Баста" в г. Челябинске, Уфе, Екатеринбурге, Санкт-Петербурге, Сочи; ресторан грузинской кухни "Хачапури тетушки Марико" в г. Челябинск; АО "МАКФА"; ПАО "НИИИТ", ОГАУ "МФЦ Челябинской области"; ООО "Кольцовский комбикормовый завод" и другие.</li>
                            <li className='who__item'>По рекомендациям к нам приходит больше 50% клиентов.</li>
                        </ul>
                        <div className='who__text'>ОТПРАВЛЯЙТЕ РЕЗЮМЕ НАМ НА ПОЧТУ:</div>
                        <div className='who__mail'>
                            <a href="mailto:  " className='who__mail-link'>
                                <span className='who__mail-text'>direktor@airmaster74.ru</span>
                            </a>
                        </div>
                        <Card className='who__card'>
                            <Card.Body>
                                <Card.Title>КОНТАКТЫ ДЛЯ СВЯЗИ ПО ВАКАНСИИ</Card.Title>
                                <Card.Subtitle className="who__card-mail mb-2 text-muted">direktor@airmaster74.ru</Card.Subtitle>
                                <Card.Text className='who__card-text'>
                                г. Челябинск, ул. Стартовая, д. 34, оф. 101
                                </Card.Text>
                                <Button className='main__btn' variant="success" type="submit">
                                    Набрать менеджеру
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default WhoAre;