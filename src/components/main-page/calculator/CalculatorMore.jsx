import './calculator.css'
import Button from 'react-bootstrap/Button';

const CalculatorMore = () => {
    return ( 
        <>  
            <div className='calculator'>
                <div className="container container-ex">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <h3 className="calculator__title">Рассчитайте стоимость вентиляции!</h3>
                            <div className="calculator__block">
                                <div className='calculator__descr'>Оборудуем вентиляцией отдельный цех, склад или целый завод со сложной инфраструктурой любой отрасли:</div>
                                <div className="calculator__text">
                                    - химической и нефтехимической; <br/>
                                    - деревообрабатывающей и целлюлозно-бумажной; <br/>
                                    - мукомольно-крупяной и комбикормовой; <br/>
                                    - машиностроительной и металлообрабатывающей; <br/>
                                    - пищевой и легкой; <br/>
                                    - др. промышленного производства. <br/>
                                </div>
                                <Button className='calculator__btn-2 item3' variant="success" type="submit">
                                    Перейти к калькулятору
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default CalculatorMore;