import './style.css'

import basta from "./basta.jpg";
import mariko from "./mariko.png";
import marikoChel from'./marikoChel.jpg';

const GrocPrimary = () => {
    return ( 
        <>
            <section className='groc-primary'>
                <div className='t-container'>
                    <div className='col-md-12'>
                        <div className='groc-primary__title'><strong>Примеры выполненных объектов</strong></div>
                    </div>
                    <div className='groc-primary__wrapper'>
                        <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                            <a
                                className="works__bigimg"
                                href="!#"
                                >
                                <img
                                    className="preview"
                                    src={basta}
                                    alt="work"
                                />
                            </a>
                            <div className="works__textwrapper">
                                <div className="works__uptitle t-uptitle">
                                    <span className="works__tag">РЕСТОРАН</span>
                                </div>
                                <div className="works__title t-name">
                                    Ресторан "FRANK BY БАСТА" г. Москва. 
                                </div>
                                <div className="works__descr t-descr">
                                    Поставка, монтаж систем вентиляции и кондиционирования.
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                            <a
                                className="works__bigimg"
                                href="!#"
                                >
                                <img
                                    className="preview"
                                    src={mariko}
                                    alt="work"
                                />
                            </a>
                            <div className="works__textwrapper">
                                <div className="works__uptitle t-uptitle">
                                    <span className="works__tag">РЕСТОРАН</span>
                                </div>
                                <div className="works__title t-name">
                                    "Хачапури тётушки Марико" г. Санкт-Петербург
                                </div>
                                <div className="works__descr t-descr">
                                    Поставка, монтаж систем вентиляции и кондиционирования.
                                </div>
                            </div>
                        </div>
                                                <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                            <a
                                className="works__bigimg"
                                href="!#"
                                >
                                <img
                                    className="preview"
                                    src={marikoChel}
                                    alt="work"
                                />
                            </a>
                            <div className="works__textwrapper">
                                <div className="works__uptitle t-uptitle">
                                    <span className="works__tag">РЕСТОРАН</span>
                                </div>
                                <div className="works__title t-name">
                                    "Хачапури тётушки Марико" г. Челябинск
                                </div>
                                <div className="works__descr t-descr">
                                    Поставка, монтаж систем вентиляции
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default GrocPrimary;