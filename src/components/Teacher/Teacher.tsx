import { observer } from 'mobx-react-lite';
import { FC, useEffect, useState } from 'react';

import ScheduleService from '../../api/ScheduleService';
import { settingsStore } from '../../store/settingsStore';
import { TTableDataList } from '../../types/schedule';
import Table from '../Schedule/Table/Table';
import TableLoader from '../Schedule/TableLoader/TableLoader';
import SelectInput from '../UIKit/SelectInput/SelectInput';

import { TEACHERS } from './constants';

import styles from './Teacher.module.scss';

const scheduleService = new ScheduleService();

const Teacher: FC = () => {
  const { settings, setSettingsItem } = settingsStore;
  const [teacherSchedule, setTeacherSchedule] = useState<TTableDataList>();
  const [isLoader, setIsLoader] = useState(true);
  const fetchTeacherSchedule = async () => {
    try {
      const response = await scheduleService.getTeacherSchedule(
        settings.teacher
      );

      setTeacherSchedule(response);
    } catch (error) {
      console.log('error', error);
    } finally {
      setIsLoader(false);
    }
  };

  useEffect(() => {
    fetchTeacherSchedule();
  }, [settings.teacher, settings.setTodayStart]);

  return (
    <div className={styles.wrapper}>
      <SelectInput
        className={styles.input}
        options={TEACHERS}
        value={settings.teacher}
        setValue={(value) => setSettingsItem('teacher', String(value))}
        title={'Выберите преподавателя'}
      />
      {teacherSchedule ? (
        teacherSchedule.map((el, i) => <Table scheduleData={el} key={i} />)
      ) : (
        <TableLoader />
      )}
      {teacherSchedule?.length === 0 && <p>Расписание отсутствует</p>}
    </div>
  );
};

export default observer(Teacher);
