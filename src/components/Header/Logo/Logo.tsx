import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

import styles from './Logo.module.scss';

const Logo: FC = () => {
  return (
    <Link to="/" className={styles.logoWrapper}>
      <ReactSVG src="svg/header_logo.svg" className={styles.logoIcon}/>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>скф мтуси</h1>
        <p className={styles.text}>Расписание</p>
      </div>
    </Link>
  );
};

export default Logo;