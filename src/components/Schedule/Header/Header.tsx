import React, {FC} from 'react'
import {ReactSVG} from 'react-svg'
import {useTheme} from '../../../hooks/useTheme'
import cl from './Header.module.scss'

interface HeaderProps {
    setIsSettingsOpen: SetAction<boolean>;
    setIsAboutProjectOpen: SetAction<boolean>;
}

const Header: FC<HeaderProps> = ({setIsSettingsOpen, setIsAboutProjectOpen}) => {

    const {theme, setTheme} = useTheme()

    const changeTheme = () => {
        setTheme((prev) => prev === 'light' ? 'dark' : 'light')
    }

    return (
        <header className={cl.header}>
            <div className={cl.logo_wrapper}>
                <ReactSVG src='svg/header_logo.svg'/>
                <div className={cl.title}>
                    <h1>СКФ МТУСИ</h1>
                    <p>Рассписание</p>
                </div>
            </div>
            <ul className={cl.links_list}>
                <li onClick={() => setIsSettingsOpen(true)}>Настройки</li>
                <li onClick={() => setIsAboutProjectOpen(true)}>О проекте</li>
                {theme === 'light'
                    ?
                    <ReactSVG src='svg/header_moon.svg' onClick={changeTheme}/>
                    :
                    <ReactSVG src='svg/header_sun.svg' onClick={changeTheme}/>
                }
            </ul>
        </header>
    )
}

export default Header