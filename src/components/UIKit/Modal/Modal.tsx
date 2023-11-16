import React, {FC, ReactNode, useEffect} from 'react'
import cl from './Modal.module.scss'
// 3 хуиты
interface ModalProps {
    children: ReactNode;
    setIsOpen: SetAction<boolean>;
    resetData?: () => void;
}

const Modal: FC<ModalProps> = ({children, setIsOpen, resetData}) => {

    useEffect(() =>  {
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [])

    const closeModal = (event:React.MouseEvent) => {
        event.stopPropagation()
        setIsOpen((prev:boolean) => !prev)
    }

    return (
        <div className={cl.wrapper} onClick={(event) => closeModal(event)}>
            <div className={cl.modal} onClick={(event) => event.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal