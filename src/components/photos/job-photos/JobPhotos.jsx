import one from '../photo/job/one.jpg';
import two from '../photo/job/two.jpg'

import three from '../photo/job/three.jpg'
import four from '../photo/job/four.jpg'

import five from '../photo/job/five.jpg'
import six from '../photo/job/six.webp'

import '../photos.css'
import '../../private-house/house/house.css'

const JobPhotos = () => {
    return ( 
        <>
            <section className="hphotos">
                <div className='t-container'>
                    <div className='house-flex'>
                        <img src={one} alt='custom' />
                        <img src={two} alt='customo' />
                        <img src={three} alt='customo' />
                    </div>
                    <div className='house-flex'>
                        <img src={four} alt='pcustom' />
                        <img src={five} alt='pcustom' />
                        <img src={six} alt='custom' />
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default JobPhotos;