import {TOptions} from "../UIKit/SelectInput/selectInput.model";
import {settingsStore} from "../../store/settingsStore";

const {setSettingsItem} = settingsStore

export const INPUT_DATA: TOptions = [
    {
        value: 1,
        label: '1'
    },
    {
        value: 10,
        label: '10'
    },
    {
        value: 20,
        label: '20'
    },
    {
        value: 30,
        label: '30'
    },
    {
        value: 1000,
        label: 'Всё рассписание'
    }
]
export const inputHandler = (value: string | number) => {
    setSettingsItem('scheduleLength', Number(value))
}