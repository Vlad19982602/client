import './calculator.css'
import Button from 'react-bootstrap/Button';

function Calculator () {
    return (
        <div className='calculator'>
            <div className="container container-ex">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h3 className="calculator__title">Рассчитайте стоимость вентиляции!</h3>
                        <br/><br/>
                        <h4 className="calculator__subtitle">Просто ответьте на 5 вопросов и получите расчёт.</h4>
                        <br/><br/>
                        <Button className='calculator__btn' variant="success" type="submit">
                            Перейти к калькулятору
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator;