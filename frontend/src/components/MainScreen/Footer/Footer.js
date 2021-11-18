import React from 'react';
import './Footer.scss'


export const Footer = () => {
    const imgPath = (imgName) => require(`../../../assets/img/${imgName}`).default;

    return (
        <div className='info-box'>
            <div className='info'>
                <div className='info__work-time'>
                    <img src={imgPath('customIcons/clock.svg')} alt='clock' />
                    <p className='info__text'>Работаем с 9 до 21 без выходных<br />и праздничных дней</p>
                </div>
                <div className='info__address'>
                    <img src={imgPath('customIcons/map.svg')} alt='clock' />
                    <p className='info__text'>м.Беговая<br />ул. 3-й Хорошёвский проезд, д.4</p>
                </div>
            </div>
        </div>
    );
};
