import axios from "axios";
import { TTable } from "../types/schedule";

export default class ScheduleService {
    static async getSchedule(): Promise<TTable> {
        const response = await axios.get("http://192.168.0.107:4200/schedule");
        return JSON.parse(response.data);
    }
}