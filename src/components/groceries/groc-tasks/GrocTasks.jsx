import './tasks.css'

const GrocTasks = () => {
    return ( 
        <>
            <section className='gtasks'>
                <div className='t-container'>
                    <div className='gtasks__box-text'>
                        <div className='col-md-12'>
                            <div className='gtasks__title'><strong>Задачи вентиляции</strong></div>
                            <div className='gtasks__subtitle'>Без грамотной вентиляции не создать комфортные условия!</div>
                        </div>
                    </div>
                    <div className='gtasks__flex'>
                        <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                            <div className='gtasks__line'></div>
                            <div className='gtasks__text'>Удаление отработанного воздуха <br/>
                            (с дымом, запахами, гарью) из помещения и обеспечение притока чистого свежего с улицы.

                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                            <div className='gtasks__line'></div>
                            <div className='gtasks__text'>Удаление отработанного воздуха <br/>
                            (с дымом, запахами, гарью) из помещения и обеспечение притока чистого свежего с улицы.

                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                            <div className='gtasks__line'></div>
                            <div className='gtasks__text'>Удаление отработанного воздуха <br/>
                            (с дымом, запахами, гарью) из помещения и обеспечение притока чистого свежего с улицы.

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default GrocTasks;