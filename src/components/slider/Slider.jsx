import './slider.css'

const Slider = () => {
    return (
        <>
            <section className='demon'>
                <div className='container'>
                    {/* Slider */}
                    <div className="slider">
                        <div className="slider__item">
                            <div className="slider__link internal_link no_click after_click">
                            <a href="!#">Частная</a>
                            </div>
                        </div>
                        <div className="slider__item">
                            <div className="slider__link external_link no_click">
                            <a href="!#">Производственная</a>
                            </div>
                        </div>
                        <div className="slider__item">
                            <div className="slider__link rising_link no_click">
                            <a href="!#">Офисная</a>
                            </div>
                        </div>
                        <div className="slider__item">
                            <div className="slider__link roof_link no_click">
                            <a href="!#">Общественного питания</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
 
export default Slider;