import React, {useEffect, useState} from 'react'
import ScheduleService from '../../api/ScheduleService'
import {TTableDataList} from '../../types/schedule'
import Table from './Table/Table'
import cl from './Schedule.module.scss'
import TableLoader from './TableLoader/TableLoader'

const scheduleService = new ScheduleService()

const Schedule = () => {

    const [scheduleDataList, setScheduleDataList] = useState<TTableDataList>()
    const [isLoader, setIsLoader] = useState(true)

    const fetchSchedule = async () => {
        try {
            const response = await scheduleService.getSchedule()
            setScheduleDataList(response)
        } catch (error) {
        } finally {
            setIsLoader(false)
        }
    }

    useEffect(() => {
        fetchSchedule()
    }, [])

    return (
        <div className={cl.wrapper}>
            <div className={cl.container}>
                {
                    scheduleDataList
                        ?
                        scheduleDataList.map((el, i) => <Table scheduleData={el} key={i}/>)
                        :
                        <TableLoader/>
                }
            </div>
        </div>
    )
}

export default Schedule