import './licensy.css'

import UralSibir from "./licensy/UralSibir.jpg"
import licenziya from "./licensy/licenziya.jpg"  

const Licensy = () => {
    return (
        <>
            <section className='licensy'>
                <div className='t-container'>
                    <div className='licensy__wrapper'>
                        <div className='col-lg-5 col-md-8 col-sm-9 col-xs-12'>
                            <img src={UralSibir} alt="soyuz"/>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-9 col-xs-12'>
                            <div className='licensy__middle'>
                                <div className='licensy__box'>
                                    <div className='licensy__title'>ДОПУСК СРО</div>
                                    <div className='licensy__line'></div>
                                    <div className='licensy__text'>
                                        Имеем право осуществлять строительство, реконструкцию, капитальный ремонт, снос объектов капитального строительства.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='licensy__wrapper'>
                        <div className='col-lg-5 col-md-8 col-sm-9 col-xs-12'>
                            <img src={licenziya} alt="soyuz"/>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-9 col-xs-12'>
                            <div className='licensy__middle'>
                                <div className='licensy__box'>
                                    <div className='licensy__title'>ЛИЦЕНЗИЯ МЧС</div>
                                    <div className='licensy__line'></div>
                                    <div className='licensy__text'>
                                        Имеем допуск к следующим работам: <br/>
                                        <ul>
                                            <li>Монтаж, техническое обслуживание и ремонт автоматических систем (элементов автоматических систем) противодымной вентиляции, включая диспетчеризацию и проведение пусконаладочных работ.</li>
                                            <li>Монтаж, техническое обслуживание и ремонт заполнений проемов в противопожарных преградах.</li>
                                            <li>Выполнение работ по огнезащите материалов, изделий и конструкций</li>
                                        </ul>
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
 
export default Licensy;