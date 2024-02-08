import React, {FC, useState} from 'react'
import {ReactSVG} from 'react-svg'
import {createPortal} from 'react-dom'
import {Link} from 'react-router-dom'
import Modal from '../UIKit/Modal/Modal'
import Settings from '../Settings/Settings'
import AboutProject from '../AboutProject/AboutProject'
import {useTheme} from '../../hooks/useTheme'
import SidePanel from '../SidePanel/SidePanel'
import cl from './Header.module.scss'

const Header: FC = () => {

    const {theme, setTheme} = useTheme()
    const [isSettingsOpen, setIsSettingsOpen] = useState(false)
    const [isAboutProjectOpen, setIsAboutProjectOpen] = useState(false)
    const [isSidePanelOpen, setIsSidePanelOpen] = useState(false)
    const portal: HTMLElement | null = document.getElementById('portal')

    const changeTheme = () => {
        setTheme((prev) => prev === 'light' ? 'dark' : 'light')
    }

    return (
        <header className={cl.header}>
            <Link to='/' className={cl.logoWrapper}>
                <ReactSVG src='svg/header_logo.svg'/>
                <div className={cl.title}>
                    <h1>СКФ МТУСИ</h1>
                    <p>Расписание</p>
                </div>
            </Link>
            <ul className={cl.linksList}>
                <li><Link to='/teacher'>Преподаватели</Link></li>
                <li onClick={() => setIsSettingsOpen(true)}>Настройки</li>
                <li onClick={() => setIsAboutProjectOpen(true)}>О проекте</li>
                {theme === 'light'
                    ?
                    <ReactSVG src='svg/header_moon.svg' onClick={changeTheme}/>
                    :
                    <ReactSVG src='svg/header_sun.svg' onClick={changeTheme}/>
                }
            </ul>
            <ReactSVG onClick={() => setIsSidePanelOpen(true)} className={cl.burger} src='svg/header_burger.svg'/>
            {
                isSettingsOpen && portal &&
                createPortal(
                    <Modal setIsOpen={setIsSettingsOpen}>
                        <Settings/>
                    </Modal>,
                    portal
                )
            }
            {
                isAboutProjectOpen && portal &&
                createPortal(
                    <Modal setIsOpen={setIsAboutProjectOpen}>
                        <AboutProject/>
                    </Modal>,
                    portal
                )
            }
            {
                isSidePanelOpen &&
                <SidePanel
                    setIsSettings={setIsSettingsOpen}
                    setIsSAbout={setIsAboutProjectOpen}
                    theme={theme}
                    changeTheme={changeTheme}
                    setIsOpen={setIsSidePanelOpen}
                    isOpen={isSidePanelOpen}
                />
            }
        </header>

    )
}

export default Header