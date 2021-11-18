import React from 'react';
import { Btn } from '../../UI/button/Btn';
import './Body.scss'


export const Body = () => {
    return (
        <div className='clinic-card'>
            <h3 className='clinic-card__name'>Современная&nbsp;стоматология&nbsp;«Зубная&nbsp;формула»</h3>
            <h1 className='clinic-card__slogan slogan__positon'>Ваша улыбка -<br />наша забота!</h1>
            <Btn>Записаться на бесплатный приём</Btn>
        </div>
    );
};
