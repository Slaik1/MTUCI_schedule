import React, {FC} from 'react'
import {IRow} from '../../../../types/schedule'
import cl from './Row.module.scss'
interface RowProps {
    data: IRow;
}

const Row:FC<RowProps> = ({data}) => {
    console.log(data.changeStatus)
    return (
        <div className={cl.row}>
            <p>{data.lesson}</p>
            <p>{data.discipline}</p>
            <p>{data.type}</p>
            <p>{data.teacher}</p>
            {
                data.changeStatus
                    ?
                    <p>{data.changeStatus}</p>
                    :
                    <p>{data.room}</p>
            }
        </div>
    )
}

export default Row