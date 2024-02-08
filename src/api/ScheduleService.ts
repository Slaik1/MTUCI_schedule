import axios from 'axios';

import { BASE_URL } from '../constants';
import { settingsStore } from '../store/settingsStore';
import { TTableDataList } from '../types/schedule';

export default class ScheduleService {
  async getSchedule(): Promise<TTableDataList> {
    const settingsString = JSON.stringify(settingsStore.settings);
    const response = await axios.get(BASE_URL + '/schedule', {
      params: {
        data: settingsString,
      },
    });

    return response.data;
  }
  async getTeacherSchedule(teacher: string): Promise<TTableDataList> {
    const settingsString = JSON.stringify({ ...settingsStore.settings });
    const response = await axios.get(BASE_URL + '/lecturer', {
      params: {
        data: settingsString,
      },
    });

    return response.data;
  }
}
