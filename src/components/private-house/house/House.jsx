import './house.css'

const House = ({descr, title, text}) => {
    return ( 
        <>
            <section className="house">
                <div className='t-container'>
                    <div className='house__descr'>{descr}</div>
                    <div className='house__title'>{title}</div>
                    <div className='house__text'>{text}</div>
                </div>
            </section>
        </>
     );
}
 
export default House;