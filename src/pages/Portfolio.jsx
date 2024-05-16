import Calculator from "../components/main-page/calculator/Calculator";
import Customers from "../components/main-page/customers/Customers";
import Decoration from "../components/main-page/decoration/Decoration";
import Works from "../components/main-page/works/Works";
import PMain from "../components/portfolio/portfoliomain/PMain";
import PService from "../components/portfolio/serviceprim/PService";
import Question from "../components/vent-prom/questions/Question";


const Portfolio = () => {
    return ( 
        <>
            <PMain/>
            <Decoration title={"ПРИМЕРЫ ВЫПОЛНЕННЫХ ОБЪЕКТОВ"} />
            <Works/>
            <PService/>
            <Calculator/>
            <Decoration title={"НАШИ ЗАКАЗЧИКИ"} />
            <Customers/>
            <Question title={"БУДЕМ РАДЫ ОТВЕТИТЬ НА ВАШИ ВОПРОСЫ"}/>
        </>
     );
}
 
export default Portfolio;