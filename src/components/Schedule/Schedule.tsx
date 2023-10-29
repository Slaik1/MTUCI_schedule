import React, {useEffect, useState} from 'react';
import cl from "./Schedule.module.scss"
import Header from "./Header/Header";
import Modal from "../UIKit/Modal/Modal";
import Settings from "../Settings/Settings";
import AboutProject from "../AboutProject/AboutProject";
import Table from "./Table/Table";
import ScheduleService from "../../api/ScheduleService";
import {TTableDataList} from "../../types/schedule";

const Schedule = () => {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false)
    const [isAboutProjectOpen , setIsAboutProjectOpen] = useState(false)

    const [scheduleDataList, setScheduleDataList] = useState<TTableDataList>([]);

    useEffect(() => {
        const getSchedule = async () => {
            try {
                const response = await ScheduleService.getSchedule();
                setScheduleDataList(response);
            } catch (error) {
                console.error('Ошибка при получении расписания:', error);
            }
        };

        getSchedule();
    }, []);


    return (
        <div className={cl.wrapper}>
            <Header setIsAboutProjectOpen={setIsAboutProjectOpen} setIsSettingsOpen={setIsSettingsOpen}/>
            <div className="container">
                {
                    scheduleDataList.map((el, i) => <Table scheduleData={el} key={i}/>)
                }


            </div>
            {
                isSettingsOpen &&
                <Modal setIsOpen={setIsSettingsOpen}>
                    <Settings/>
                </Modal>
            }
            {
                isAboutProjectOpen &&
                <Modal setIsOpen={setIsAboutProjectOpen}>
                    <AboutProject/>
                </Modal>
            }
        </div>
    );
};

export default Schedule;