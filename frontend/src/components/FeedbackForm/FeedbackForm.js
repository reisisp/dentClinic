import React from "react";
import { Btn } from "../UI/button/FeedbackBtn/Btn";
import { FeedbackInput } from "../UI/input/FeedbackInput/FeedbackInput";
import styles from './FeedbackForm.module.scss';

export const FeedbackForm = () => {

    const test = () => {
        console.log('test')
    }

    return (
        <div className={styles.box}>
            <div className={styles.feedback}>
                <div className={styles.feedback__desc}>
                    <h1 className={styles.heading}>Первый&nbsp;прием&nbsp;-<br />бесплатно!</h1>
                    <p className={styles.text}>Оставьте свои контактные данные,<br />чтобы записаться на&nbsp;бесплатную<br />консультацию в&nbsp;нашей стоматологии.</p>
                </div>
                <div className={styles.feedback__form}>
                    <div className={styles.feedback__inputs}>
                        <FeedbackInput type='text' placeholder='Имя и Фамилия' />
                        <FeedbackInput type='tel' placeholder='+7' />
                    </div>
                    <Btn onClick={test}>Записаться на прием</Btn>
                </div>
            </div>

        </div>
    )
}