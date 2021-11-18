import React from 'react';
import styles from './Slide.module.scss';
import cn from 'classnames';
import { Btn } from '../../UI/button/PromoBtn/PromoBtn';


export const Slide = (props) => {
    return (
        <div className={styles.slider}>
            <div className={styles.slide__box}>
                <div className={styles.slide}>
                    <img className={styles.slide__img} src={props.slide.promoImg || 'http://placehold.it/360x464'} alt="#" />
                    <div className={styles.slide__info}>
                        <h2 className={styles.slide__name}>{props.slide.promoName}</h2>
                        <p className={cn(styles.slide__desc, styles.desc__position)}>{props.slide.promoDesc}</p>
                        <h2 className={cn(styles.slide__price, styles.price__position)}>
                            <span className={styles.slide__price_old}>{props.slide.price}</span>&nbsp;<span>{props.slide.promoPrice}</span>
                        </h2>
                        <Btn>{props.slide.actonName}</Btn>
                    </div>
                </div>
            </div>
            <p
                className={styles.slide__gradient}
                onClick={props.click}>
                <img
                    className={cn(styles.slide__img, styles.slider__img)}
                    src={props.img}
                    alt="next-slide"
                />
            </p>
        </div>
    );
};
