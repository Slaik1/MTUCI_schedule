import axios from 'axios'
import {TTableDataList} from '../types/schedule'
import {settingsStore} from "../store/settingsStore";

export default class ScheduleService {

    static async getSchedule(): Promise<TTableDataList> {
        const params =  settingsStore.settings
        const response = await axios.get('http://192.168.0.107:4200/schedule', {params})
        return JSON.parse(response.data)
    }
}