import React, {FC} from 'react';
import { TTable } from "../../../types/schedule";
import cl from "./Table.module.scss"
import Row from "./Row/Row";

interface TableProps {
    scheduleData: TTable
}

const Table:FC<TableProps> = ({scheduleData}) => {

    return (
        <div className={cl.table} onClick={() => console.log(scheduleData)}>
            {
                scheduleData &&
                scheduleData.map((rowData, i) => <Row data={rowData} key={i}/>)
            }
        </div>
    );
};

export default Table;