import React from 'react';
import { Body } from './Body/Body';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import './MainScreen.scss'


export const MainScreen = () => {
    return (
        <div className='mainscreen-box' >
            <Header />
            <div className='mainscreen__content'>
                <Body />
                <Footer />
            </div>
            <div className='mainscreen__hiden'>
                <div className="action-card">
                    <h1 className="action-card__heading">Первый прием - <br />бесплатно!</h1>
                    <p className="action-card__info">Оставьте свои контактные данные,<br />чтобы записаться на бесплатную<br />консультацию в нашей стоматологии.</p>
                    <form action="#">
                        <input type="text" name="" id="" />
                        <input type="tel" />
                        <input type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};
