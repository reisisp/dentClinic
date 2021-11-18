import React from 'react';
import styles from './Card.module.scss';


export const Card = (props) => {
    return (
        <div className={styles.box}>
            <div className={styles.card}>
                <img className={styles.card__img} src={props.card.imgPath || 'http://placehold.it/140x140'} alt='icon' />
                <p className={styles.card__description}>{props.card.imgDescription || 'Описание'}</p>
            </div>
        </div>
    );
};
