import {ISettings} from "../types/settings";

export const getSettingsFromStorage = (key: string): ISettings => {
    const data: string | null = localStorage.getItem(key)

    if (data === null) {
        const defaultSettings: ISettings = {
            scheduleLength: 10,
            highlightToday: true,
            expandToday: true,
            expandAllDays: false,
            specialization: 'ivt',
            group:'ДП-41'
        }
        setStorageSettings(key, defaultSettings)
        return defaultSettings
    }

    return JSON.parse(data)
}

export const setStorageSettings = (key: string, data: ISettings): void => {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(key, jsonData);
}