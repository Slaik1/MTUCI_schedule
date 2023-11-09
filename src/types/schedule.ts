
export interface IRow {
    date: string;
    day: string;
    discipline: string;
    lesson: string;
    room:string;
    teacher:string;
    type: string;
}

export type TTable = IRow[]

export type TTableDataList = TTable[]