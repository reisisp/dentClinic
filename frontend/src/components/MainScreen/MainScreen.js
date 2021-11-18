import React from 'react';
import { Body } from './Body/Body';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import styles from './MainScreen.module.scss';


export const MainScreen = () => {
    return (
        <div className={styles.box} >
            <Header />
            <div className={styles.mainscreen__content}>
                <Body />
                <Footer />
            </div>
            <div className={styles.mainscreen__hiden}>
                <div >
                    <h1 >Первый прием - <br />бесплатно!</h1>
                    <p >Оставьте свои контактные данные,<br />чтобы записаться на бесплатную<br />консультацию в нашей стоматологии.</p>
                    <form action="#">
                        <input type="text" name="" id="" />
                        <input type="tel" />
                        <input type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
}
