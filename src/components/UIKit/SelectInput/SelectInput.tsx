import React, {FC, useState} from 'react';
import cl from "./SelectInput.module.scss"
import classNames from "classnames";
import {ReactSVG} from "react-svg";
import {useOutsideClick} from "../../../hooks/useOutsideClick";
import {IOption, TOptions} from "./selectInput.model";
import DropList from "./DropList/DropList";

interface SelectInputProps {
    className?: string;
    options: TOptions;
    value: string | number;
    setValue: (value: string | number) => void;
}

const SelectInput:FC<SelectInputProps> = ({className = '', options, value, setValue}) => {

    const [isInputActive, setIsInputActive] = useState(false)
    const ref = useOutsideClick(()=> setIsInputActive(false))

    const inputClasses = classNames({
        [cl.wrapper]:true,
        [className]: !!className,
        [cl.active]:isInputActive
    })

    const setGlobalValue = (el: IOption) => {
        setValue(el.value)
        setIsInputActive(false)
    }

    const getCurrentLabel = () => {
        return options.find((el) => el.value === value)?.label
    }

    return (
        <div ref={ref}
             className={inputClasses}
             onClick={() => setIsInputActive((prev) => !prev)}>
            <input spellCheck={false} value={getCurrentLabel()} type="text" placeholder="Отображаемое колличество дней"/>
            <ReactSVG className={cl.svg_arrow} src="./svg/input_arrow.svg"/>
            {
                isInputActive &&
                <DropList value={value} setValue={setGlobalValue} dropListData={options}/>
            }
        </div>
    );
};

export default SelectInput;