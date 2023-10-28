import React, {FC} from 'react';
import cl from "./DropList.module.scss"
import {TOptions} from "../selectInput.model";

interface DropListProps {
    dropListData: TOptions;
    setValue: SetAction<string>;
    value: string | number;
}

const DropList:FC<DropListProps> = ({dropListData, setValue, value}) => {

    return (
        <div className={cl.dropList}>
            {
                dropListData.map((el) =>
                    <div className={`${cl.dropItem} + ${value === el.value ? cl.active: ''}`} onClick={() => setValue(el)}>
                        {el.label}
                    </div>
                )
            }
        </div>
    );
};

export default DropList;