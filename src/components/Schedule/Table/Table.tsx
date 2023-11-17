import React, {FC, useEffect, useState} from 'react'
import classNames from 'classnames'
import {ReactSVG} from 'react-svg'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import {TTable} from '../../../types/schedule'
import {settingsStore} from '../../../store/settingsStore'
import cl from './Table.module.scss'
import Row from './Row/Row'
import {getCurrentDate} from './constants'
import './animation.scss'

interface TableProps {
    scheduleData: TTable
}

const Table: FC<TableProps> = ({scheduleData}) => {

    const {settings} = settingsStore
    const [isToday] = useState(scheduleData[0].date === getCurrentDate())
    const [isAdditionalInfo, setIsAdditionalInfo] = useState(settings.expandAllDays)

    const shouldExpand = (): boolean => {
        return settings.expandAllDays || (settings.expandToday && isToday)
    }

    useEffect(() => {
        setIsAdditionalInfo(shouldExpand())
    }, [settings.expandAllDays, settings.expandToday])

    const inputClasses = classNames({
        [cl.wrapper]: true,
        [cl.header_open]: isAdditionalInfo,
        [cl.today]: settings.highlightToday && isToday
    })

    return (
        <div className={inputClasses}>
            <div className={cl.header} onClick={() => setIsAdditionalInfo((prev) => !prev)}>

                {isAdditionalInfo
                    ?
                    <div className={cl.titleWrapper}>
                        <p>Пара</p>
                        <p>Дисциплина</p>
                        <p>Вид</p>
                        {
                            window.location.pathname === '/teacher'
                                ?
                                <p>Группа</p>
                                :
                                <p>Препод</p>
                        }

                        <p>Кабинет</p>
                    </div>
                    :
                    <div className={cl.titleWrapper}>
                        <p>{scheduleData[0].date}</p>
                        <p>{scheduleData[0].day}</p>
                        <p>{scheduleData[0].lesson} пара в {scheduleData[0].room} кабинете</p>
                        <p>
                            {scheduleData[0].discipline}
                            {
                                scheduleData[0].changeStatus
                                    ?

                                    <span>&nbsp;Изменения!</span>
                                    :
                                    ''
                            }
                        </p>
                        <ReactSVG className={cl.openBtn} src='./svg/input_arrow.svg'/>
                    </div>
                }
            </div>
            <TransitionGroup>
                {
                    isAdditionalInfo &&
                    scheduleData.map((rowData, i) =>
                        <CSSTransition
                            key={i}
                            timeout={200}
                            classNames='drop-item'
                        >
                            <Row data={rowData} key={i}/>
                        </CSSTransition>
                    )
                }
            </TransitionGroup>
        </div>
    )
}

export default Table