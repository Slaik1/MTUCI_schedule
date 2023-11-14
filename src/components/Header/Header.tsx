import React, {FC, useState} from 'react'
import {ReactSVG} from 'react-svg'
import {useTheme} from '../../hooks/useTheme'
import cl from './Header.module.scss'
import Modal from "../UIKit/Modal/Modal";
import Settings from "../Settings/Settings";
import AboutProject from "../AboutProject/AboutProject";
import {createPortal} from "react-dom";
import {Link} from "react-router-dom";


const Header: FC = () => {

    const {theme, setTheme} = useTheme()
    const [isSettingsOpen, setIsSettingsOpen] = useState(false)
    const [isAboutProjectOpen, setIsAboutProjectOpen] = useState(false)

    const portal: HTMLElement | null = document.getElementById('portal')

    const changeTheme = () => {
        setTheme((prev) => prev === 'light' ? 'dark' : 'light')
    }

    return (
        <header className={cl.header}>
            <Link to='/' className={cl.logo_wrapper}>
                <ReactSVG src='svg/header_logo.svg'/>
                <div className={cl.title}>
                    <h1>СКФ МТУСИ</h1>
                    <p>Рассписание</p>
                </div>
            </Link>
            <ul className={cl.links_list}>
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
            <ReactSVG src='svg/header_burger.svg'/>
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
        </header>

    )
}

export default Header