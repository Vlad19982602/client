import './decoration.css'

import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Decoration({title}) {

    useEffect(() => {
        AOS.init({
        duration: 1000, // продолжительность анимации в миллисекундах
        });
    }, []);

    return(
        <>
            <section className='decoration' data-aos="fade-up">
                <div className='container'>
                    <div className='decoration__head'>
                        <h2>{title}</h2>
                        <div className='decoration__head-sub'></div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Decoration;