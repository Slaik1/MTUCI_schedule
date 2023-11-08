import React, {FC} from 'react'
import {observer} from 'mobx-react-lite'

import SelectInput from '../UIKit/SelectInput/SelectInput'
import SwitchBtn from '../UIKit/SwitchBtn/SwitchBtn'

import {settingsStore} from '../../store/settingsStore'
import cl from './Settings.module.scss'
import {DAY_LENGTH_INPUT_DATA, GROUP_INPUT_DATA, SPECIALIZATION_INPUT_DATA} from './constants'
import SettingsItem, { SettingsItemProps } from './settingsItem'

const settingsList: SettingsItemProps[] = [
    {
        title: 'Подсвечивать сегодняшний день',
        storeKey: 'highlightToday'
    },
    {
        title: 'Сегодняшний день в начале',
        storeKey: 'setTodayStart'
    },
    {
        title: 'Развернуть сегодняшний день',
        storeKey: 'expandToday'
    },
    {
        title: 'Развернуть все дни',
        storeKey: 'expandAllDays'
    },
]


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
                {settingsList.map((el) => 
                    <SettingsItem 
                        title={el.title}
                        storeKey={el.storeKey}
                    />
                )}
            </div>
        </div>
    )
}

export default observer(Settings)