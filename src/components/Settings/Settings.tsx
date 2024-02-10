import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';

import { settingsStore } from '../../store/settingsStore';
import SelectInput from '../UIKit/SelectInput/SelectInput';

import {
  DAY_LENGTH_INPUT_DATA,
  GROUP_INPUT_DATA,
  settingsList,
  SPECIALIZATION_INPUT_DATA,
} from './constants';
import SettingsItem from './settingsItem';

import styles from './Settings.module.scss';

const Settings: FC = () => {
  const { settings, setSettingsItem } = settingsStore;

  return (
    <div className={styles.wrapper}>
      <h1>Настройки</h1>
      <SelectInput
        value={settings.specialization}
        setValue={(value) => setSettingsItem('specialization', String(value))}
        options={SPECIALIZATION_INPUT_DATA}
        className={styles.input}
        title={'Направление подготовки'}
      />
      <SelectInput
        value={settings.group}
        setValue={(value) => setSettingsItem('group', String(value))}
        options={GROUP_INPUT_DATA[settings.specialization]}
        className={styles.input}
        title={'Группа'}
      />
      <SelectInput
        value={settings.scheduleLength}
        setValue={(value) => setSettingsItem('scheduleLength', Number(value))}
        options={DAY_LENGTH_INPUT_DATA}
        className={styles.input}
        title={'Количество дней в расписании'}
      />
      <div className={styles.settingsList}>
        {settingsList.map((el, i) => (
          <SettingsItem title={el.title} storeKey={el.storeKey} key={i} />
        ))}
      </div>
    </div>
  );
};

export default observer(Settings);
