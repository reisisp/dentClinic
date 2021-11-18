import React from 'react';
import './Card.scss';


export const Card = (props) => {
    return (
        <div className='card-box'>
            <div className='card'>
                <img className='card__img' src={props.card.imgPath || 'http://placehold.it/140x140'} alt='icon' />
                <p className='card__description'>{props.card.imgDescription || 'Описание'}</p>
            </div>
        </div>
    );
};
