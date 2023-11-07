import React, {FC} from 'react'
import {observer} from 'mobx-react-lite'
import SelectInput from '../UIKit/SelectInput/SelectInput'
import SwitchBtn from '../UIKit/SwitchBtn/SwitchBtn'
import {settingsStore} from '../../store/settingsStore'
import cl from './Settings.module.scss'
import {DAY_LENGTH_INPUT_DATA, DAY_PLACE, GROUP_INPUT_DATA, SPECIALIZATION_INPUT_DATA} from './constants'


const Settings: FC = () => {
    const {settings, setSettingsItem} = settingsStore

    return (
        <div className={cl.wrapper}>
            <h1>Настройки</h1>
            <SelectInput
                value={settings.specialization}
                setValue={(value) => setSettingsItem('specialization', String(value))}
                options={SPECIALIZATION_INPUT_DATA}
                className={cl.input}
                title={'Направление подготовки'}
            />
            <SelectInput
                value={settings.group}
                setValue={(value) => setSettingsItem('group', String(value))}
                options={GROUP_INPUT_DATA[settings.specialization]}
                className={cl.input}
                title={'Группа'}
            />
            <SelectInput
                value={settings.scheduleLength}
                setValue={(value) => setSettingsItem('scheduleLength', Number(value))}
                options={DAY_LENGTH_INPUT_DATA}
                className={cl.input}
                title={'Количество дней в рассписании'}
            />
            <div className={cl.settings_list}>
                <div className={cl.setting}>
                    Подсвечивать сегодняшний день
                    <SwitchBtn
                        setValue={(value) => setSettingsItem('highlightToday', value)}
                        value={settings.highlightToday}
                    />
                </div>
                <div className={cl.setting}>
                    Сегодняшний день в начале
                    <SwitchBtn
                        setValue={(value) => setSettingsItem('setTodayStart', value)}
                        value={settings.setTodayStart}
                    />
                </div>
                <div className={cl.setting}>
                    Развернуть сегодняшний день
                    <SwitchBtn
                        setValue={(value) => setSettingsItem('expandToday', value)}
                        value={settings.expandToday}
                    />
                </div>
                <div className={cl.setting}>
                    Развернуть все дни
                    <SwitchBtn
                        setValue={(value) => setSettingsItem('expandAllDays', value)}
                        value={settings.expandAllDays}
                    />
                </div>

            </div>
        </div>
    )
}

export default observer(Settings)