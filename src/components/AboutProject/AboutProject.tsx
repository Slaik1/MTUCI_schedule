import { FC } from 'react';
import { ReactSVG } from 'react-svg';

import styles from './AboutProject.module.scss';

const AboutProject: FC = () => {
  return (
    <div className={styles.wrapper}>
      <h1>О проекте</h1>
      <p className={styles.text}>
        Данный web сервис разработан для упрощения просмотра расписания пар
        университета СКФ МТУСИ. Если вы увидели некорректную работу сообщите о
        ней. Это улучшит работу сайта.
      </p>
      <a href="https://github.com/Slaik1/MTUCI_schedule/issues">
        Сообщить об ошибке
      </a>
      <div className={styles.icons}>
        <ReactSVG src="./svg/about/react.svg" />
        <ReactSVG src="./svg/about/typescript.svg" />
        <ReactSVG src="./svg/about/mobx.svg" />
        <ReactSVG src="./svg/about/sass.svg" />
      </div>
    </div>
  );
};

export default AboutProject;
