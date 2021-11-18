import React from 'react';
import { Card } from '../Card/Card';
import './List.scss';

export const AboutUs = () => {
    const imgPath = (imgName) => require(`../../../assets/img/aboutUsIcons/${imgName}.png`).default;
    const cards = [
        { id: 1, imgPath: imgPath('im1'), imgDescription: 'Высококвалифицированные\nспециалисты стоматологи' },
        { id: 2, imgPath: imgPath('im6'), imgDescription: 'Только современные и безопасные\nматериалы и лекарства' },
        { id: 3, imgPath: imgPath('im3'), imgDescription: 'Доступные цены\nи выгодные предложения' },
        { id: 4, imgPath: imgPath('im2'), imgDescription: 'Новейшее стоматологическое\nоборудование' },
        { id: 5, imgPath: imgPath('im5'), imgDescription: 'Уютная обстановка\nи доброжелательный персонал' },
        { id: 6, imgPath: imgPath('im4'), imgDescription: 'Гарантия на все произведенные\nнами работы' },
    ]

    return (
        <div className='aboutUs-box'>
            <h1 className='aboutUs__heading'>Почему нас выбирают:</h1>
            <div className='aboutUs__elems'>
                {cards.map(card =>
                    <Card key={card.id} card={card} />
                )}
            </div>
        </div>
    );
};
