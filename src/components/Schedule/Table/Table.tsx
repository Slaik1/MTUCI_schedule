import React, {FC, useEffect, useState} from 'react';
import {TTable} from "../../../types/schedule";
import cl from "./Table.module.scss"
import Row from "./Row/Row";
import classNames from "classnames";
import {getCurrentDate, MakeValidDayOfWeek} from "./constants";
import {settingsStore} from "../../../store/settingsStore";

interface TableProps {
    scheduleData: TTable
}

const Table: FC<TableProps> = ({scheduleData}) => {

    const {settings} = settingsStore
    const [isToday] = useState(scheduleData[0].date === getCurrentDate())
    const [isAdditionalInfo, setIsAdditionalInfo] = useState(settings.expandAllDays)

    const shouldExpand = (): boolean => {
        return settings.expandAllDays || (settings.expandToday && isToday)
    }

    useEffect(() => {
        setIsAdditionalInfo(shouldExpand())
    }, [settings.expandAllDays, settings.expandToday]);

    const inputClasses = classNames({
        [cl.wrapper]: true,
        [cl.header_open]: isAdditionalInfo,
        [cl.today]: settings.highlightToday && isToday
    })

    return (
        <div className={inputClasses}>
            <div className={cl.header} onClick={() => setIsAdditionalInfo((prev) => !prev)}>
                {isAdditionalInfo
                    ?
                    <div className={cl.titleWrapper}>
                        <p>Пара</p>
                        <p>Дисциплина</p>
                        <p>Вид</p>
                        <p>Преподаватель</p>
                        <p>Кабинет</p>
                    </div>
                    :
                    <div className={cl.titleWrapper}>
                        <p>{scheduleData[0].date}</p>
                        <p>{MakeValidDayOfWeek(scheduleData[0].day)}</p>
                        <p>{scheduleData[0].lesson} пара в {scheduleData[0].room} кабинете</p>
                        <p>{scheduleData[0].discipline}</p>
                    </div>
                }
            </div>
            {
                isAdditionalInfo &&
                scheduleData.map((rowData, i) => <Row data={rowData} key={i}/>)
            }
            <div className={cl.open}>

            </div>
        </div>
    );
};

export default Table;