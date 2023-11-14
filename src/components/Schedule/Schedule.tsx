import React, {useEffect, useState} from 'react'
import Modal from '../UIKit/Modal/Modal'
import Settings from '../Settings/Settings'
import AboutProject from '../AboutProject/AboutProject'
import ScheduleService from '../../api/ScheduleService'
import {TTableDataList} from '../../types/schedule'
import Table from './Table/Table'
import cl from './Schedule.module.scss'
import Header from '../Header/Header'

const scheduleService = new ScheduleService()

const Schedule = () => {

    const [scheduleDataList, setScheduleDataList] = useState<TTableDataList>([])

    const fetchSchedule = async () => {
        try {
            const response = await scheduleService.getSchedule()
            setScheduleDataList(response)
        } catch (error) {
        } finally {

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
                        <p>Не удалось загрузить рассписание. Проверьте настройки</p>
                }
            </div>
        </div>
    )
}

export default Schedule