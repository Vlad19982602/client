import './search.css'

import Button from 'react-bootstrap/Button';

const Search = () => {
    return ( 
        <>
            <main className="search">
                <div className='t-container'>
                    <div className='col-md-12'>
                        <div className='search__wrapper'>
                            <h1>ИЩЕМ:</h1>
                            <ul className='search__list'>
                                <li className='search__item'>1. Электромонтёра по КИП автоматизации отопления и вентиляции.</li>
                                <li className='search__item'>2. Монтажника систем вентиляции.</li>
                                <li className='search__item'>3. Инженера ПТО.</li>
                            </ul>
                            <Button className='search__btn' variant="success" type="submit">
                                Отправить резюме
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
        </>
     );
}
 
export default Search;