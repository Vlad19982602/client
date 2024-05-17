import './gquestion.css'

const GrocQuestion = () => {
    return ( 
        <>
            <section className="gquestion">
                <div className='t-container'>
                    <div className='col-md-12'>
                        <div className='gquestion__title'><strong>Зачем нужна вентиляция в заведениях <br/>общественного питания?</strong></div>
                    </div>
                    <div className='col-lg-8 col-md-10'>
                        <li className='t-list__item d-flex'>
                            <div className="services__item d-flex ">
                                <div className="t-cell t-valign_top">
                                    <div className="services__imgwrapper" style={{ width: 70 }}>
                                        <svg role="presentation" className="services__checkmark" fill="#76b82a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.8 31.8">
                                            <path d="M.9 14.5C5.2 19.4 9.8 24 14.1 29c.4.5 1.3.3 1.6-.2 5.1-8.4 10.1-16.8 15-25.4.7-1.2-.5-2.1-1.3-.9C19.3 18 19 18.4 13.9 26.7c.5-.1 1.1-.1 1.6-.2-4.4-4.8-8.9-8.6-13.9-12.8-.4-.4-1.1.3-.7.8z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="question__textwrapper t-cell t-valign_top">
                                    <div className="gquestion__descr t-descr t-descr_sm">
                                        <div><strong>Для обеспечения комфорта гостей</strong>
                                            <br/>
                                            Успех заведения в комфортном микроклимате. Когда не холодно зимой, не душно летом, без сквозняков и запахов кухни.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='t-list__item d-flex'>
                            <div className="services__item d-flex ">
                                <div className="t-cell t-valign_top">
                                    <div className="services__imgwrapper" style={{ width: 70 }}>
                                        <svg role="presentation" className="services__checkmark" fill="#76b82a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.8 31.8">
                                            <path d="M.9 14.5C5.2 19.4 9.8 24 14.1 29c.4.5 1.3.3 1.6-.2 5.1-8.4 10.1-16.8 15-25.4.7-1.2-.5-2.1-1.3-.9C19.3 18 19 18.4 13.9 26.7c.5-.1 1.1-.1 1.6-.2-4.4-4.8-8.9-8.6-13.9-12.8-.4-.4-1.1.3-.7.8z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="question__textwrapper t-cell t-valign_top">
                                    <div className="gquestion__descr t-descr t-descr_sm">
                                        <div><strong>Для создания санитарных условий сотрудникам</strong>
                                            <br/>
                                            Здоровый микроклимат благоприятно сказывается на людях. Повышается иммунитет и настроение. Ваши сотрудники будут реже болеть, будут активны и эффективны.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default GrocQuestion;