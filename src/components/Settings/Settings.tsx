import React from 'react';
import cl from "./Settings.module.scss"
import SwitchBtn from "../UIKit/SwitchBtn/SwitchBtn";

const Settings = () => {
    return (
        <div className={cl.wrapper}>
            <h1>Настройки</h1>
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

export default Settings;