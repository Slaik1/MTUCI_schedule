import React from 'react';
import cl from "./Schedule.module.scss"
import Header from "./Header/Header";
import Table from "./Table/Table";

const Schedule = () => {
    return (
        <div className={cl.wrapper}>
            <Header/>
            <div className="container">
                {/*<Table/>*/}

            </div>
        </div>
    );
};

export default Schedule;