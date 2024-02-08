import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import React, { FC, useEffect, useState } from 'react';
import { ReactSVG } from 'react-svg';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { settingsStore } from '../../../store/settingsStore';
import { TTable } from '../../../types/schedule';

import { getCurrentDate } from './constants';
import Row from './Row/Row';

import cl from './Table.module.scss';

import './animation.scss';

interface TableProps {
  scheduleData: TTable;
}

const Table: FC<TableProps> = ({ scheduleData }) => {
  const { settings } = settingsStore;
  const { expandAllDays, expandToday, highlightToday } = settings;
  const [isToday, setIsToday] = useState(false);
  const [isAdditionalInfo, setIsAdditionalInfo] = useState(expandAllDays);

  useEffect(() => {
    const date = getCurrentDate();

    setIsToday(scheduleData[0].date === date);
    setIsAdditionalInfo(shouldExpand());
  }, [scheduleData, expandToday, expandAllDays, highlightToday]);

  const shouldExpand = (): boolean => {
    return expandAllDays || (expandToday && isToday);
  };

  const inputClasses = classNames({
    [cl.wrapper]: true,
    [cl.headerOpen]: isAdditionalInfo,
    [cl.today]: highlightToday && isToday,
  });

  return (
    <div className={inputClasses}>
      <div
        className={cl.header}
        onClick={() => setIsAdditionalInfo((prev) => !prev)}
      >
        {isAdditionalInfo ? (
          <div className={cl.titleWrapper}>
            <p>Пара</p>
            <p>Дисциплина</p>
            <p>Вид</p>
            {window.location.pathname === '/teacher' ? (
              <p>Группа</p>
            ) : (
              <p>Препод</p>
            )}

            <p>Кабинет</p>
          </div>
        ) : (
          <div className={cl.titleWrapper}>
            <p>{scheduleData[0].date}</p>
            <p>{scheduleData[0].day}</p>
            <p>
              {scheduleData[0].lesson} пара в {scheduleData[0].room} кабинете
            </p>
            <p>
              {scheduleData[0].discipline}
              {scheduleData[0].changeStatus ? (
                <span>&nbsp;Изменения!</span>
              ) : (
                ''
              )}
            </p>
            <ReactSVG className={cl.openBtn} src="./svg/input_arrow.svg" />
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
