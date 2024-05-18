import GrocFeatures from "../components/groceries/groc-features/GrocFeatures";
import GrocFooter from "../components/groceries/groc-footer/GrocFooter";
import GMain from "../components/groceries/groc-main/GMain";
import GOffer from "../components/groceries/groc-offer/GOffer";
import GrocPrimary from "../components/groceries/groc-primary/GrocPrimary";
import GrocQuestion from "../components/groceries/groc-question/GrocQuestion";
import GrocTasks from "../components/groceries/groc-tasks/GrocTasks";

import Button from 'react-bootstrap/Button';

const Groceries = () => {
    return ( 
        <>
            <GMain/>
            <GrocPrimary/>
            <GOffer/>
            <div className="g__filter">
                <div className="t-container">
                    <div className="g__block">
                        <div className="g__text">
                            Люди с удовольствием посещают рестораны и кафе. Там они проводят и деловые будни, встречаясь с партнерами, и отдыхают, получая эстетическое и гастрономическое наслаждение. Собственникам заведения важно не забывать, что решающим фактором для посетителей при выборе заведения является уют и созданный там комфорт, а не только кухня и уровень сервиса. 
                        </div>
                    </div>
                </div>
            </div>
            <GrocQuestion/>
            <div className="g__pic"></div>
            <GrocTasks/>
            <div className="g__filter-green">
                <div className="t-container">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="g__title"><strong>Узнайте, какое решение по вентиляции <br/>оптимально для Вашего заведения !</strong></div>
                        <div className="g__subtitle">Наш специалист подготовит коммерческое предложение с ориентировочной стоимостью и сроками выполнения работ.</div>
                        <Button className="g__btn" variant="outline-secondary">Узнать сейчас</Button>{' '}
                    </div>
                </div>
            </div>
            <GrocFeatures/>
            <GrocFooter/>
        </>
     );
}
 
export default Groceries;