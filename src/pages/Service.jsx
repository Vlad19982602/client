import Calculator from "../components/main-page/calculator/Calculator";
import SMain from "../components/service/service-main/SMain";
import Primary from "../components/service/service-primary/Primary";
import SWrite from "../components/service/service-write/SWrite";


const Service = () => {
    return ( 
        <>
            <SMain/>
            <SWrite/>
            <Primary/>
            <Calculator/>
        </>
     );
}
 
export default Service;