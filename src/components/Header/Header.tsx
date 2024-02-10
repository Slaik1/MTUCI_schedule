import { FC, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

import { useTheme } from '../../hooks/useTheme';
import AboutProject from '../AboutProject/AboutProject';
import Settings from '../Settings/Settings';
import SidePanel from '../SidePanel/SidePanel';
import Modal from '../UIKit/Modal/Modal';

import Logo from './Logo/Logo';

import styles from './Header.module.scss';

const Header: FC = () => {
  const { theme, setTheme } = useTheme();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isAboutProjectOpen, setIsAboutProjectOpen] = useState(false);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const portal: HTMLElement | null = document.getElementById('portal');

  const changeTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <header className={styles.header}>
      <Logo />
      <ul className={styles.linksList}>
        <li>
          <Link to="/teacher">Преподаватели</Link>
        </li>
        <li onClick={() => setIsSettingsOpen(true)}>Настройки</li>
        <li onClick={() => setIsAboutProjectOpen(true)}>О проекте</li>
        {theme === 'light' ? (
          <ReactSVG src="svg/header_moon.svg" onClick={changeTheme} />
        ) : (
          <ReactSVG src="svg/header_sun.svg" onClick={changeTheme} />
        )}
      </ul>
      <ReactSVG
        onClick={() => setIsSidePanelOpen(true)}
        className={styles.burger}
        src="svg/header_burger.svg"
      />
      {isSettingsOpen &&
        portal &&
        createPortal(
          <Modal setIsOpen={setIsSettingsOpen}>
            <Settings />
          </Modal>,
          portal
        )}
      {isAboutProjectOpen &&
        portal &&
        createPortal(
          <Modal setIsOpen={setIsAboutProjectOpen}>
            <AboutProject />
          </Modal>,
          portal
        )}
      {isSidePanelOpen && (
        <SidePanel
          setIsSettings={setIsSettingsOpen}
          setIsSAbout={setIsAboutProjectOpen}
          theme={theme}
          changeTheme={changeTheme}
          setIsOpen={setIsSidePanelOpen}
          isOpen={isSidePanelOpen}
        />
      )}
    </header>
  );
};

export default Header;
