import React, {FC, useEffect, useState} from 'react'

import {createPortal} from 'react-dom'
import {Link} from 'react-router-dom'
import {ReactSVG} from 'react-svg'
import Settings from '../Settings/Settings'
import AboutProject from '../AboutProject/AboutProject'
import Modal from '../UIKit/Modal/Modal'
import {useTheme} from '../../hooks/useTheme'
import cl from './SidePanel.module.scss'

interface SidePanelProps {
    setIsOpen: SetAction<boolean>;
}

const SidePanel: FC<SidePanelProps> = ({setIsOpen}) => {

    const {theme, setTheme} = useTheme()
    const [isSettingsOpen, setIsSettingsOpen] = useState(false)
    const [isAboutProjectOpen, setIsAboutProjectOpen] = useState(false)
    const portal: HTMLElement | null = document.getElementById('portal')

    const changeTheme = () => {
        setTheme((prev) => prev === 'light' ? 'dark' : 'light')
    }

    useEffect(() => {
        // document.body.style.overflow = 'hidden'
    }, [])


    const closePanel = (event: React.MouseEvent) => {
        event.stopPropagation()
        setIsOpen(false)
        // document.body.style.overflow = 'auto'
    }

    const openSettings = (event:React.MouseEvent) => {
        closePanel(event)
        setIsSettingsOpen(true)
    }

    return (
        <div className={cl.container} onClick={(event) => closePanel(event)}>
            <div className={cl.wrapper} onClick={(event) => event.stopPropagation()}>
                <ul>
                    <li onClick={(event) => closePanel(event)}>
                        <Link to='/teacher'>
                            <ReactSVG src='svg/sidePanel_teacher.svg'/>
                            Преподаватели
                        </Link>
                    </li>
                    <li onClick={(event) => openSettings(event)}>
                        <ReactSVG src='svg/sidePanel_settings.svg'/>
                        Настройки
                    </li>
                    <li onClick={() => setIsAboutProjectOpen(true)}>
                        <ReactSVG src='svg/sidePanel_lamp.svg'/>
                        О проекте
                    </li>
                    {theme === 'light'
                        ?
                        <ReactSVG className={cl.theme} src='svg/header_moon.svg' onClick={changeTheme}/>
                        :
                        <ReactSVG className={cl.theme} src='svg/header_sun.svg' onClick={changeTheme}/>
                    }
                </ul>
            </div>
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
        </div>
    )
}

export default SidePanel