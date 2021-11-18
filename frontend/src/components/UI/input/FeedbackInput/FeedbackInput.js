import React from 'react';
import styles from './FeedbackInput.module.scss';


export const FeedbackInput = (props) => {
    return (
        <input {...props} className={styles.input} />
    );
};
