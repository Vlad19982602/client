import Main from "../components/main-page/main/Main";
import Calculator from "../components/main-page/calculator/Calculator";
import Slider from "../components/main-page/slider/Slider";
import SliderContent from "../components/main-page/slider/SliderContent";
import Works from "../components/main-page/works/Works";
import Services from "../components/main-page/services/Services";
import ServicesMore from "../components/main-page/services/ServicesMore";
import Geographics from "../components/main-page/geographics/Geographics";
import Customers from "../components/main-page/customers/Customers";
import Contacts from "../components/main-page/contacts/Contacts";


import Decoration from "../components/main-page/decoration/Decoration";
import CalculatorMore from "../components/main-page/calculator/CalculatorMore";

const Home = () => {
    return (
        <>
            <Main />
            <Calculator />
            <Decoration title={"РАБОТАЕМ С ОБЪЕКТАМИ ЛЮБОЙ СЛОЖНОСТИ"} />
            <Slider />
            <SliderContent />
            <Decoration title={"ПРИМЕРЫ ВЫПОЛНЕННЫХ ОБЪЕКТОВ"} />
            <Works />
            <Decoration title={"ВИДЫ УСЛУГ"} />
            <Services />
            <ServicesMore />
            <Decoration title={"КАК НАС НАЙТИ"} />
            <Contacts />
            <CalculatorMore/>
            <Decoration title={"ГЕОГРАФИЯ ОБЪЕКТОВ"} />
            <Geographics />
            <Decoration title={"НАШИ ЗАКАЗЧИКИ"} />
            <Customers />
        </>
      );
}
 
export default Home;