import './carrier.css'

import gridOne from "./grid/grid-1.jpg";
import gridTwo from "./grid/grid-2.jpeg";
import gridThree from "./grid/grid-3.jpg";
import gridFour from "./grid/grid-4.jpg";

import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Carrier = () => {
    useEffect(() => {
        AOS.init({
        duration: 1000, // продолжительность анимации в миллисекундах
        });
    }, []);
    
    return (
        <>
            <section className="carrier">
                <div className="t-container">
                    <div className='d-grid'>
                        <div className="col-md-12" data-aos="fade-up">
                            <img src={gridOne} alt="grid-1"/>
                        </div>
                        <div className="col-md-12" data-aos="fade-up">
                            <div className="d-item">
                                <img src={gridTwo} alt="grid-1"/>
                            </div>
                            <div className="d-item">
                                <img src={gridThree} alt="grid-1"/>
                            </div>
                        </div>
                        <div className="col-md-12 d-item" data-aos="fade-up">
                            <div className="carrier-content ">
                                <img src={gridFour} alt="grid-1"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
      );
}
 
export default Carrier;