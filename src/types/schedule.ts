import {DaysOfWeek} from '../components/Schedule/Table/constants'

export interface IRow {
    date: string;
    day: keyof typeof DaysOfWeek;
    discipline: string;
    lesson: string;
    room:string;
    teacher:string;
    type: string;
}

export type TTable = IRow[]

export type TTableDataList = TTable[]