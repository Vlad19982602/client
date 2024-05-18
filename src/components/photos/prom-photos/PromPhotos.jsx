import gridOne from '../photo/prom/grid-one/gridOne.jpg'
import gridOe from '../photo/prom/grid-one/gridOe.jpg'

import gridTwo from '../photo/prom/grid-two/gridTwo.jpg'
import gridTw from '../photo/prom/grid-two/gridTw.jpg'

import gridThree from '../photo/prom/grid-three/gridThree.jpg'
import gridThre from '../photo/prom/grid-three/gridThre.jpg'

import '../photos.css'

const PromPhotos = () => {
    return ( 
        <>
            <section className="hphotos">
                <div className='t-container'>
                    <div className='house-content'>
                        <div className='col-lg-12 col-md-12'>
                            <div className='house__grid-one'>
                                <img src={gridOne} alt='custom' />
                                <img src={gridOe} alt='customo' />
                            </div>
                            <div className='house__grid-two'>
                                <img src={gridTwo} alt='customo' />
                                <img src={gridTw} alt='pcustom' />
                            </div>
                            <div className='house__grid-three'>
                                <img src={gridThree} alt='pcustom' />
                                <img src={gridThre} alt='custom' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default PromPhotos;