import './comand.css'

import Dir from "../../../img/comand/Dir.png"
import Prorab from "../../../img/comand/Prorab.png"
import Avtomatika from "../../../img/comand/Avtomatika.png"
import Helper from "../../../img/comand/Helper.png"
import MainHelper from "../../../img/comand/MainHelper.png"
import Manager from "../../../img/comand/Manager.png"
import Engineer from "../../../img/comand/Engineer-one.png"
import EngineerTwo from "../../../img/comand/Engineer-two.png"
import EngineerVent from "../../../img/comand/EngineerVent.png"
import pto from "../../../img/comand/pto.png"
import Buhgalter from "../../../img/comand/Buhgalter.png"


const Comand = () => {
    return (
        <>
            <section className='comand'>
                <div className='t-container'>
                    <div className='col-lg-5 col-md-6 col-sm-9 col-xs-12'>
                        <div className='title title-wh'>
                            <strong>ПОЗНАКОМЬТЕСЬ С НАШЕЙ КОМАНДОЙ</strong>
                            <div className="tn-atom"></div>
                        </div>
                        <div className='subtitle subtitle-wh'>
                            Все работают сообща над проектами. <br/>
                            Мы собрали дружную команду из профессионалов своего дела.
                        </div>
                    </div>
                    <div className='comand__lines'>
                        <div className='col-lg-3 col-md-3 col-sm-3 col-xs-3'>
                            <div className='row'>
                                <div className='comand__wrapper'>
                                    <div className='comand__img'>
                                        <img src={Dir} alt="logo"/>
                                    </div>
                                    <div className='comand__name'>
                                        <strong>Виктор</strong>
                                    </div>
                                    <div className='comand__position'>
                                        <strong>Руководитель</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                            <div className='row'>
                                <div className='comand__wrapper'>
                                    <div className='comand__img'>
                                        <img src={Prorab} alt="logo"/>
                                    </div>
                                    <div className='comand__name'>
                                        <strong>Алексей</strong>
                                    </div>
                                    <div className='comand__position'>
                                        <strong>Прораб</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                            <div className='row'>
                                <div className='comand__wrapper'>
                                    <div className='comand__img'>
                                        <img src={Avtomatika} alt="logo"/>
                                    </div>
                                    <div className='comand__name'>
                                        <strong>Евгений</strong>
                                    </div>
                                    <div className='comand__position'>
                                        <strong>Специалист по автоматике</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                            <div className='row'>
                                <div className='comand__wrapper'>
                                    <div className='comand__img'>
                                        <img src={Helper} alt="logo"/>
                                    </div>
                                    <div className='comand__name'>
                                        <strong>Павел</strong>
                                    </div>
                                    <div className='comand__position'>
                                        <strong>Специалист по снабжению</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='comand__lines'>
                        <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                            <div className='row'>
                                <div className='comand__wrapper'>
                                    <div className='comand__img'>
                                        <img src={MainHelper} alt="logo"/>
                                    </div>
                                    <div className='comand__name'>
                                        <strong>Людмила</strong>
                                    </div>
                                    <div className='comand__position'>
                                        <strong>Помощник руководителя</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                            <div className='row'>
                                <div className='comand__wrapper'>
                                    <div className='comand__img'>
                                        <img src={Manager} alt="logo"/>
                                    </div>
                                    <div className='comand__name'>
                                        <strong>Татьяна</strong>
                                    </div>
                                    <div className='comand__position'>
                                        <strong>Менеджер по работе с клиентами</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                            <div className='row'>
                                <div className='comand__wrapper'>
                                    <div className='comand__img'>
                                        <img src={Engineer} alt="logo"/>
                                    </div>
                                    <div className='comand__name'>
                                        <strong>Елена</strong>
                                    </div>
                                    <div className='comand__position'>
                                        <strong>Инженер</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                            <div className='row'>
                                <div className='comand__wrapper'>
                                    <div className='comand__img'>
                                        <img src={EngineerTwo} alt="logo"/>
                                    </div>
                                    <div className='comand__name'>
                                        <strong>Александр</strong>
                                    </div>
                                    <div className='comand__position'>
                                        <strong>Инженер</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='comand__lines'>
                        <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                            <div className='row'>
                                <div className='comand__wrapper'>
                                    <div className='comand__img'>
                                        <img src={EngineerVent} alt="logo"/>
                                    </div>
                                    <div className='comand__name'>
                                        <strong>Алексей</strong>
                                    </div>
                                    <div className='comand__position'>
                                        <strong>Инженер по вентиляции</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                            <div className='row'>
                                <div className='comand__wrapper'>
                                    <div className='comand__img'>
                                        <img src={pto} alt="logo"/>
                                    </div>
                                    <div className='comand__name'>
                                        <strong>Андрей</strong>
                                    </div>
                                    <div className='comand__position'>
                                        <strong>Начальник ПТО</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                                                <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                            <div className='row'>
                                <div className='comand__wrapper'>
                                    <div className='comand__img'>
                                        <img src={Buhgalter} alt="logo"/>
                                    </div>
                                    <div className='comand__name'>
                                        <strong>Яна</strong>
                                    </div>
                                    <div className='comand__position'>
                                        <strong>Бухгалтер</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
      );
}
 
export default Comand;