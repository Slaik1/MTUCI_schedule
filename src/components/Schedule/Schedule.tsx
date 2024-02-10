import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';

import ScheduleService from '../../api/ScheduleService';
import { settingsStore } from '../../store/settingsStore';
import { TTableDataList } from '../../types/schedule';

import Table from './Table/Table';
import TableLoader from './TableLoader/TableLoader';

import styles from './Schedule.module.scss';

const scheduleService = new ScheduleService();

const Schedule = () => {
  const [scheduleDataList, setScheduleDataList] = useState<TTableDataList>();
  const [isLoader, setIsLoader] = useState(true);
  const { settings } = settingsStore;
  const { group, scheduleLength, hideAdditionalTeacher, setTodayStart } =
    settings;
  const fetchSchedule = async () => {
    try {
      const response = await scheduleService.getSchedule();

      setScheduleDataList(response);
    } catch (error) {
      console.log('error', error);
    } finally {
      setIsLoader(false);
    }
  };

  useEffect(() => {
    fetchSchedule();
  }, [group, scheduleLength, hideAdditionalTeacher, setTodayStart]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {scheduleDataList ? (
          scheduleDataList.map((el, i) => <Table scheduleData={el} key={i} />)
        ) : (
          <TableLoader />
        )}
      </div>
    </div>
  );
};

export default observer(Schedule);
