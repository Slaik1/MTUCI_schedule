import React, {FC} from 'react'
import classNames from 'classnames'
import cl from './SwitchBtn.module.scss'

interface SwitchBtnProps {
    value: boolean;
    setValue: (value:boolean) => void;
}

const SwitchBtn:FC<SwitchBtnProps> = ({value, setValue}) => {

    const inputClasses = classNames({
        [cl.switch]:true,
        [cl.active]:value
    })

    const labelClickHandler = (event:React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation()
        console.log('123')
        setValue(!value)
    }

    return (
        <div className={inputClasses} onClick={labelClickHandler}>
            <input type='checkbox'/>
            <div></div>
        </div>
    )
}

export default SwitchBtn