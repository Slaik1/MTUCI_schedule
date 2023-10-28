import React, {useState} from 'react';
import cl from "./Schedule.module.scss"
import Header from "./Header/Header";
import Modal from "../UIKit/Modal/Modal";
import Settings from "../Settings/Settings";

const Schedule = () => {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false)

    return (
        <div className={cl.wrapper}>
            <Header setIsSettingsOpen={setIsSettingsOpen}/>
            <div className="container">
                {/*<Table/>*/}

            </div>
            {
                isSettingsOpen &&
                <Modal setIsOpen={setIsSettingsOpen}>
                    <Settings/>
                </Modal>
            }
        </div>
    );
};

export default Schedule;