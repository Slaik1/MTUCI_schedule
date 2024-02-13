import React, { FC } from 'react';

import { TOptions } from '../selectInput.model';

import styles from './DropList.module.scss';

interface DropListProps {
  dropListData: TOptions;
  setValue: SetAction<string>;
  value: string | number;
}

const DropList: FC<DropListProps> = ({ dropListData, setValue, value }) => {
  return (
    <div className={styles.dropList}>
      {dropListData.map((el, i) => (
        <div
          key={i}
          className={`${styles.dropItem} + ${value === el.value ? styles.active : ''}`} // нужен classnames
          onClick={() => setValue(el)}
        >
          {el.label}
        </div>
      ))}
    </div>
  );
};

export default DropList;
