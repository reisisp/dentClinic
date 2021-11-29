import React from 'react';
import styles from './Table.module.scss';

export const Table = (props) => {
    const data = props.data;

    return (
        <div className={styles.box}>
            <div className={styles.table}>
                {
                    data.map((service, index) =>
                        <p key={index} className={styles.table__elem}>
                            <span className={styles.table__text}>{service[0]}</span>
                            <span className={styles.table__text}>{service[1] + ' руб.'}</span>
                        </p>
                    )
                }
            </div>
        </div>
    )
}