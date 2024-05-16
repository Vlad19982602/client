import Calculator from "../components/main-page/calculator/Calculator";
import CalculatorMore from "../components/main-page/calculator/CalculatorMore";
import Customers from "../components/main-page/customers/Customers";
import Decoration from "../components/main-page/decoration/Decoration";
import Works from "../components/main-page/works/Works";
import Img from "../components/vent-prom/img/Img";
import Offer from "../components/vent-prom/offer/Offer";
import Question from "../components/vent-prom/questions/Question";
import VentMain from "../components/vent-prom/ventmain/VentMain";

import "../styles/common.css"

const VentProm = () => {
    return ( 
        <>
            <VentMain/>
            <Decoration title={"ПРИМЕРЫ ВЫПОЛНЕННЫХ ОБЪЕКТОВ"} />
            <Works/>
            <Offer/>
            <Calculator/>
            <Decoration title={"НАШИ ЗАКАЗЧИКИ"} />
            <Customers/>
            <Img/>
            <CalculatorMore/>
            <div className="vent__wrapper">
                <div className="vent__icon" style={{ color: "#f3f2f1" }}>
                “
                </div>
                <div className="vent__text">Вентиляция - это наша работа. Доверьте создание климатических систем нам и забудьте о головной боли! Сделаем вентиляцию на предприятии такой, какой она и должна быть. </div>
                <div className="vent__author"><strong>— Виктор Щапин,</strong> директор вентиляционной компании "АирМастер" </div>
            </div>
            <div className="vent__filter">
                <div className="vent__filter-flex">
                    <div className="col-md-10">
                        <div className="vent__filter-block">
                            <div className="sum">&gt;500</div>
                            <div className="sum__text">выполненных объектов</div>
                        </div>
                    </div>
                </div>
                <div className="vent__filter-flex">
                    <div className="col-md-10">
                        <div className="vent__filter-block">
                            <div className="sum">10</div>
                            <div className="sum__text">лет безупречной работы</div>
                        </div>
                    </div>
                </div>
                <div className="vent__filter-flex">
                    <div className="col-md-10">
                        <div className="vent__filter-block">
                            <div className="sum">11 лет</div>
                            <div className="sum__text pdl">опыт работы ведущих сотрудников именно в сфере вентиляции</div>
                        </div>
                    </div>
                </div>
                <div className="vent__filter-flex">
                    <div className="col-md-10">
                        <div className="vent__filter-block">
                            <div className="sum">90%</div>
                            <div className="sum__text">клиентов гарантированно<br/>рекомендуют нас</div>
                        </div>
                    </div>
                </div>
            </div>
            <Question title={"БУДЕМ РАДЫ ОТВЕТИТЬ НА ВАШИ ВОПРОСЫ!"}/>
        </>
     );
}
 
export default VentProm;