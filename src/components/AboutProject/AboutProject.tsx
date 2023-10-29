import React, {FC} from 'react';
import cl from "./AboutProject.module.scss"
import {ReactSVG} from "react-svg";

const AboutProject:FC = () => {
    return (
        <div className={cl.wrapper}>
            <p className={cl.text}>
                Данный web сервис разработан для упрощения
                просмотра рассписания пар университета СКФ МТУСИ.
            </p>
            <div className={cl.icons}>
                <ReactSVG src="./svg/about/react.svg"/>
                <ReactSVG src="./svg/about/typescript.svg"/>
                <ReactSVG src="./svg/about/mobx.svg"/>
                <ReactSVG src="./svg/about/sass.svg"/>
            </div>
        </div>
    );
};

export default AboutProject;