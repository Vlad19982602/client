import React, { useState, useEffect } from 'react';
// import { useState } from "react";
import './modal.css'

import CloseButton from 'react-bootstrap/CloseButton';


const Modal = ({open, setOpen}) => {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (open) {
        const timer = setTimeout(() => {
            setVisible(true);
        }, 60000); // 60 секунд = 60000 миллисекунд

        return () => clearTimeout(timer); // очистка таймера при размонтировании
        } else {
        setVisible(false);
        }
    }, [open]);


    if (!open || !visible) {
        return null; // Не отображаем модальное окно, если оно закрыто или если прошло меньше 60 секунд
    }

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
            </div>
        </>
    )
}

export default Modal;