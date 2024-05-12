import Carrier from "../components/about-us/carrier/Carrier";
import Comand from "../components/about-us/comand/Comand";
import Company from "../components/about-us/company-us/Company";
import Numbers from "../components/about-us/in-numbers/Numbers";
import Licensy from "../components/about-us/licensy/Licensy";

const WeAll = () => {
    return (
        <>
            <Company/>
            <Numbers/>
            <Comand/>
            <Licensy/>
            <Carrier/>
        </>
      );
}
 
export default WeAll;