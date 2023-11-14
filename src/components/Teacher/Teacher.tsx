import React, {useEffect, useState} from 'react';
import cl from './Teacher.module.scss'
import SelectInput from "../UIKit/SelectInput/SelectInput";
import {TEACHERS} from "./constants";
import Schedule from "../Schedule/Schedule";
import Table from "../Schedule/Table/Table";
import ScheduleService from "../../api/ScheduleService";
import {TTableDataList} from "../../types/schedule";
import {settingsStore} from "../../store/settingsStore";
import {observer} from "mobx-react-lite";

const scheduleService = new ScheduleService()

const Teacher = () => {
    const {settings, setSettingsItem} = settingsStore
    const [teacherSchedule, setTeacherSchedule] = useState<TTableDataList>([])

    const fetchTeacherSchedule = async () => {
        try {
            const response = await scheduleService.getTeacherSchedule(settings.teacher)
            setTeacherSchedule(response)
        } catch (error) {
        } finally {

        }
    }

    useEffect(() => {
        fetchTeacherSchedule()
    }, [settings.teacher]);

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
                teacherSchedule &&
                teacherSchedule.map((el , i) =>
                    <Table scheduleData={el} key={i}/>
                )
            }
        </div>
    )
}

export default observer(Teacher)