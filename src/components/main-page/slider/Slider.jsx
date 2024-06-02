import './slider.css'
import React, { useState } from 'react';

const Slider = () => {
    const [activeLink, setActiveLink] = useState('private');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <>
            <section className='demon'>
                <div className='container'>
                    {/* Slider */}
                    <div className="slider">
                        <div className="slider__item">
                            <div
                            className={`slider__link internal_link ${activeLink === 'private' ? 'after_click' : 'no_click'}`}
                            onClick={() => handleLinkClick('private')}
                            >
                            <a href="#!">Частная</a>
                            </div>
                        </div>
                        <div className="slider__item">
                            <div
                            className={`slider__link external_link ${activeLink === 'industrial' ? 'after_click' : 'no_click'}`}
                            onClick={() => handleLinkClick('industrial')}
                            >
                            <a href="#!">Производственная</a>
                            </div>
                        </div>
                        <div className="slider__item">
                            <div
                            className={`slider__link rising_link ${activeLink === 'office' ? 'after_click' : 'no_click'}`}
                            onClick={() => handleLinkClick('office')}
                            >
                            <a href="#!">Офисная</a>
                            </div>
                        </div>
                        <div className="slider__item">
                            <div
                            className={`slider__link roof_link ${activeLink === 'food' ? 'after_click' : 'no_click'}`}
                            onClick={() => handleLinkClick('food')}
                            >
                            <a href="#!">Общественного питания</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
 
export default Slider;