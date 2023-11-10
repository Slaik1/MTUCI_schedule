import axios from 'axios'
import {TTableDataList} from '../types/schedule'
import {settingsStore} from "../store/settingsStore";

export default class ScheduleService {

    static async getSchedule(): Promise<TTableDataList> {
        const settingsString = JSON.stringify(settingsStore.settings);
        const response = await axios.get('http://95.163.233.148:4200/schedule', {
            params: {
                data: settingsString
            }
        })
        return response.data
    }
}
