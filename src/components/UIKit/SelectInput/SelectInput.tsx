import React, {FC, useState} from 'react'
import classNames from 'classnames'
import {ReactSVG} from 'react-svg'
import {useOutsideClick} from '../../../hooks/useOutsideClick'
import cl from './SelectInput.module.scss'
import {IOption, TOptions} from './selectInput.model'
import DropList from './DropList/DropList'

interface SelectInputProps {
    className?: string;
    options: TOptions;
    value: string | number;
    setValue: (value: string | number) => void;
    title: string;
}

const SelectInput:FC<SelectInputProps> = ({className = '', options, value, setValue, title}) => {

    const [isInputActive, setIsInputActive] = useState(false)
    const ref = useOutsideClick(()=> setIsInputActive(false))

    const inputClasses = classNames({
        [cl.wrapper]:true,
        [className]: !!className,
        [cl.active]:isInputActive
    })

    const setGlobalValue = (el: IOption) => setValue(el.value)

    const getCurrentLabel = () => {
        return options.find((el) => el.value === value)?.label
    }

    return (
        <div className={cl.container}>
            <p className={cl.title}>{title}</p>
            <div ref={ref}
                className={inputClasses}
                onClick={() => setIsInputActive((prev) => !prev)}>
                <p className={cl.input}>
                    {getCurrentLabel()}
                </p>
                <ReactSVG className={cl.svg_arrow} src='./svg/input_arrow.svg'/>
                {
                    isInputActive &&
                    <DropList
                        value={value}
                        setValue={setGlobalValue}
                        dropListData={options}
                    />
                }
            </div>
        </div>

    )
}

export default SelectInput