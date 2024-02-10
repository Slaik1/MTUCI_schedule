import classNames from 'classnames';
import React, { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

import styles from './SidePanel.module.scss';

interface SidePanelProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  setIsSettings: (value: boolean) => void;
  setIsSAbout: (value: boolean) => void;
  theme: string;
  changeTheme: () => void;
}

const SidePanel: FC<SidePanelProps> = ({
  isOpen,
  setIsOpen,
  setIsSettings,
  setIsSAbout,
  theme,
  changeTheme,
}) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      console.log('hodden');
    }, 300);

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const inputClasses = classNames({
    [styles.container]: isOpen,
    [styles.active]: isOpen,
  });
  const closePanel = (event?: React.MouseEvent) => {
    event && event.stopPropagation();
    setIsOpen(false);
  };

  const openSettings = () => {
    closePanel();
    setIsSettings(true);
  };

  const openAbout = () => {
    closePanel();
    setIsSAbout(true);
  };

  return (
    <div className={inputClasses} onClick={(event) => closePanel(event)}>
      <div className={styles.wrapper} onClick={(event) => event.stopPropagation()}>
        <ul>
          <li onClick={(event) => closePanel(event)}>
            <Link to="/teacher">
              <ReactSVG src="svg/sidePanel_teacher.svg" />
              Преподаватели
            </Link>
          </li>
          <li onClick={openSettings}>
            <ReactSVG src="svg/sidePanel_settings.svg" />
            Настройки
          </li>
          <li onClick={openAbout}>
            <ReactSVG src="svg/sidePanel_lamp.svg" />О проекте
          </li>
          {theme === 'light' ? (
            <ReactSVG
              className={styles.theme}
              src="svg/header_moon.svg"
              onClick={changeTheme}
            />
          ) : (
            <ReactSVG
              className={styles.theme}
              src="svg/header_sun.svg"
              onClick={changeTheme}
            />
          )}
        </ul>
      </div>
    </div>
  );
};

export default SidePanel;
