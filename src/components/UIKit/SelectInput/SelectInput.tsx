import React, {FC, useState} from 'react';
import cl from "./SelectInput.module.scss"
import classNames from "classnames";
import {ReactSVG} from "react-svg";
import {useOutsideClick} from "../../../hooks/useOutsideClick";
import {TDropListData} from "../../../types/selectInput";

interface SelectInputProps {
    className:string;
    dropListData?: TDropListData
}

const SelectInput:FC<SelectInputProps> = ({className}) => {

    const [isInputActive, setIsInputActive] = useState(false)
    const ref = useOutsideClick(()=>setIsInputActive(false))

    const inputClasses = classNames({
        [cl.wrapper]:true,
        [className]: className,
        [cl.active]:isInputActive
    })

    return (
        <div ref={ref} className={inputClasses} onClick={() =>setIsInputActive(true)}>
            <input type="text" placeholder="Отображаемое колличество дней"/>
            <ReactSVG className={cl.svg_arrow} src="./svg/input_arrow.svg"/>
        </div>
    );
};

export default SelectInput;