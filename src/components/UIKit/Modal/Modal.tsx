import React, {FC, ReactNode} from 'react'
import cl from './Modal.module.scss'

interface ModalProps {
    children: ReactNode;
    setIsOpen: SetAction<boolean>;
    resetData?: () => void;
}

const Modal: FC<ModalProps> = ({children, setIsOpen, resetData}) => {

    document.body.style.overflow = 'hidden'

    const closeModal = () => {
        setIsOpen((prev:boolean) => !prev)
        document.body.style.overflow = 'auto'
    }


    return (
        <div className={cl.wrapper} onClick={closeModal}>
            <div className={cl.modal} onClick={(event) => event.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal