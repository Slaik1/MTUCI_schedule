import React, {FC} from 'react';
import cl from "./Header.module.scss"
import { ReactSVG } from 'react-svg';


const Header:FC = () => {
    return (
        <header className={cl.header}>
            <div className={cl.logo_wrapper}>
                <ReactSVG src="svg/header_logo.svg"/>
                <div className={cl.title}>
                    <h1>СКФ МТУСИ</h1>
                    <p>Рассписание</p>
                </div>
            </div>
            <ul className={cl.links_list}>
                <li>Настройки</li>
                <li>О проекте</li>
            </ul>
        </header>
    );
};

export default Header;