import React from 'react';
import styles from './Slide.module.scss';


export const Slide = (props) => {
    const slide = props.slide;

    return (
        <div className={styles.box}>
            <div className={styles.card}>
                <div className={styles.card__img}>
                    <img src={slide.imgUrl} alt="userimg" />
                </div>
                <div className={styles.card__content}>
                    <h3 className={styles.name}>{slide.name}</h3>
                    <p className={styles.comment}>{slide.content}</p>
                    <div className={styles.date}><p className={styles.date__text}>{slide.date}</p></div>
                </div>
            </div>
        </div>
    );
};
