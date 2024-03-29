import classNames from 'classnames';
import React, { FC } from 'react';

import styles from './SwitchBtn.module.scss';

interface SwitchBtnProps {
  value: boolean;
  setValue: (value: boolean) => void;
}

const SwitchBtn: FC<SwitchBtnProps> = ({ value, setValue }) => {
  const inputClasses = classNames({
    [styles.switch]: true,
    [styles.active]: value,
  });

  const labelClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setValue(!value);
  };

  return (
    <div className={inputClasses} onClick={labelClickHandler}>
      <input type="checkbox" />
      <div />
    </div>
  );
};

export default SwitchBtn;
