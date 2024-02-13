import classNames from 'classnames';
import React, { FC, useState } from 'react';
import { ReactSVG } from 'react-svg';

import { useOutsideClick } from '../../../hooks/useOutsideClick';

import DropList from './DropList/DropList';
import { IOption, TOptions } from './selectInput.model';

import styles from './SelectInput.module.scss';

interface SelectInputProps {
  className?: string;
  options: TOptions;
  value: string | number;
  setValue: (value: string | number) => void;
  title: string;
}

const SelectInput: FC<SelectInputProps> = ({
  className = '',
  options,
  value,
  setValue,
  title,
}) => {
  const [isInputActive, setIsInputActive] = useState(false);
  const ref = useOutsideClick(() => setIsInputActive(false));

  const inputClasses = classNames({
    [styles.wrapper]: true,
    [className]: !!className,
    [styles.active]: isInputActive,
  });

  const setGlobalValue = (el: IOption) => setValue(el.value);

  const getCurrentLabel = () => {
    return options.find((el) => el.value === value)?.label;
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <div
        ref={ref}
        className={inputClasses}
        onClick={() => setIsInputActive((prev) => !prev)}
      >
        <p className={styles.input}>{getCurrentLabel()}</p>
        <ReactSVG className={styles.svgArrow} src="./svg/input_arrow.svg" />
        {isInputActive && (
          <DropList
            value={value}
            setValue={setGlobalValue}
            dropListData={options}
          />
        )}
      </div>
    </div>
  );
};

export default SelectInput;
