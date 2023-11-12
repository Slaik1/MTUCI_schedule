import React, {FC} from 'react'
import {ReactSVG} from 'react-svg'
import cl from './AboutProject.module.scss'

const AboutProject:FC = () => {
    return (
        <div className={cl.wrapper}>
            <h1>О проекте</h1>
            <p className={cl.text}>
                Данный web сервис разработан для упрощения
                просмотра рассписания пар университета СКФ МТУСИ.
                Если вы увидели некорректную работу сайта сообщите о ней. Это улучшит работу сайта.
            </p>
            <a href='https://github.com/Slaik1/MTUCI_schedule/issues'>Сообщить об ошибке</a>
            <div className={cl.icons}>
                <ReactSVG src='./svg/about/react.svg'/>
                <ReactSVG src='./svg/about/typescript.svg'/>
                <ReactSVG src='./svg/about/mobx.svg'/>
                <ReactSVG src='./svg/about/sass.svg'/>
            </div>
        </div>
    )
}

export default AboutProject