import DJob from "../components/dom/dom-job/DJob";
import DMain from "../components/dom/dom-main/DMain";
import DPrimary from "../components/dom/dom-primary/DPrimary";
import DQuestion from "../components/dom/dom-question/DQuestion";
import Calculator from "../components/main-page/calculator/Calculator";
import Question from "../components/vent-prom/questions/Question";


const Dom = () => {
    return ( 
        <>
            <DMain/>
            <DPrimary/>
            <Calculator/>
            <DJob/>
            <DQuestion/>
            <Question title={'Остались вопросы?'} />
        </>
     );
}
 
export default Dom;