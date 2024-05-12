import './blog.css'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Blog = () => {
    return ( 
        <>
            <main className="blog-ex">
                <div className="t-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="blog-ex__wrapper">
                                <strong>БЛОГ</strong>
                                <div className="main-ex__text">
                                    о вентиляции и кондиционировании
                                </div>
                            </div>
                            <div className='blog-ex__items'>
                                <Form.Control className='blog-ex__input' type="text" placeholder="Ваш E-Mail" />
                                <Button className='blog__btn' variant="success" type="submit">
                                    Подписаться
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
     );
}
 
export default Blog;