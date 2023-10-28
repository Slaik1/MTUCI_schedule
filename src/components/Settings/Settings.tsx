import React from 'react';
import cl from "./Settings.module.scss"
import SwitchBtn from "../UIKit/SwitchBtn/SwitchBtn";
import SelectInput from "../UIKit/SelectInput/SelectInput";
import {observer} from "mobx-react-lite";
import {settingsStore} from "../../store/settingsStore";
import {INPUT_DATA} from "./constants";


const Settings = () => {
    const {settings, setSettingsItem} = settingsStore

    const inputHandler = (value: string | number) => {
        setSettingsItem('scheduleLength', Number(value))
    }

    return (
        <div className={cl.wrapper}>
            <h1>Настройки</h1>
            <SelectInput
                value={settings.scheduleLength}
                setValue={inputHandler}
                options={INPUT_DATA}
                className={cl.input}
            />
            <div className={cl.settings_list}>
                <div className={cl.setting}>
                    Подсвечивать сегодняшний день
                    <SwitchBtn/>
                </div>
                <div className={cl.setting}>
                    Развернуть сегодняшний день
                    <SwitchBtn/>
                </div>
                <div className={cl.setting}>
                    Развернуть все дни
                    <SwitchBtn/>
                </div>
            </div>
        </div>
    );
};

export default observer(Settings);