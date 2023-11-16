import React, {FC, useEffect, useState} from 'react'
import {observer} from 'mobx-react-lite'
import SelectInput from '../UIKit/SelectInput/SelectInput'
import Table from '../Schedule/Table/Table'
import ScheduleService from '../../api/ScheduleService'
import {TTableDataList} from '../../types/schedule'
import {settingsStore} from '../../store/settingsStore'
import TableLoader from '../Schedule/TableLoader/TableLoader'
import cl from './Teacher.module.scss'
import {TEACHERS} from './constants'

const scheduleService = new ScheduleService()

const Teacher: FC = () => {
    const {settings, setSettingsItem} = settingsStore
    const [teacherSchedule, setTeacherSchedule] = useState<TTableDataList>()
    const [isLoader, setIsLoader] = useState(true)
    const fetchTeacherSchedule = async () => {
        try {
            const response = await scheduleService.getTeacherSchedule(settings.teacher)
            setTeacherSchedule(response)
        } catch (error) {
        } finally {
            setIsLoader(false)

        }
    }

    useEffect(() => {
        fetchTeacherSchedule()
    }, [settings.teacher])

    return (
        <div className={cl.wrapper}>
            <SelectInput
                className={cl.input}
                options={TEACHERS}
                value={settings.teacher}
                setValue={(value) => setSettingsItem('teacher', String(value))}
                title={'Выберите преподавателя'}
            />
            {
                teacherSchedule ?
                    teacherSchedule.map((el, i) =>
                        <Table scheduleData={el} key={i}/>
                    )
                    :
                    <TableLoader/>


            }
            {
                teacherSchedule?.length === 0 &&
                <p>Рассписание отсутствует</p>
            }
        </div>
    )
}
export default observer(Teacher)