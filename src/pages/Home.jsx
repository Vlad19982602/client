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

import Scroll from "../components/scroll";

const Home = () => {
    return (
        <>
            <Scroll />
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
            <Decoration title={"ГЕОГРАФИЯ ОБЪЕКТОВ"} />
            <Geographics />
            <Decoration title={"НАШИ ЗАКАЗЧИКИ"} />
            <Customers />
            <Decoration title={"КАК НАС НАЙТИ"} />
            <Contacts />
            <Calculator />
        </>
      );
}
 
export default Home;