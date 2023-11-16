import React, {FC, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {ReactSVG} from 'react-svg'
import classNames from 'classnames'
import cl from './SidePanel.module.scss'
import './animation.scss'

interface SidePanelProps {
    isOpen: boolean;
    setIsOpen: (value:boolean) => void;
    isSettings: boolean;
    setIsSettings: (value:boolean) => void;
    isAbout: boolean;
    setIsSAbout: (value:boolean) => void;
    theme: string;
    changeTheme: () => void;
}

const SidePanel: FC<SidePanelProps> = ({isOpen, setIsOpen, isSettings, setIsSettings, isAbout, setIsSAbout, theme, changeTheme}) => {

    useEffect(() =>  {
        document.body.style.overflow = 'hidden'
        setTimeout(() => {}, 300)
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [])

    const inputClasses = classNames({
        [cl.container]: isOpen,
        [cl.active]: isOpen,
    })
    const closePanel = (event?:React.MouseEvent) => {
        event &&
            event.stopPropagation()
        setIsOpen(false)
    }

    const openSettings = () => {
        closePanel()
        setIsSettings(true)
    }

    const openAbout = () => {
        closePanel()
        setIsSAbout(true)
    }

    return (
        <div className={inputClasses} onClick={(event) => closePanel(event)}>
            <div className={cl.wrapper} onClick={(event) => event.stopPropagation()}>
                <ul>
                    <li onClick={(event) => closePanel(event)}>
                        <Link to='/teacher'>
                            <ReactSVG src='svg/sidePanel_teacher.svg'/>
                            Преподаватели
                        </Link>
                    </li>
                    <li onClick={openSettings}>
                        <ReactSVG src='svg/sidePanel_settings.svg'/>
                        Настройки
                    </li>
                    <li onClick={openAbout}>
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
        </div>
    )
}

export default SidePanel