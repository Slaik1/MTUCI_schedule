import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import { FC, useEffect, useState } from 'react';
import { ReactSVG } from 'react-svg';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { settingsStore } from '../../../store/settingsStore';
import { TTable } from '../../../types/schedule';

import { getCurrentDate } from './constants';
import Row from './Row/Row';

import styles from './Table.module.scss';

import './animation.scss';

interface TableProps {
  scheduleData: TTable;
}

const Table: FC<TableProps> = ({ scheduleData }) => {
  const { settings } = settingsStore;
  const { expandAllDays, expandToday, highlightToday } = settings;
  const [isToday, setIsToday] = useState(false);
  const [isAdditionalInfo, setIsAdditionalInfo] = useState(false);

  useEffect(() => {
    const date = getCurrentDate();

    setIsToday(scheduleData[0].date === date);

    setIsAdditionalInfo(expandAllDays || (isToday && expandToday));
  }, [scheduleData, expandToday, expandAllDays, highlightToday, isToday]);


  const inputClasses = classNames({
    [styles.wrapper]: true,
    [styles.headerOpen]: isAdditionalInfo,
    [styles.today]: highlightToday && isToday,
  });

  const headerStyles = classNames({
    [styles.header]: true,
    [styles.headerAdditionalInfo]:
      isAdditionalInfo || scheduleData[0].changeStatus,
  });

  const changesStyles = classNames({
    [styles.changes]: true,
    [styles.changesIsToday]: isToday,
  });

  return (
    <div className={inputClasses}>
      <div
        className={styles.additionalInfo}
        onClick={() => setIsAdditionalInfo((prev) => !prev)}
      >
        {isAdditionalInfo && (
          <p className={styles.date}>{scheduleData[0].date}</p>
        )}

        {scheduleData[0].changeStatus && !isAdditionalInfo && (
          <p className={changesStyles}>Изменения</p>
        )}
      </div>

      <div
        className={headerStyles}
        onClick={() => setIsAdditionalInfo((prev) => !prev)}
      >
        {isAdditionalInfo ? (
          <div className={styles.titleWrapper}>
            <p>Пара</p>
            <p>Дисциплина</p>
            <p>Вид</p>
            {window.location.pathname === '/teacher' ? (
              <p>Группа</p>
            ) : (
              <p>Преподаватель</p>
            )}

            <p>Кабинет</p>
          </div>
        ) : (
          <div className={styles.titleWrapper}>
            <p>{scheduleData[0].date}</p>
            <p>{scheduleData[0].day}</p>
            <p>
              {scheduleData[0].lesson} пара в {scheduleData[0].room} кабинете
            </p>
            <p>{scheduleData[0].discipline}</p>
            <ReactSVG className={styles.openBtn} src="./svg/input_arrow.svg" />
          </div>
        )}
      </div>
      <TransitionGroup>
        {isAdditionalInfo &&
          scheduleData.map((rowData, i) => (
            <CSSTransition key={i} timeout={200} classNames="drop-item">
              <Row data={rowData} key={i} />
            </CSSTransition>
          ))}
      </TransitionGroup>
    </div>
  );
};

export default observer(Table);
