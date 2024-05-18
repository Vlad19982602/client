import './prim.css'

import primary from './primary.jpg'

const DPrimary = () => {
    return ( 
        <>
            <section className="dprimary">
                <div className='t-container'>
                    <div className='col-lg-12 col-md-12'>
                        <div className='dprimary__title'><strong>ПРИМЕР ВЕНТИЛЯЦИИ В БАССЕЙНЕ ЧАСТНОГО ДОМА</strong></div>
                        <div className='dprimary__wrapper'>
                            <div className='dprimary__flex'>
                                <div className='dprimary__text'>Частный жилой дом с бассейном в поселке «Карпов пруд» г. Челябинск</div>
                                <div className='dprimary__descr'>Поставка, монтаж систем вентиляции и кондиционирования.</div>
                            </div>
                            <div className='dprimary__img'>
                                <img src={primary} alt='dom'/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default DPrimary;