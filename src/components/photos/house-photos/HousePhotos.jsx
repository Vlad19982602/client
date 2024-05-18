import gridOne from '../photo/grid-one/gridOne.jpg'
import gridOe from '../photo/grid-one/gridOe.jpg'

import gridTwo from '../photo/grid-two/gridTwo.jpg'
import gridTw from '../photo/grid-two/gridTw.webp'

import gridThree from '../photo/grid-three/gridThree.jpg'
import gridThre from '../photo/grid-three/gridThre.jpg'

import '../photos.css'

const HousePhotos = () => {
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
 
export default HousePhotos;