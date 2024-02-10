import React, { FC } from 'react';

import { IRow } from '../../../../types/schedule';

import styles from './Row.module.scss';
interface RowProps {
  data: IRow;
}

const Row: FC<RowProps> = ({ data }) => {
  return (
    <div className={styles.row}>
      <p>{data.lesson}</p>
      <p>{data.discipline}</p>
      <p>{data.type}</p>
      <p>{data.teacher}</p>
      {data.changeStatus ? <p>{data.changeStatus}</p> : <p>{data.room}</p>}
    </div>
  );
};

export default Row;
