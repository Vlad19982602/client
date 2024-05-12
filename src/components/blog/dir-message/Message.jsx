import './message.css'

import dir from '../../about-us/comand/comand/director.jpg'

const Message = () => {
    return ( 
        <>
            <section className="message">
                <div className='t-container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='message__text-center'>
                                <h1>Любим своё дело, имеем профильное образование, обширные знания и умения в теме климатического оборудования и строительного рынка в целом. Готовы делиться полезной информацией. Подписывайтесь!</h1>
                                <svg
                                    role="presentation"
                                    version="1.1"
                                    viewBox="0 0 1200 31.7"
                                    width="1200px"
                                    height="40px"
                                    >
                                    <g>
                                        <polygon points="40,31.7 40,4 0,4 0,0 44,0 44,22.3 67.2,0 1200,0 1200,4 68.8,4 " />
                                    </g>
                                </svg>
                            </div>
                            <div className='col-md-6'>
                                <div className='message__wrapper'>
                                    <div className='message__img'>
                                        <img src={dir} alt='message' className='message-img__dir'/>
                                        <div className='message-img__text'>
                                            <h3 className='message-img__text-h3'>Виктор</h3>
                                        </div>
                                        <div className='message-img__text'>
                                            <h5 className='message-img__text-h5'>руководитель вентиляционной компании АирМастер г. Челябинск</h5>
                                        </div>
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
 
export default Message;