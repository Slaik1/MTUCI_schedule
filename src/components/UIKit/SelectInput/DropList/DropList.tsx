import React, { FC } from 'react';

import { TOptions } from '../selectInput.model';

import cl from './DropList.module.scss';

interface DropListProps {
  dropListData: TOptions;
  setValue: SetAction<string>;
  value: string | number;
}

const DropList: FC<DropListProps> = ({ dropListData, setValue, value }) => {
  return (
    <div className={cl.dropList}>
      {dropListData.map((el, i) => (
        <div
          key={i}
          className={`${cl.dropItem} + ${value === el.value ? cl.active : ''}`} // нужен classnames
          onClick={() => setValue(el)}
        >
          {el.label}
        </div>
      ))}
    </div>
  );
};

export default DropList;
