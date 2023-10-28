import {makeAutoObservable} from "mobx";
import {getSettingsFromStorage, setStorageSettings} from "../helpers/localStorageService";
import {ISettings} from "../types/settings";

class SettingsStore {
    settings: ISettings

    constructor() {
        this.settings = getSettingsFromStorage('MTUSISchedule')
        makeAutoObservable(this)
    }

    setSettingsItem = <K extends keyof ISettings>(key: K, value: ISettings[K]): void => {
        this.settings[key] = value
        setStorageSettings('MTUSISchedule', this.settings)
    }
}

export const settingsStore = new SettingsStore()