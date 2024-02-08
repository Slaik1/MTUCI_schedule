import React, {FC} from 'react'
import {observer} from 'mobx-react-lite'
import SelectInput from '../UIKit/SelectInput/SelectInput'
import {settingsStore} from '../../store/settingsStore'
import cl from './Settings.module.scss'
import {DAY_LENGTH_INPUT_DATA, GROUP_INPUT_DATA, settingsList, SPECIALIZATION_INPUT_DATA} from './constants'
import SettingsItem from './settingsItem'

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
                title={'Количество дней в расписании'}
            />
            <div className={cl.settingsList}>
                {settingsList.map((el,i ) =>
                    <SettingsItem 
                        title={el.title}
                        storeKey={el.storeKey}
                        key={i}
                    />
                )}
            </div>
        </div>
    )
}

export default observer(Settings)