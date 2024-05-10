import './decoration.css'


function Decoration({title}) {
    return(
        <>
            <section className='decoration'>
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