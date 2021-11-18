import React from 'react';
import styles from './Footer.module.scss';


export const Footer = () => {
    const imgPath = (imgName) => require(`../../../assets/img/${imgName}`).default;

    return (
        <div className={styles.box}>
            <div className={styles.info}>
                <div className={styles.info__worktime}>
                    <img src={imgPath('customIcons/clock.svg')} alt='clock' />
                    <p className={styles.info__text}>Работаем с 9 до 21 без выходных<br />и праздничных дней</p>
                </div>
                <div className={styles.info__address}>
                    <img src={imgPath('customIcons/map.svg')} alt='clock' />
                    <p className={styles.info__text}>м.Беговая<br />ул. 3-й Хорошёвский проезд, д.4</p>
                </div>
            </div>
        </div>
    );
};
