import React from 'react';
import { Btn } from '../../UI/button/Btn';
import cn from 'classnames';
import styles from './Body.module.scss';


export const Body = () => {
    return (
        <div className={styles.card}>
            <h3 className={styles.card__name}>Современная&nbsp;стоматология&nbsp;«Зубная&nbsp;формула»</h3>
            <h1 className={cn(styles.card__slogan, styles.slogan__positon)}>Ваша улыбка -<br />наша забота!</h1>
            <Btn>Записаться на бесплатный приём</Btn>
        </div>
    );
};
