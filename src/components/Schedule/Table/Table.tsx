import React, {FC, useEffect, useState} from 'react';
import ScheduleService from "../../../api/ScheduleService";
import { TTable } from "../../../types/schedule";
import cl from "./Table.module.scss"
import Row from "./Row/Row";

const Table:FC = () => {
    const [scheduleData, setScheduleData] = useState<TTable>([]);

    useEffect(() => {
        const getSchedule = async () => {
            try {
                const response = await ScheduleService.getSchedule();
                setScheduleData(response); // Предполагая, что ответ от сервера содержит данные расписания
            } catch (error) {
                console.error('Ошибка при получении расписания:', error);
            }
        };

        getSchedule();
    }, []);

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