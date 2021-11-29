import React from 'react';
import cn from 'classnames';
import styles from './Btn.module.scss'


export const Btn = ({ children, ...props }) => {

    return (
        <button {...props} className={props.target === props.value ? cn(styles.btn, styles.active) : styles.btn}>
            <span className={styles.btn__text}>
                {children}
            </span>
        </button>
    );
};
