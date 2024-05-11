import './carrier.css'

import gridOne from "../../../img/grid/grid-1.jpg";
import gridTwo from "../../../img/grid/grid-2.jpeg";
import gridThree from "../../../img/grid/grid-3.jpg";
import gridFour from "../../../img/grid/grid-4.jpg";

const Carrier = () => {
    return (
        <>
            <section className="carrier">
                <div className="t-container">
                    <div className='d-grid'>
                        <div className="col-md-12">
                            <img src={gridOne} alt="grid-1"/>
                        </div>
                        <div className="col-md-12">
                            <div className="d-item">
                                <img src={gridTwo} alt="grid-1"/>
                            </div>
                            <div className="d-item">
                                <img src={gridThree} alt="grid-1"/>
                            </div>
                        </div>
                        <div className="col-md-12 d-item">
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