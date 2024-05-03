import React from 'react'
import './modal.css'

import CloseButton from 'react-bootstrap/CloseButton';


const Modal = ({children, open, setOpen}) => {

    if(!open) return null;

    return(
        <>
            <div id='modal' className='modal-window'>
                <CloseButton onClick={() => setOpen(false)} className='modal__btn-close'/>
                <div className='modal__wrapper' onClick={e => e.stopPropagation()}>
                    <div className='modal__image-wrapper'>
                        <div className='modal__image-pic'></div>
                    </div>
                    <div className='modal__text-wrapper'>
                        <div className='modal__text-title'>
                            <div className="bold">С удовольствием отвечу на ваши вопросы!</div>
                            <br/><br/>
                            <small className='small'>менеджер по работе с клиентами Татьяна Бойко</small>
                        </div>
                    </div>
                    <div className='modal__text-phone bold'>+7 (922) 630-21-03</div>
                </div>
                {children}
            </div>
        </>
    )
}

export default Modal;