import axios from 'axios'
import {TTableDataList} from '../types/schedule'
import {settingsStore} from '../store/settingsStore'
import { BASE_URL } from '../constants'


export default class ScheduleService {
    async getSchedule(): Promise<TTableDataList> {
        const settingsString = JSON.stringify(settingsStore.settings)
        const response = await axios.get('http://192.168.0.107:4200' + '/schedule', {
            params: {
                data: settingsString
            }
        })
        return response.data
    }
    async getTeacherSchedule(teacher:string): Promise<TTableDataList> {
        const settingsString = JSON.stringify({...settingsStore.settings})
        const response = await axios.get(BASE_URL + '/teacher', {
            params: {
                data: settingsString
            }
        })
        return response.data
    }
}