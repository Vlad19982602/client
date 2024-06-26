import './que.css'
import Button from 'react-bootstrap/Button';

const Question = ({title}) => {
    return ( 
        <>
            <section className="question">
                <div className='t-container'>
                    <h1>{title}</h1>
                    <svg
                        role="presentation"
                        className="t581__arrow-icon t581__arrow-icon_right"
                        style={{ fill: "#f3f2f1" }}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 80 180"
                        >
                        <path d="M54.1 110c-1.1 0-2.2-.5-2.9-1.5-1.1-1.6-.7-3.8.8-4.9 1-.7 4.9-2.9 8.9-5.2-14.8-2-27.2-8.9-36.1-20.2C7.9 56.3 7.5 24.1 12.3 3.2c.4-1.9 2.3-3.1 4.2-2.6 1.9.4 3.1 2.3 2.6 4.2-4.5 19.4-4.2 49.2 11.4 69.1 8.4 10.7 19.9 16.7 34.2 17.9l-.4-.5c-1.4-1.7-2.7-3.4-4.1-5.1-.7-.9-1.5-1.9-2.3-2.9-1.2-1.5-1-3.7.5-4.9s3.7-1 4.9.5l6.4 8c.5.5.9 1.1 1.4 1.6 1.5 1.8 3.1 3.7 4.5 5.6.1.1.1.2.2.3.2.4.4.8.4 1.3v.7c0 .3-.1.7-.2 1-.1.2-.2.4-.3.5-.2.3-.5.6-.7.9-.2.2-.4.3-.7.5-.1 0-.1.1-.2.1-1.7.8-16 8.6-17.9 9.9-.7.5-1.4.7-2.1.7zM74 99.5s-.1 0 0 0c-.1 0 0 0 0 0z" />
                    </svg>
                    <Button className='question__btn' variant="success" type="submit">
                        ЗАДАТЬ ВОПРОС
                    </Button>
                </div>
            </section>
        </>
     );
}
 
export default Question;