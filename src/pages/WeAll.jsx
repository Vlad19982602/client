import Carrier from "../components/about-us/carrier/Carrier";
import Comand from "../components/about-us/comand/Comand";
import Company from "../components/about-us/company-us/Company";
import Numbers from "../components/about-us/in-numbers/Numbers";
import Licensy from "../components/about-us/licensy/Licensy";
import Calculator from '../components/main-page/calculator/Calculator'

const WeAll = () => {
    return (
        <>
            <Company/>
            <Numbers/>
            <Comand/>
            <Licensy/>
            <Carrier/>
            <Calculator/>
        </>
      );
}
 
export default WeAll;