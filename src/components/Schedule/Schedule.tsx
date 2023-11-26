import React, {useEffect, useState} from 'react'
import {observer} from 'mobx-react-lite'
import ScheduleService from '../../api/ScheduleService'
import {TTableDataList} from '../../types/schedule'
import {settingsStore} from '../../store/settingsStore'
import Table from './Table/Table'
import cl from './Schedule.module.scss'
import TableLoader from './TableLoader/TableLoader'

const scheduleService = new ScheduleService()

const Schedule = () => {

    const [scheduleDataList, setScheduleDataList] = useState<TTableDataList>()
    const [isLoader, setIsLoader] = useState(true)
    const {settings} = settingsStore
    const {group, scheduleLength, hideAdditionalTeacher, setTodayStart} = settings
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
    }, [group, scheduleLength, hideAdditionalTeacher, setTodayStart])

    return(
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

export default observer(Schedule)