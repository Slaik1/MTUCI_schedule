import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { settingsStore } from '../../store/settingsStore'
import { ISettings } from '../../types/settings'
import SwitchBtn from '../UIKit/SwitchBtn/SwitchBtn'

import cl from './Settings.module.scss'

export interface SettingsItemProps {
    title: string;
    storeKey: keyof ISettings;
}

const SettingsItem: FC<SettingsItemProps> =  (props) => {
    const {
        title,
        storeKey
    } = props

    const {setSettingsItem, settings} = settingsStore
    return (
        <div className={cl.setting}>
            {title}
            <SwitchBtn
                setValue={(value) => setSettingsItem(storeKey, value)}
                value={!!settings[storeKey]}
            />
        </div>
    )
}

export default observer(SettingsItem)